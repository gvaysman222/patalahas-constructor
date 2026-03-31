<script>
function getTildaCartForm() {
      return document.querySelector('.t706 .js-form-proccess[data-formcart="y"]')
        || document.querySelector('.t706__orderform form')
        || null;
    }

    function getTildaCartFormFields(form = getTildaCartForm()) {
      if (!form) {
        return {
          form: null,
          nameInput: null,
          emailInput: null,
          phoneInput: null,
        };
      }
      const nameInput = form.querySelector('.t-input-group_nm input')
        || form.querySelector('input[name="Name"]')
        || form.querySelector('input[data-tilda-rule="name"]');
      const emailInput = form.querySelector('.t-input-group_em input')
        || form.querySelector('input[type="email"]')
        || form.querySelector('input[name="Email"]');
      const phoneInput = form.querySelector('.t-input-group_ph input[type="tel"]')
        || form.querySelector('.js-phonemask-input')
        || form.querySelector('input[name="Phone"]');
      return {
        form,
        nameInput: nameInput || null,
        emailInput: emailInput || null,
        phoneInput: phoneInput || null,
      };
    }

    function getTildaCartCommentInput(form = getTildaCartForm()) {
      return form?.querySelector('.t-input-group_tx textarea, textarea[name="Comment"], textarea') || null;
    }

    function setTildaFormFieldValue(field, value = '') {
      if (!field) return;
      field.value = String(value ?? '');
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function hasMeaningfulTildaFieldValue(field, value = '') {
      const normalizedValue = String(value ?? '');
      if (!normalizedValue) return false;
      const fieldType = String(field?.getAttribute?.('type') || '').toLowerCase();
      const fieldName = String(field?.getAttribute?.('name') || '').toLowerCase();
      if (fieldType === 'tel' || fieldName === 'phone' || field?.classList?.contains('js-phonemask-input')) {
        return normalizedValue.replace(/\D+/g, '').length > 1;
      }
      return normalizedValue.trim().length > 0;
    }

    function restoreTildaFormFieldValue(field, value = '') {
      if (!field) return;
      if (field === document.activeElement) return;
      const nextValue = String(value ?? '');
      const currentValue = String(field.value ?? '');
      const currentHasValue = hasMeaningfulTildaFieldValue(field, currentValue);
      const nextHasValue = hasMeaningfulTildaFieldValue(field, nextValue);
      if (currentHasValue && currentValue !== nextValue) return;
      if (!currentHasValue && !nextHasValue) return;
      if (currentValue === nextValue) return;
      setTildaFormFieldValue(field, nextValue);
    }

    function pickFirstFilledCartValue(...values) {
      for (const value of values) {
        const normalizedValue = String(value ?? '');
        if (normalizedValue.trim()) return normalizedValue;
      }
      return String(values[values.length - 1] ?? '');
    }

    function captureTildaCartFormValues(form = getTildaCartForm()) {
      const { nameInput, emailInput, phoneInput } = getTildaCartFormFields(form);
      const commentInput = getTildaCartCommentInput(form);
      const localEmailInput = document.getElementById('configuratorEmail');
      const localNameInput = document.getElementById('configuratorName');
      const localPhoneInput = document.getElementById('configuratorPhone');
      const localCommentInput = document.getElementById('configuratorComment');
      return {
        email: pickFirstFilledCartValue(emailInput?.value, localEmailInput?.value, state.email, '').trim(),
        customerName: pickFirstFilledCartValue(nameInput?.value, localNameInput?.value, state.customerName, '').trim(),
        phone: pickFirstFilledCartValue(phoneInput?.value, localPhoneInput?.value, state.phone, '').trim(),
        comment: pickFirstFilledCartValue(commentInput?.value, localCommentInput?.value, state.comment, ''),
      };
    }

    async function restoreTildaCartFormValues(values = null, fallbackForm = null, attempts = 4, intervalMs = 120) {
      const snapshot = values || captureTildaCartFormValues(fallbackForm);
      if (!snapshot) return;
      for (let attempt = 0; attempt < attempts; attempt += 1) {
        const targetForm = findTildaOrderForm() || fallbackForm || getTildaCartForm();
        if (targetForm) {
          const { nameInput, emailInput, phoneInput } = getTildaCartFormFields(targetForm);
          const commentInput = getTildaCartCommentInput(targetForm);
          restoreTildaFormFieldValue(emailInput, snapshot.email);
          restoreTildaFormFieldValue(nameInput, snapshot.customerName);
          restoreTildaFormFieldValue(phoneInput, snapshot.phone);
          restoreTildaFormFieldValue(commentInput, snapshot.comment);
        }
        if (attempt < attempts - 1) {
          await delay(intervalMs);
        }
      }
    }

    async function withPreservedTildaCartFormValues(task, options = {}) {
      if (typeof task !== 'function') return undefined;
      const fallbackForm = options.form || findTildaOrderForm() || getTildaCartForm();
      const snapshot = options.values || captureTildaCartFormValues(fallbackForm);
      if (!snapshot) {
        return task();
      }
      const observerRoot = options.observeRoot
        || getTildaCartWindow()
        || fallbackForm
        || document.querySelector('.t706')
        || document.body
        || document.documentElement;
      const trailingRestoreDelays = Array.isArray(options.trailingRestoreDelays) && options.trailingRestoreDelays.length
        ? options.trailingRestoreDelays
        : [0, 120, 320, 700, 1400];
      const observerDurationMs = Math.max(800, Number(options.observerDurationMs) || 1800);
      let cleanupDone = false;
      let restoreTimer = 0;
      let observer = null;
      const scheduledTimeouts = [];
      const scheduleRestore = (delayMs = 0) => {
        if (cleanupDone) return;
        clearTimeout(restoreTimer);
        restoreTimer = window.setTimeout(() => {
          void restoreTildaCartFormValues(snapshot, fallbackForm, 3, 140);
        }, Math.max(0, Number(delayMs) || 0));
      };
      if (observerRoot && typeof MutationObserver !== 'undefined') {
        observer = new MutationObserver(() => {
          scheduleRestore(60);
        });
        observer.observe(observerRoot, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
        });
      }
      const finalize = () => {
        if (cleanupDone) return;
        cleanupDone = true;
        clearTimeout(restoreTimer);
        if (observer) observer.disconnect();
        scheduledTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      };
      try {
        const result = await task(snapshot);
        trailingRestoreDelays.forEach((delayMs) => {
          const timeoutId = window.setTimeout(() => {
            void restoreTildaCartFormValues(snapshot, fallbackForm, 3, 140);
          }, Math.max(0, Number(delayMs) || 0));
          scheduledTimeouts.push(timeoutId);
        });
        const finalizeTimeoutId = window.setTimeout(finalize, observerDurationMs);
        scheduledTimeouts.push(finalizeTimeoutId);
        return result;
      } catch (error) {
        finalize();
        await restoreTildaCartFormValues(snapshot, fallbackForm, 5, 160);
        throw error;
      }
    }

    function hasTildaUploadField(form) {
      return Boolean(form?.querySelector('.t-upwidget-container, .t-input-group_uw, input[type="file"]'));
    }

    function delay(ms = 0) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, Math.max(0, Number(ms) || 0));
      });
    }

    function waitForElement(getter, timeoutMs = 5000, intervalMs = 80) {
      const immediate = getter();
      if (immediate) return Promise.resolve(immediate);
      return new Promise((resolve) => {
        const startedAt = Date.now();
        const tick = () => {
          const value = getter();
          if (value) {
            resolve(value);
            return;
          }
          if (Date.now() - startedAt >= timeoutMs) {
            resolve(null);
            return;
          }
          window.setTimeout(tick, intervalMs);
        };
        tick();
      });
    }

    function getTildaUpwidgetContainer(form) {
      return form?.querySelector('.t-upwidget-container') || null;
    }

    function getTildaCartWindow() {
      return document.querySelector('.t706__cartwin, .t706__cartpage');
    }

    function isTildaCartWindowOpen() {
      const cartWindow = getTildaCartWindow();
      if (!cartWindow) return false;
      const styles = window.getComputedStyle(cartWindow);
      return styles.display !== 'none'
        && styles.visibility !== 'hidden'
        && (cartWindow.classList.contains('t706__cartwin_showed') || cartWindow.offsetParent !== null);
    }

    async function waitForTildaCartWindowOpen(timeoutMs = 5000) {
      return waitForElement(() => isTildaCartWindowOpen() ? getTildaCartWindow() : null, timeoutMs, 80);
    }

    function getTildaUpwidgetUploadedInputs(container) {
      if (!container) return [];
      return Array.from(container.querySelectorAll('.t-upwidget-container__data input[type="hidden"]'))
        .filter((input) => input.getAttribute('data-tilda-req') !== '1' && input.value);
    }

    function getTildaUpwidgetFieldName(container, index = 0, total = 1) {
      const baseName = container?.getAttribute('data-tilda-name') || 'file';
      if (total <= 1) return baseName;
      const isMultiple = container?.getAttribute('data-tilda-upwidget-multiple') === 'true';
      return isMultiple ? `${baseName}[]` : `${baseName}_${index}`;
    }

    function extractTildaUploadedFileName(value = '') {
      const normalizedValue = String(value || '').trim();
      if (!normalizedValue) return '';
      const rawName = normalizedValue.split('/').pop() || '';
      try {
        return decodeURIComponent(rawName);
      } catch (_) {
        return rawName;
      }
    }

    function getTildaUpwidgetExistingEntries(container) {
      if (!container) return [];
      const rows = Array.from(container.querySelectorAll('.t-upwidget-container__data_table'));
      if (rows.length) {
        return rows.map((row) => {
          const input = row.querySelector('input[type="hidden"]');
          const fileName = row.querySelector('.t-upwidget-container__data_filename')?.textContent?.trim()
            || extractTildaUploadedFileName(input?.value || '');
          const value = input?.value || '';
          if (!value || !fileName) return null;
          return {
            item: {
              value,
              uploadedName: fileName,
            },
            sourceFile: {
              name: fileName,
            },
          };
        }).filter(Boolean);
      }
      return getTildaUpwidgetUploadedInputs(container).map((input) => {
        const fileName = extractTildaUploadedFileName(input.value);
        if (!input.value || !fileName) return null;
        return {
          item: {
            value: input.value,
            uploadedName: fileName,
          },
          sourceFile: {
            name: fileName,
          },
        };
      }).filter(Boolean);
    }

    function mergeTildaUpwidgetEntries(existingEntries, newUploadedItems, newSourceFiles) {
      const merged = new Map();
      Array.from(existingEntries || []).forEach((entry) => {
        const fileName = entry?.sourceFile?.name || entry?.item?.uploadedName || '';
        if (!fileName || !entry?.item?.value) return;
        merged.set(fileName, {
          item: {
            value: entry.item.value,
            uploadedName: fileName,
          },
          sourceFile: {
            name: fileName,
          },
        });
      });
      Array.from(newUploadedItems || []).forEach((item, index) => {
        const sourceFile = newSourceFiles?.[index] || null;
        const fileName = sourceFile?.name || item?.uploadedName || extractTildaUploadedFileName(item?.value || '');
        if (!fileName || !item?.value) return;
        merged.set(fileName, {
          item: {
            value: item.value,
            uploadedName: fileName,
          },
          sourceFile: sourceFile || { name: fileName },
        });
      });
      return Array.from(merged.values());
    }

    async function waitForTildaUpwidgetContainer(form, timeoutMs = 5000) {
      return waitForElement(() => getTildaUpwidgetContainer(form), timeoutMs);
    }

    async function clearTildaUpwidgetFiles(container) {
      if (!container) return;
      const removeButtons = Array.from(container.querySelectorAll('.t-upwidget-container__data_table_actions_remove svg'));
      if (!removeButtons.length) {
        getTildaUpwidgetUploadedInputs(container).forEach((input) => input.remove());
        return;
      }
      removeButtons.forEach((button) => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      });
      await waitForElement(() => (
        container.querySelectorAll('.t-upwidget-container__data_table_actions_remove svg').length === 0
          && getTildaUpwidgetUploadedInputs(container).length === 0
      ) ? container : null, 2500, 80);
    }

    async function uploadFileToTildaUpwidgetApi(container, file) {
      const uploadKey = container?.getAttribute('data-tilda-upwidget-key') || '';
      if (!uploadKey || !file) return null;
      const formData = new FormData();
      formData.append(uploadKey, file);
      const response = await fetch('https://upwidget.tildacdn.com/upload/', {
        method: 'POST',
        body: formData,
        credentials: 'omit',
      });
      if (!response.ok) {
        throw new Error(`Tilda upload HTTP ${response.status}`);
      }
      const payload = await response.json();
      if (payload?.status === 'fail') {
        throw new Error(payload?.error || 'Tilda upload failed');
      }
      const uploadedFile = Array.isArray(payload) ? payload[0] : null;
      if (!uploadedFile?.url || !uploadedFile?.filename) {
        throw new Error('Tilda upload returned unexpected payload');
      }
      return {
        value: `${uploadedFile.url}/${encodeURIComponent(uploadedFile.filename)}`,
        uploadedName: uploadedFile.filename,
      };
    }

    function renderTildaUpwidgetUploadedState(container, uploadedItems, sourceFiles) {
      if (!container) return false;
      const dataArea = container.querySelector('.t-upwidget-container__data');
      const button = container.querySelector('.t-upwidget-container__button');
      if (!dataArea || !button) return false;
      const entries = Array.from(uploadedItems || []).filter(Boolean);
      const files = Array.from(sourceFiles || []).filter(Boolean);
      const total = entries.length;
      dataArea.innerHTML = entries.map((item, index) => {
        const sourceFile = files[index];
        const fileName = sourceFile?.name || item.uploadedName || `file-${index + 1}`;
        const sizeLabel = sourceFile ? `${(sourceFile.size / 1024).toFixed(1)} KB` : '';
        return `
          <div class="t-upwidget-container__data_table t-text">
            <div class="t-upwidget-container__data_filename">${escapeHtml(fileName)}</div>
            ${sizeLabel ? `<div class="t-upwidget-container__data_filesize">${escapeHtml(sizeLabel)}</div>` : ''}
            <input
              type="hidden"
              name="${escapeAttr(getTildaUpwidgetFieldName(container, index, total))}"
              value="${escapeAttr(item.value)}"
            >
          </div>
        `;
      }).join('');
      const requiredPlaceholder = container.querySelector('input[type="hidden"][data-tilda-req="1"]');
      if (entries.length) {
        if (requiredPlaceholder) requiredPlaceholder.remove();
      } else if (!requiredPlaceholder) {
        container.insertAdjacentHTML(
          'beforeend',
          `<input type="hidden" class="js-tilda-rule" value="" name="${escapeAttr(container.getAttribute('data-tilda-name') || 'file')}" data-tilda-req="1">`
        );
      }
      button.classList.add('t-upwidget-multi-button');
      button.classList.add('t-upwidget-container__button_fileholder');
      button.textContent = total > 1 ? `Uploaded ${total} file(s)` : (files[0]?.name || 'File uploaded');
      container.dispatchEvent(new CustomEvent('uwFileUploaded', { bubbles: true }));
      return true;
    }

    async function uploadFilesToTildaUpwidget(container, files, options = {}) {
      const normalizedFiles = Array.from(files || []).filter(Boolean);
      if (!container || !normalizedFiles.length) return false;
      const { appendExisting = false } = options;
      const existingEntries = appendExisting ? getTildaUpwidgetExistingEntries(container) : [];
      const uploadedItems = [];
      const uploadedSourceFiles = [];
      for (const file of normalizedFiles.slice(0, 10)) {
        try {
          const uploadedItem = await uploadFileToTildaUpwidgetApi(container, file);
          if (uploadedItem) {
            uploadedItems.push(uploadedItem);
            uploadedSourceFiles.push(file);
          }
        } catch (error) {
          console.warn('Не удалось загрузить файл в Tilda upwidget, пробую следующий файл.', file?.name || '', error);
        }
      }
      if (!uploadedItems.length) return false;
      const mergedEntries = appendExisting
        ? mergeTildaUpwidgetEntries(existingEntries, uploadedItems, uploadedSourceFiles)
        : uploadedItems.map((item, index) => ({
          item,
          sourceFile: uploadedSourceFiles[index] || null,
        }));
      return renderTildaUpwidgetUploadedState(
        container,
        mergedEntries.map((entry) => entry.item),
        mergedEntries.map((entry) => entry.sourceFile)
      );
    }

    function findTildaOrderForm(options = {}) {
      const { requireFileInput = false } = options;
      const cartForm = getTildaCartForm();
      if (cartForm) {
        if (!requireFileInput || hasTildaUploadField(cartForm)) {
          return cartForm;
        }
      }
      const directTargets = requireFileInput
        ? Array.from(document.querySelectorAll('.t706 .t-upwidget-container, .t706 .t-input-group_uw, .t706 input[type="file"]'))
        : [
          ...document.querySelectorAll('.t706 .t-upwidget-container'),
          ...document.querySelectorAll('.t706 .t-input-group_uw'),
          ...document.querySelectorAll('.t706 input[type="email"], .t706 input[name="Email"], .t706 .t-input-group_em input'),
          ...document.querySelectorAll('.t706 input[name="Name"], .t706 .t-input-group_nm input'),
        ].filter(Boolean);
      for (const node of directTargets) {
        const form = node.matches?.('form') ? node : node.closest('form');
        if (form) return form;
      }
      const forms = Array.from(document.querySelectorAll('.t706 form, form'));
      if (requireFileInput) {
        return forms.find((form) => hasTildaUploadField(form)) || null;
      }
      return forms.find((form) => form.matches?.('.t706 .js-form-proccess') || form.closest('.t706'))
        || forms.find((form) => form.querySelector('.t-upwidget-container, .t-input-group_uw'))
        || forms.find((form) => form.querySelector('input[type="email"], input[name="Email"], .t-input-group_em input'))
        || null;
    }

    function waitForTildaOrderForm(timeoutMs = 5000, options = {}) {
      const existingForm = findTildaOrderForm(options);
      if (existingForm) return Promise.resolve(existingForm);
      return new Promise((resolve) => {
        const root = document.body || document.documentElement;
        if (!root || typeof MutationObserver === 'undefined') {
          window.setTimeout(() => resolve(findTildaOrderForm(options)), timeoutMs);
          return;
        }
        const observer = new MutationObserver(() => {
          const form = findTildaOrderForm(options);
          if (!form) return;
          clearTimeout(timerId);
          observer.disconnect();
          resolve(form);
        });
        const timerId = window.setTimeout(() => {
          observer.disconnect();
          resolve(findTildaOrderForm(options));
        }, timeoutMs);
        observer.observe(root, {
          childList: true,
          subtree: true,
        });
      });
    }
    function createMutableFileTransfer() {
      if (typeof DataTransfer !== 'undefined') {
        try {
          return new DataTransfer();
        } catch (_) {}
      }
      if (typeof ClipboardEvent !== 'undefined') {
        try {
          const clipboardData = new ClipboardEvent('paste').clipboardData;
          if (clipboardData && typeof clipboardData.items?.add === 'function') {
            return clipboardData;
          }
        } catch (_) {}
      }
      return null;
    }

    function syncFileToInput(input, files) {
      if (!input || !files?.length) return false;
      try {
        const dt = createMutableFileTransfer();
        if (!dt) return false;
        files.forEach((file) => {
          if (file) dt.items.add(file);
        });
        input.files = dt.files;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
      } catch (error) {
        console.warn('РќРµ СѓРґР°Р»РѕСЃСЊ СЃРёРЅС…СЂРѕРЅРёР·РёСЂРѕРІР°С‚СЊ С„Р°Р№Р»С‹ СЃ input[type=file]', error);
        return false;
      }
    }

    function syncFilesToAvailableInputs(inputs, files) {
      const normalizedInputs = Array.from(inputs || []).filter(Boolean);
      const normalizedFiles = Array.from(files || []).filter(Boolean);
      if (!normalizedInputs.length || !normalizedFiles.length) return false;
      const multipleInput = normalizedInputs.find((input) => input.multiple);
      if (multipleInput) {
        return syncFileToInput(multipleInput, normalizedFiles);
      }
      if (normalizedInputs.length >= normalizedFiles.length) {
        normalizedFiles.forEach((file, index) => {
          syncFileToInput(normalizedInputs[index], [file]);
        });
        return true;
      }
      return syncFileToInput(normalizedInputs[0], [normalizedFiles[normalizedFiles.length - 1]]);
    }

    function clearFilesFromInput(input) {
      if (!input) return false;
      try {
        const dt = createMutableFileTransfer();
        if (!dt) throw new Error('Mutable file transfer is unavailable.');
        input.files = dt.files;
      } catch (_) {
        try {
          input.value = '';
        } catch (_) {
          return false;
        }
      }
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }

    async function syncTrackedCartUploadFilesToTildaForm(tildaForm = findTildaOrderForm({ requireFileInput: true })) {
      if (!tildaForm) return false;
      const trackedFiles = getCartUploadFilesSnapshot();
      const preservedFormValues = captureTildaCartFormValues(tildaForm);
      return withPreservedTildaCartFormValues(async () => {
        const upwidgetContainer = await waitForTildaUpwidgetContainer(tildaForm, 1500);
        if (upwidgetContainer) {
          await clearTildaUpwidgetFiles(upwidgetContainer);
          if (trackedFiles.length) {
            await uploadFilesToTildaUpwidget(upwidgetContainer, trackedFiles).catch(() => false);
          }
          return true;
        }
        const fileInputs = Array.from(tildaForm.querySelectorAll('.t-input-group_uw input[type="file"], input[type="file"]'));
        if (!fileInputs.length) {
          return false;
        }
        if (trackedFiles.length) {
          syncFilesToAvailableInputs(fileInputs, trackedFiles);
        } else {
          fileInputs.forEach((input) => clearFilesFromInput(input));
        }
        return true;
      }, {
        form: tildaForm,
        values: preservedFormValues,
      });
    }

    async function syncCartUploadFilesWithActiveCart() {
      if (cartUploadCleanupInFlight) return false;
      cartUploadCleanupInFlight = true;
      try {
        const { changed } = pruneCartUploadFilesByActiveCart();
        if (!changed) return false;
        const targetForm = findTildaOrderForm({ requireFileInput: true })
          || await waitForTildaOrderForm(1500, { requireFileInput: true });
        if (targetForm) {
          await syncTrackedCartUploadFilesToTildaForm(targetForm);
        }
        return true;
      } finally {
        cartUploadCleanupInFlight = false;
      }
    }

    function scheduleCartUploadCleanup(delayMs = 260) {
      clearTimeout(cartUploadCleanupTimer);
      cartUploadCleanupTimer = window.setTimeout(() => {
        if (orderSubmitInFlight) {
          scheduleCartUploadCleanup(Math.max(400, Number(delayMs) || 0, 260));
          return;
        }
        void syncCartUploadFilesWithActiveCart();
      }, Math.max(0, Number(delayMs) || 0));
    }

    function ensureCartUploadCleanupObserver(cartWindow = getTildaCartWindow()) {
      if (!cartWindow || typeof MutationObserver === 'undefined') return;
      if (cartUploadMutationObserverTarget === cartWindow && cartUploadMutationObserver) return;
      if (cartUploadMutationObserver) {
        cartUploadMutationObserver.disconnect();
      }
      cartUploadMutationObserverTarget = cartWindow;
      cartUploadMutationObserver = new MutationObserver(() => {
        scheduleCartUploadCleanup();
      });
      cartUploadMutationObserver.observe(cartWindow, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
      });
      scheduleCartUploadCleanup(0);
    }

function renderLeftSummary() {
      const rows = [];
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      rows.push(rowHtml('Изделие', selectedProduct.name));
      rows.push(rowHtml('Размер', state.size));
      rows.push(rowHtml('Цвет', selectedColor.name));
      if (hasSeamOptions()) {
        rows.push(rowHtml('Цвет швов', state.seam));
      }
      $('#leftSummary').innerHTML = rows.join('');
    }

    function rowHtml(label, value) {
      return `<div class="row"><span class="label">${label}</span><span>${value}</span></div>`;
    }

    function isSupportedImageFile(file) {
      if (!file) return false;
      const normalizedType = String(file.type || '').trim().toLowerCase();
      if (normalizedType.startsWith('image/')) return true;
      return /^(jpg|jpeg|png|webp|gif|bmp|heic|heif|avif)$/.test(getFileExtensionFromName(file.name));
    }

    function getTemplatePreview(template, mode = 'template') {
      const iconSlotId = `${mode}-${template.id}`;
      return `
        <div class="template-choice-icon">
          <div
            class="template-choice-icon-slot"
            data-template-icon-slot="${escapeAttr(iconSlotId)}"
            data-template-id="${escapeAttr(template.id)}"
            data-template-mode="${escapeAttr(mode)}"
          >
            <span class="template-choice-icon-placeholder">SVG</span>
          </div>
        </div>
      `;
    }

    function getSizesByProduct(productId) {
      if (productId === 'tee-iznanka' || productId === 'tee-base') return ['XS-S', 'M', 'L-XL'];
      if (productId === 'longsleeve-choice' || productId === 'sweatshirt-iznanka' || productId === 'hoodie-basic') return ['S-M', 'L-XL'];
      return [];
    }

    function parseCssPixelValue(value, fallback = 0) {
      const parsed = Number.parseFloat(String(value || '').trim());
      return Number.isFinite(parsed) ? parsed : fallback;
    }

    function getCheckoutPreviewDomMetrics() {
      const garmentWrap = document.getElementById('garmentWrap');
      if (!garmentWrap) return null;
      const rootRect = garmentWrap.getBoundingClientRect();
      if (!rootRect.width || !rootRect.height) return null;
      return { garmentWrap, rootRect, scaleX: 1000 / rootRect.width, scaleY: 1250 / rootRect.height };
    }

    function getElementLocalArtboardBox(element, domMetrics) {
      if (!(element instanceof HTMLElement) || !domMetrics) return null;
      return {
        x: element.offsetLeft * domMetrics.scaleX,
        y: element.offsetTop * domMetrics.scaleY,
        width: element.offsetWidth * domMetrics.scaleX,
        height: element.offsetHeight * domMetrics.scaleY,
      };
    }

    function parseCanvasTransformValues(transform = '') {
      const normalizedTransform = String(transform || '').trim();
      if (!normalizedTransform || normalizedTransform === 'none') {
        return { scaleX: 1, scaleY: 1, rotation: 0 };
      }
      const matrix3dMatch = normalizedTransform.match(/^matrix3d\((.+)\)$/i);
      if (matrix3dMatch) {
        const values = matrix3dMatch[1].split(',').map((value) => Number.parseFloat(value.trim()));
        if (values.length === 16 && values.every(Number.isFinite)) {
          return {
            scaleX: Math.hypot(values[0], values[1], values[2]) || 1,
            scaleY: Math.hypot(values[4], values[5], values[6]) || 1,
            rotation: Math.atan2(values[1], values[0]),
          };
        }
      }
      const matrixMatch = normalizedTransform.match(/^matrix\((.+)\)$/i);
      if (!matrixMatch) return { scaleX: 1, scaleY: 1, rotation: 0 };
      const values = matrixMatch[1].split(',').map((value) => Number.parseFloat(value.trim()));
      if (values.length < 6 || values.some((value) => !Number.isFinite(value))) {
        return { scaleX: 1, scaleY: 1, rotation: 0 };
      }
      const [a, b, c, d] = values;
      return {
        scaleX: Math.hypot(a, b) || 1,
        scaleY: Math.hypot(c, d) || 1,
        rotation: Math.atan2(b, a),
      };
    }

    function normalizeCanvasTextValue(value = '', textTransform = '') {
      const normalizedValue = String(value || '').replace(/\s+/g, ' ').trim();
      if (!normalizedValue) return '';
      if (textTransform === 'uppercase') return normalizedValue.toUpperCase();
      if (textTransform === 'lowercase') return normalizedValue.toLowerCase();
      return normalizedValue;
    }

    function measureCanvasTextWidth(ctx, text, letterSpacing = 0) {
      if (!ctx || !text) return 0;
      return ctx.measureText(String(text)).width + (Math.max(0, String(text).length - 1) * letterSpacing);
    }

    function splitCanvasTextByWidth(ctx, text, maxWidth, maxLines = 3, letterSpacing = 0) {
      const normalizedText = String(text || '').replace(/\s+/g, ' ').trim();
      if (!normalizedText) return [];
      const words = normalizedText.split(' ').filter(Boolean);
      if (!words.length) return [];
      const safeMaxWidth = Math.max(1, Number(maxWidth) || 0);
      const safeMaxLines = Math.max(1, Number(maxLines) || 1);
      const lines = [];
      let currentLine = words.shift() || '';
      while (words.length) {
        const nextWord = words[0];
        const candidate = `${currentLine} ${nextWord}`.trim();
        if (!currentLine || measureCanvasTextWidth(ctx, candidate, letterSpacing) <= safeMaxWidth) {
          currentLine = candidate;
          words.shift();
          continue;
        }
        lines.push(currentLine);
        currentLine = words.shift() || '';
        if (lines.length === safeMaxLines - 1) break;
      }
      const tail = [currentLine, ...words].filter(Boolean).join(' ').trim();
      if (tail) lines.push(tail);
      return lines.slice(0, safeMaxLines);
    }

    function drawCanvasLetterSpacedText(ctx, text, x, y, letterSpacing = 0) {
      const normalizedText = String(text || '');
      if (!normalizedText) return;
      if (!letterSpacing) {
        ctx.fillText(normalizedText, x, y);
        return;
      }
      const glyphs = Array.from(normalizedText);
      const widths = glyphs.map((glyph) => ctx.measureText(glyph).width);
      const totalWidth = widths.reduce((sum, width) => sum + width, 0) + (Math.max(0, glyphs.length - 1) * letterSpacing);
      let cursorX = x;
      if (ctx.textAlign === 'center') cursorX -= totalWidth / 2;
      else if (ctx.textAlign === 'right' || ctx.textAlign === 'end') cursorX -= totalWidth;
      glyphs.forEach((glyph, index) => {
        ctx.fillText(glyph, cursorX, y);
        cursorX += widths[index] + letterSpacing;
      });
    }

    function getCanvasFont(fontSize = 16, fontFamily = 'Inter, system-ui, sans-serif', fontWeight = 600) {
      return `${fontWeight} ${Math.max(1, Math.round(fontSize))}px ${fontFamily}`;
    }

    function drawCanvasTextBlock(ctx, lines, options = {}) {
      if (!ctx || !Array.isArray(lines) || !lines.length) return;
      const {
        x = 0,
        y = 0,
        lineHeight = 58,
        fontSize = 50,
        fill = '#111111',
        fontFamily = 'Inter, system-ui, sans-serif',
        anchor = 'middle',
        fontWeight = 600,
        letterSpacing = 0,
      } = options;
      ctx.save();
      ctx.fillStyle = fill;
      ctx.font = getCanvasFont(fontSize, fontFamily, fontWeight);
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = anchor === 'start' ? 'left' : anchor === 'end' ? 'right' : 'center';
      lines.forEach((line, index) => {
        drawCanvasLetterSpacedText(ctx, String(line || ''), x, y + (index * lineHeight), letterSpacing);
      });
      ctx.restore();
    }

    function drawCanvasTextElementInBox(ctx, element, box, domMetrics) {
      if (!ctx || !(element instanceof HTMLElement) || !box || !domMetrics) return false;
      const style = window.getComputedStyle(element);
      const text = normalizeCanvasTextValue(element.textContent || '', style.textTransform);
      if (!text) return false;
      const fontSize = parseCssPixelValue(style.fontSize, 12) * domMetrics.scaleX;
      const fallbackLineHeight = parseCssPixelValue(style.fontSize, 12) * 1.15;
      const lineHeight = parseCssPixelValue(style.lineHeight, fallbackLineHeight) * domMetrics.scaleY;
      const fontWeight = Number.parseInt(style.fontWeight, 10) || 600;
      const letterSpacing = parseCssPixelValue(style.letterSpacing, 0) * domMetrics.scaleX;
      const maxLines = Math.max(1, Number.parseInt(style.getPropertyValue('-webkit-line-clamp'), 10) || 3);
      const fontFamily = style.fontFamily || getFontFamily(state.font);
      ctx.save();
      ctx.font = getCanvasFont(fontSize, fontFamily, fontWeight);
      const lines = splitCanvasTextByWidth(ctx, text, Math.max(1, box.width), maxLines, letterSpacing);
      ctx.restore();
      const anchor = style.textAlign === 'left' ? 'start' : style.textAlign === 'right' ? 'end' : 'middle';
      drawCanvasTextBlock(ctx, lines, {
        x: anchor === 'start' ? box.x : anchor === 'end' ? box.x + box.width : box.x + (box.width / 2),
        y: box.y + fontSize,
        lineHeight,
        fontSize,
        fill: style.color || state.textColor,
        fontFamily,
        anchor,
        fontWeight,
        letterSpacing,
      });
      return true;
    }

    async function withCanvasElementTransform(ctx, element, domMetrics, callback) {
      if (!ctx || !(element instanceof HTMLElement) || !domMetrics || typeof callback !== 'function') return false;
      const rect = element.getBoundingClientRect();
      const centerX = (rect.left - domMetrics.rootRect.left + (rect.width / 2)) * domMetrics.scaleX;
      const centerY = (rect.top - domMetrics.rootRect.top + (rect.height / 2)) * domMetrics.scaleY;
      const localWidth = Math.max(1, element.offsetWidth) * domMetrics.scaleX;
      const localHeight = Math.max(1, element.offsetHeight) * domMetrics.scaleY;
      const { scaleX, scaleY, rotation } = parseCanvasTransformValues(window.getComputedStyle(element).transform);
      ctx.save();
      ctx.translate(centerX, centerY);
      if (rotation) ctx.rotate(rotation);
      ctx.scale(scaleX || 1, scaleY || 1);
      ctx.translate(-localWidth / 2, -localHeight / 2);
      try {
        await callback({ width: localWidth, height: localHeight });
        return true;
      } finally {
        ctx.restore();
      }
    }

    async function drawCanvasContainImage(ctx, src, x, y, width, height, options = {}) {
      if (!ctx || !src || !width || !height) return false;
      const { radius = 0, fill = '', stroke = '', strokeWidth = 0 } = options;
      let image = null;
      try {
        image = await loadImageElement(src);
      } catch (_) {
        return false;
      }
      const naturalWidth = image.naturalWidth || image.width || width;
      const naturalHeight = image.naturalHeight || image.height || height;
      const scale = Math.min(width / naturalWidth, height / naturalHeight);
      const drawWidth = naturalWidth * scale;
      const drawHeight = naturalHeight * scale;
      const drawX = x + ((width - drawWidth) / 2);
      const drawY = y + ((height - drawHeight) / 2);
      ctx.save();
      buildRoundedRectPath(ctx, x, y, width, height, radius);
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }
      ctx.clip();
      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();
      if (stroke && strokeWidth > 0) {
        ctx.save();
        buildRoundedRectPath(ctx, x, y, width, height, radius);
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
        ctx.restore();
      }
      return true;
    }

    async function drawCurrentUploadToCanvas(ctx, x, y, width, height, options = {}) {
      const upload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      if (!ctx || !upload?.url || !width || !height) return false;
      const { radius = 0, fill = '', stroke = '', strokeWidth = 0 } = options;
      let image = null;
      try {
        image = await loadImageElement(upload.url);
      } catch (_) {
        return false;
      }
      const naturalWidth = image.naturalWidth || image.width || width;
      const naturalHeight = image.naturalHeight || image.height || height;
      const coverScale = Math.max(width / naturalWidth, height / naturalHeight);
      const drawWidth = naturalWidth * coverScale;
      const drawHeight = naturalHeight * coverScale;
      const centerX = x + (width / 2) + ((state.cropPosition.x / 100) * width);
      const centerY = y + (height / 2) + ((state.cropPosition.y / 100) * height);
      const zoom = state.cropZoom || 1;
      const rotation = (state.cropRotation || 0) * Math.PI / 180;
      ctx.save();
      buildRoundedRectPath(ctx, x, y, width, height, radius);
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }
      ctx.clip();
      ctx.filter = state.photoGrayscale ? 'grayscale(1)' : 'none';
      ctx.translate(centerX, centerY);
      ctx.scale(zoom, zoom);
      ctx.rotate(rotation);
      ctx.drawImage(image, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
      ctx.restore();
      if (stroke && strokeWidth > 0) {
        ctx.save();
        buildRoundedRectPath(ctx, x, y, width, height, radius);
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
        ctx.restore();
      }
      return true;
    }

    function nextAnimationFrame() {
      return new Promise((resolve) => {
        window.requestAnimationFrame(() => resolve());
      });
    }

    async function withLiveCheckoutPreviewScene(callback) {
      if (typeof callback !== 'function') return null;
      const flatPreview = document.getElementById('checkoutPreviewFlat');
      const baseImage = document.getElementById('baseImage');
      const designLayer = document.getElementById('designLayer');
      const shouldRevealLiveScene = (flatPreview && flatPreview.style.display !== 'none')
        || (baseImage && baseImage.style.visibility === 'hidden')
        || (designLayer && designLayer.style.display === 'none');
      if (!shouldRevealLiveScene) return callback();
      const previousFlatPreviewDisplay = flatPreview?.style.display || '';
      const previousBaseImageVisibility = baseImage?.style.visibility || '';
      const previousDesignLayerDisplay = designLayer?.style.display || '';
      if (flatPreview) flatPreview.style.display = 'none';
      if (baseImage) baseImage.style.visibility = '';
      if (designLayer) designLayer.style.display = '';
      await nextAnimationFrame();
      await nextAnimationFrame();
      try {
        return await callback();
      } finally {
        if (flatPreview) flatPreview.style.display = previousFlatPreviewDisplay;
        if (baseImage) baseImage.style.visibility = previousBaseImageVisibility;
        if (designLayer) designLayer.style.display = previousDesignLayerDisplay;
      }
    }

    async function drawCheckoutBaseImageToCanvas(ctx) {
      if (!ctx) return false;
      const baseImageElement = document.getElementById('baseImage');
      const baseImageSource = baseImageElement?.currentSrc
        || baseImageElement?.getAttribute('src')
        || getCurrentProductImage()
        || getProductImagePlaceholder(state.product, state.color);
      if (!baseImageSource) return false;
      const resolvedSource = await fetchImageAsDataUrl(baseImageSource);
      const fallbackSource = getProductImagePlaceholder(state.product, state.color);
      const transformValues = baseImageElement
        ? parseCanvasTransformValues(window.getComputedStyle(baseImageElement).transform)
        : { scaleX: 1.12, scaleY: 1.12 };
      const baseScale = ((transformValues.scaleX || 1.12) + (transformValues.scaleY || 1.12)) / 2;
      let rendered = false;
      ctx.save();
      ctx.translate(500, 625);
      ctx.scale(baseScale, baseScale);
      rendered = await drawCanvasContainImage(ctx, resolvedSource, -500, -625, 1000, 1250);
      if (!rendered && fallbackSource && fallbackSource !== resolvedSource) {
        rendered = await drawCanvasContainImage(ctx, fallbackSource, -500, -625, 1000, 1250);
      }
      ctx.restore();
      return rendered;
    }

    async function renderPolaroidPreviewCanvasFromDom(ctx, domMetrics) {
      if (!ctx || !domMetrics) return false;
      const designLayer = document.getElementById('designLayer');
      const wrap = designLayer?.querySelector('.polaroid-wrap');
      const frame = wrap?.querySelector('.polaroid-frame');
      const photo = wrap?.querySelector('.polaroid-photo');
      if (!(wrap instanceof HTMLElement) || !(frame instanceof HTMLElement) || !(photo instanceof HTMLElement)) {
        return false;
      }
      const textBlocks = Array.from(wrap.querySelectorAll('.polaroid-text')).filter((node) => node instanceof HTMLElement);
      const hasUpload = Boolean(state.uploads[state.activeUploadIndex] || state.uploads[0]);
      await withCanvasElementTransform(ctx, wrap, domMetrics, async () => {
        const frameStyle = window.getComputedStyle(frame);
        const photoStyle = window.getComputedStyle(photo);
        const frameBox = getElementLocalArtboardBox(frame, domMetrics);
        const photoBox = getElementLocalArtboardBox(photo, domMetrics);
        if (!frameBox || !photoBox) return;
        const frameRadius = parseCssPixelValue(frameStyle.borderRadius, 8) * domMetrics.scaleX;
        const photoRadius = parseCssPixelValue(photoStyle.borderRadius, 4) * domMetrics.scaleX;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.08)';
        ctx.shadowBlur = 18 * domMetrics.scaleX;
        ctx.shadowOffsetY = 6 * domMetrics.scaleY;
        buildRoundedRectPath(ctx, frameBox.x, frameBox.y, frameBox.width, frameBox.height, frameRadius);
        ctx.fillStyle = frameStyle.backgroundColor || '#ffffff';
        ctx.fill();
        ctx.restore();
        ctx.save();
        buildRoundedRectPath(ctx, frameBox.x, frameBox.y, frameBox.width, frameBox.height, frameRadius);
        ctx.lineWidth = Math.max(1, parseCssPixelValue(frameStyle.borderWidth, 1) * domMetrics.scaleX);
        ctx.strokeStyle = frameStyle.borderColor || '#d1d5db';
        ctx.stroke();
        ctx.restore();
        if (hasUpload) {
          await drawCurrentUploadToCanvas(ctx, photoBox.x, photoBox.y, photoBox.width, photoBox.height, {
            radius: photoRadius,
            fill: photoStyle.backgroundColor || '#f3f4f6',
          });
        } else {
          ctx.save();
          buildRoundedRectPath(ctx, photoBox.x, photoBox.y, photoBox.width, photoBox.height, photoRadius);
          ctx.fillStyle = photoStyle.backgroundColor || '#f3f4f6';
          ctx.fill();
          ctx.restore();
          ctx.save();
          ctx.fillStyle = '#9ca3af';
          ctx.font = getCanvasFont(10 * domMetrics.scaleX, 'Inter, system-ui, sans-serif', 600);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          drawCanvasLetterSpacedText(ctx, 'PHOTO', photoBox.x + (photoBox.width / 2), photoBox.y + (photoBox.height / 2), 2 * domMetrics.scaleX);
          ctx.restore();
        }
        textBlocks.forEach((element) => {
          const textBox = getElementLocalArtboardBox(element, domMetrics);
          if (textBox) drawCanvasTextElementInBox(ctx, element, textBox, domMetrics);
        });
      });
      return true;
    }

    function animateStandardStepTransition(previousStep) {
      if (previousStep == null || previousStep === state.step) return;
      if (previousStep < 1 || previousStep > 5 || state.step < 1 || state.step > 5) return;
      if (!window.gsap) return;

      const panel = document.getElementById('stepPanel');
      if (!panel) return;

      const animatedItems = [
        panel.querySelector('.panel-head'),
        ...window.gsap.utils.toArray('#stepContent > *'),
      ].filter(Boolean);
      if (!animatedItems.length) return;

      window.gsap.killTweensOf(animatedItems);
      window.gsap.set(animatedItems, { clearProps: 'transform,opacity,filter' });
      window.gsap.timeline({
        defaults: {
          duration: 0.42,
          ease: 'power3.out',
        },
      })
        .from(panel.querySelector('.panel-head'), {
          x: 18,
          autoAlpha: 0,
          filter: 'blur(6px)',
          duration: 0.34,
        }, 0)
        .from(window.gsap.utils.toArray('#stepContent > *'), {
          x: 22,
          autoAlpha: 0,
          filter: 'blur(8px)',
          stagger: 0.08,
        }, 0.05);
    }

    function scrollActiveMobileStepIntoView(behavior = 'smooth') {
      const stepList = document.getElementById('stepListMobile');
      if (!stepList || window.innerWidth > 768) return;

      const activeButton = stepList.querySelector('.step-btn.active');
      if (!activeButton) return;

      const maxScrollLeft = Math.max(0, stepList.scrollWidth - stepList.clientWidth);
      const targetLeft = Math.max(0, Math.min(
        activeButton.offsetLeft - (stepList.clientWidth - activeButton.offsetWidth) / 2,
        maxScrollLeft
      ));
      stepList.scrollTo({ left: targetLeft, behavior });
    }

    function getProductCardPreviewImage(productId) {
      return getProductPreviewImage(
        productId,
        productId === state.product ? { color: state.color, seam: state.seam } : (state.productVariants?.[productId] || null)
      ) || productImages[productId]?.[0]?.image || '';
    }

    function syncStepOneProductCardPreviews(container = document.getElementById('stepContent')) {
      if (!container) return;
      container.querySelectorAll('[data-product-preview-img]').forEach((img) => {
        const productId = img.dataset.productPreviewImg;
        const nextSrc = getProductCardPreviewImage(productId);
        syncDeferredImageSource(img, nextSrc);
      });
    }

    function setGarmentBaseImageLoading(isLoading) {
      const garment = document.getElementById('garment');
      const overlay = document.getElementById('garmentLoadingOverlay');
      if (garment) {
        garment.classList.toggle('is-base-loading', isLoading);
      }
      if (overlay) {
        overlay.setAttribute('aria-hidden', isLoading ? 'false' : 'true');
      }
    }

    function syncDeferredImageSource(img, nextSrc, options = {}) {
      if (!(img instanceof HTMLImageElement)) return Promise.resolve(String(nextSrc || ''));
      const normalizedNextSrc = String(nextSrc || '');
      const currentSrc = img.dataset.currentSrc || '';
      const pendingSrc = img.dataset.pendingSrc || '';
      if (currentSrc === normalizedNextSrc || pendingSrc === normalizedNextSrc) {
        return Promise.resolve(normalizedNextSrc);
      }

      const requestId = String((Number(img.dataset.requestId || '0') || 0) + 1);
      img.dataset.requestId = requestId;
      img.dataset.pendingSrc = normalizedNextSrc;
      if (typeof options.setLoading === 'function') {
        options.setLoading(Boolean(normalizedNextSrc));
      }

      const finalize = () => {
        if (img.dataset.requestId !== requestId) return Promise.resolve(normalizedNextSrc);
        img.dataset.pendingSrc = '';
        img.dataset.currentSrc = normalizedNextSrc;
        if (normalizedNextSrc) {
          img.src = normalizedNextSrc;
        } else {
          img.removeAttribute('src');
        }
        const settlePromise = normalizedNextSrc && typeof img.decode === 'function'
          ? img.decode().catch(() => {})
          : Promise.resolve();
        return Promise.resolve(settlePromise).finally(() => {
          if (img.dataset.requestId !== requestId) return;
          if (typeof options.setLoading === 'function') {
            options.setLoading(false);
          }
        }).then(() => normalizedNextSrc);
      };

      if (!normalizedNextSrc) {
        return finalize();
      }

      const preloadPromise = typeof preloadImageUrl === 'function'
        ? preloadImageUrl(normalizedNextSrc)
        : Promise.resolve(normalizedNextSrc);
      const syncPromise = preloadPromise
        .catch(() => normalizedNextSrc)
        .then(() => finalize());
      const trackedPromise = Promise.resolve(syncPromise).finally(() => {
        if (img._deferredSrcPromise === trackedPromise) {
          img._deferredSrcPromise = null;
        }
      });
      img._deferredSrcPromise = trackedPromise;
      return trackedPromise;
    }

    function getStepOneMobileProductCardsHtml() {
      return baseProducts.map((item) => {
        const previewUrl = getProductCardPreviewImage(item.id);
        const noteText = item.note ? escapeHtml(item.note) : '&nbsp;';
        return `
          <button class="option-btn product-choice-card ${state.product === item.id ? 'active' : ''}" data-product="${item.id}" type="button">
            <div class="product-choice-visual">
              ${previewUrl ? `<img data-product-preview-img="${item.id}" data-current-src="${previewUrl}" src="${previewUrl}" alt="${escapeAttr(item.name)}">` : ''}
            </div>
            <div class="product-choice-copy">
              <div class="product-choice-title">${item.name}</div>
              <div class="product-choice-note ${item.note ? '' : 'is-empty'}">${noteText}</div>
              <div class="product-choice-price">${formatPrice(item.price)}</div>
            </div>
          </button>
        `;
      }).join('');
    }

    function getStepOneDesktopProductCardsHtml() {
      return baseProducts.map((item) => `
        <button class="option-btn ${state.product === item.id ? 'active' : ''}" data-product="${item.id}">
          <div class="option-title">${item.name}</div>
          ${item.note ? `<div class="option-meta">${item.note}</div>` : ''}
          <div class="option-price">${formatPrice(item.price)}${item.priceNote ? ` <span class="option-price-note">[${item.priceNote}]</span>` : ''}</div>
        </button>
      `).join('');
    }

    function updateStepOneProductSelection() {
      const container = document.getElementById('stepContent');
      if (!container || state.step !== 1) {
        render();
        return;
      }

      container.querySelectorAll('[data-product]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.product === state.product);
      });

      const variantsBlock = container.querySelector('[data-step-one-variants]');
      if (!variantsBlock) {
        render();
        return;
      }

      variantsBlock.outerHTML = getStepOneVariantControlsHtml();
      syncStepOneProductCardPreviews(container);
      renderVisualizer();
      renderLivePrice();
      renderButtons();
      updateOrderFormFields();
      syncStepPanelHeights();
      syncGarmentScale();
      requestAnimationFrame(syncGarmentScale);
      bindStepEvents();
      schedulePersistenceSave();

      const panelPrice = document.querySelector('#stepPanel .panel-price');
      if (panelPrice) panelPrice.textContent = formatPrice(getTotalPrice());
    }

    function updateStepFourControls(options = {}) {
      const { syncTextInput = false } = options;
      const container = document.getElementById('stepContent');
      if (!container || state.step !== 4) {
        render();
        return;
      }

      if (syncTextInput) {
        const textInput = container.querySelector('#textValueInput');
        if (textInput && textInput.value !== state.textValue) {
          textInput.value = state.textValue;
        }
      }

      container.querySelectorAll('[data-text-color]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.textColor === state.textColor);
      });
      container.querySelectorAll('[data-font-value]').forEach((btn) => {
        btn.classList.toggle('active', (fonts.includes(btn.dataset.fontValue) ? btn.dataset.fontValue : fonts[0]) === state.font);
      });
      container.querySelectorAll('[data-print-size]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.printSize === state.printSize);
      });

      const fontDropdownLabel = container.querySelector('#fontDropdownLabel');
      if (fontDropdownLabel) {
        fontDropdownLabel.textContent = state.font;
        fontDropdownLabel.style.fontFamily = getFontFamily(state.font);
      }

      const sizeDropdownLabel = container.querySelector('#printSizeDropdownLabel');
      if (sizeDropdownLabel) sizeDropdownLabel.textContent = getSelectedPrintSize().name;

      const embroideryToggle = container.querySelector('#embroideryToggle');
      if (embroideryToggle) embroideryToggle.classList.toggle('active', state.isEmbroideryText);

      const embroiderySymbolsCount = container.querySelector('#embroiderySymbolsCount');
      if (embroiderySymbolsCount) embroiderySymbolsCount.textContent = String(getEmbroiderySymbolsCount());
      const embroideryPriceValue = container.querySelector('#embroideryPriceValue');
      if (embroideryPriceValue) embroideryPriceValue.textContent = formatPrice(getEmbroideryTotal());

      refreshStepNavState();
      renderVisualizer();
      renderLivePrice();
      renderButtons();
      updateOrderFormFields();
      syncStepPanelHeights();
      syncGarmentScale();
      requestAnimationFrame(syncGarmentScale);
      schedulePersistenceSave();

      const panelPrice = document.querySelector('#stepPanel .panel-price');
      if (panelPrice) panelPrice.textContent = formatPrice(getTotalPrice());
    }

    function syncGarmentScale() {
      const garment = document.getElementById('garment');
      if (!garment) return;

      garment.style.removeProperty('--garment-scale');
      garment.style.removeProperty('left');
      garment.style.removeProperty('top');
      garment.style.removeProperty('width');
      garment.style.removeProperty('height');
      garment.style.removeProperty('inset');
      garment.style.removeProperty('display');
      garment.style.removeProperty('transform');
      garment.style.removeProperty('transform-origin');
      garment.style.removeProperty('will-change');
      garment.style.removeProperty('position');
    }

    function createStepButton(stepDef) {
      const btn = document.createElement('button');
      const unlocked = isStepUnlocked(stepDef.id);
      const isCustomBlocked = isCustomSelected() && stepDef.id === 4;
      const disabled = !unlocked || isCustomBlocked;

      btn.className = `step-btn ${state.step === stepDef.id ? 'active' : ''} ${disabled ? 'disabled' : ''}`;
      btn.type = 'button';
      btn.dataset.stepId = String(stepDef.id);
      btn.innerHTML = `
        <span class="step-btn-content">
          <span class="step-label">${stepDef.label}</span>
        </span>
      `;
      btn.addEventListener('click', () => {
        const currentCustomBlocked = isCustomSelected() && stepDef.id === 4;
        const currentUnlocked = isStepUnlocked(stepDef.id);

        if (currentCustomBlocked) {
          openModal('designerModal');
          return;
        }
        if (!currentUnlocked) return;
        mobileStepNavScrollPending = true;
        state.step = stepDef.id;
        render();
      });

      return btn;
    }

    function renderStepList() {
      ['stepList', 'stepListMobile']
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .forEach((root) => {
          root.innerHTML = '';
          steps.forEach((stepDef) => {
            root.appendChild(createStepButton(stepDef));
          });
        });

      const prevArrow = document.getElementById('mobileStepPrev');
      const nextArrow = document.getElementById('mobileStepNext');
      const canAdvance = isStepComplete(state.step) && state.step < steps.length;

      if (prevArrow) {
        prevArrow.disabled = state.step <= 1;
        prevArrow.onclick = () => {
          mobileStepNavScrollPending = true;
          prevStep();
        };
      }

      if (nextArrow) {
        nextArrow.disabled = !canAdvance;
        nextArrow.onclick = () => {
          mobileStepNavScrollPending = true;
          nextStep();
        };
      }
    }

    function refreshStepNavState() {
      document.querySelectorAll('#stepList .step-btn, #stepListMobile .step-btn').forEach((btn) => {
        const stepId = Number(btn.dataset.stepId || '0');
        if (!stepId) return;
        const unlocked = isStepUnlocked(stepId);
        const isCustomBlocked = isCustomSelected() && stepId === 4;
        const disabled = !unlocked || isCustomBlocked;

        btn.classList.toggle('active', state.step === stepId);
        btn.classList.toggle('disabled', disabled);
      });

      const prevArrow = document.getElementById('mobileStepPrev');
      const nextArrow = document.getElementById('mobileStepNext');
      const canAdvance = isStepComplete(state.step) && state.step < steps.length;

      if (prevArrow) prevArrow.disabled = state.step <= 1;
      if (nextArrow) nextArrow.disabled = !canAdvance;
    }

    function getDesignLayerRenderState() {
      const selectedTemplate = getSelectedTemplate();
      const currentScale = printScale[state.printSize] || 1;
      const isPolaroid = state.step !== 1 && selectedTemplate?.kind?.includes('polaroid');
      const hideDesign = state.step === 1;
      const textTop = selectedTemplate?.kind === 'polaroid-top';
      const textBottom = selectedTemplate?.kind === 'polaroid-bottom';
      const textTilt = selectedTemplate?.kind === 'polaroid-tilt';
      const isEmbLeft = selectedTemplate?.kind === 'emb-left';
      const filter = state.photoGrayscale ? 'grayscale(1)' : 'grayscale(0)';
      const previewText = state.textValue || previewTextPlaceholder;
      const activeUpload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      const uploadsHtml = activeUpload
        ? `<img class="crop-image" src="${activeUpload.url}" alt="preview" style="filter:${filter}; transform-origin:50% 50%; transform:translate(${state.cropPosition.x}%, ${state.cropPosition.y}%) scale(${state.cropZoom}) rotate(${state.cropRotation}deg);">`
        : `<div class="polaroid-label">Photo</div>`;

      let html = '';

      if (!hideDesign && state.selectedCustom) {
        html = '';
      } else if (!hideDesign && isPolaroid) {
        html = `
          <div class="polaroid-wrap" style="--print-scale:${currentScale}; --text-color:${state.textColor}; --tilt:${textTilt ? '-8deg' : '0deg'}; font-family:${getFontFamily(state.font)};">
            ${textTop ? `<div class="polaroid-text">${escapeHtml(previewText)}</div>` : ''}
            <div class="polaroid-frame">
              <div class="polaroid-photo">${uploadsHtml}</div>
              <div class="polaroid-gap"></div>
            </div>
            ${textBottom || textTilt ? `<div class="polaroid-text" style="margin-top:8px;">${escapeHtml(previewText)}</div>` : ''}
          </div>
        `;
      } else if (!hideDesign) {
        const hasUpload = Boolean(state.uploads[0]) && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
        html = `
          ${hasUpload ? `<div class="image-box">${uploadsHtml}</div>` : ''}
          <div class="emb-block ${isEmbLeft ? 'left' : ''} ${hasUpload ? 'with-upload' : ''}" style="--print-scale:${currentScale}; --text-color:${state.textColor}; font-family:${getFontFamily(state.font)};">
            ${escapeHtml(previewText)}
          </div>
        `;
      }

      const key = JSON.stringify({
        hideDesign,
        selectedCustom: Boolean(state.selectedCustom),
        kind: selectedTemplate?.kind || '',
        uploadUrl: activeUpload?.url || '',
        textValue: state.textValue || '',
        textColor: state.textColor,
        font: state.font,
        printSize: state.printSize,
        photoGrayscale: state.photoGrayscale,
        cropPosition: state.cropPosition,
        cropZoom: state.cropZoom,
        cropRotation: state.cropRotation,
      });

      return {
        html,
        key,
        currentScale,
      };
    }

    function renderVisualizer() {
      const selectedProduct = getSelectedProduct();
      const { html, key, currentScale } = getDesignLayerRenderState();

      $('#previewProductName').textContent = selectedProduct.name;
      const garment = $('#garment');
      const baseImage = document.getElementById('baseImage');
      const baseImageUrl = getCurrentProductImage();
      if (baseImage) {
        syncDeferredImageSource(baseImage, baseImageUrl, {
          setLoading: setGarmentBaseImageLoading,
        });
      }
      garment.style.setProperty('--print-scale', currentScale);
      garment.style.setProperty('--text-color', state.textColor);

      if (lastDesignLayerRenderKey !== key) {
        $('#designLayer').innerHTML = html;
        lastDesignLayerRenderKey = key;
      }

      resetCheckoutCompositePreview();
      syncGarmentScale();
      const hasActiveUpload = state.uploads.length > 0;
      const allowPreviewEditing = state.step === 3 && hasActiveUpload && !isCustomSelected();
      const allowPreviewUploadHint = state.step === 3 && !hasActiveUpload && !isCustomSelected();
      $('#garmentWrap').classList.toggle('editable', allowPreviewEditing);
      $('#garmentWrap').classList.toggle('upload-hint', allowPreviewUploadHint);
      $('#garmentWrap').classList.toggle('dragging-photo', false);
    }

    function renderLivePrice() {
      const selectedProduct = getSelectedProduct();
      const rows = [
        rowHtml(selectedProduct.name, formatPrice(selectedProduct.price)),
        rowHtml(getSelectedDesignName(), formatPrice(getSelectedDesignPrice())),
        rowHtml('Доп. элементы', formatPrice(getExtrasTotal())),
        rowHtml('Вышивка текста', formatPrice(getEmbroideryTotal())),
        rowHtml('Ускорение', formatPrice(getProductionTotal())),
      ];
      $('#livePriceRows').innerHTML = rows.join('');
      $('#liveTotal').textContent = formatPrice(getTotalPrice());
    }

    function renderStepPanel() {
      const stepDef = steps.find((item) => item.id === state.step);
      const panelPriceLabel = state.step === 6
        ? `Сумма заказа: ${formatPrice(getTotalPrice())}`
        : formatPrice(getTotalPrice());
      $('#stepPanel').innerHTML = `
        <div class="panel-head">
          <div>
            <div class="panel-step">Этап ${state.step}</div>
            <div class="panel-title">${stepDef.title}</div>
          </div>
          <div class="panel-price">${panelPriceLabel}</div>
        </div>
        <div id="stepContent"></div>
      `;
      renderStepContent();
    }

    function renderStepContent() {
      const container = $('#stepContent');
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      const selectedPrintSize = getSelectedPrintSize();
      const cropClass = getCropClass();

      if (state.step === 1) {
        container.innerHTML = `
          <div class="section">
            <div class="product-choice-mobile-group">
              <div class="product-choice-list" data-preserve-scroll-key="mobile-products">
                ${getStepOneMobileProductCardsHtml()}
              </div>
            </div>

            <div class="step-1-product-desktop">
              <div class="field-title">Тип изделия</div>
              <div class="grid-2" style="margin-top:16px;">
                ${getStepOneDesktopProductCardsHtml()}
              </div>
            </div>

                        ${getStepOneVariantControlsHtml()}
          </div>
        `;
        return;
      }

      if (state.step === 2) {
        const mobileTemplateCards = [
          ...templates.map((t) => renderTemplateChoiceCard(t, {
            active: state.template === t.id && !state.selectedCustom,
            mode: 'template',
            dataAttr: `data-template="${escapeAttr(t.id)}"`,
          })),
          ...customTemplates.map((item) => renderTemplateChoiceCard(item, {
            active: state.selectedCustom === item.id,
            mode: 'custom',
            dataAttr: `data-custom="${escapeAttr(item.id)}"`,
          })),
        ].join('');

        container.innerHTML = `
          <div class="section">
            <div class="template-choice-mobile-group">
              <div class="template-choice-list template-choice-mobile-list" data-preserve-scroll-key="mobile-templates">
                ${mobileTemplateCards}
              </div>
            </div>

            <div class="template-choice-group">
              <div class="subhead">Готовые шаблоны</div>
              <div class="subtext">Доступна визуализация с вашим фото прямо сейчас!</div>
              <div class="template-choice-list">
                ${templates.map((t) => renderTemplateChoiceCard(t, {
                  active: state.template === t.id && !state.selectedCustom,
                  mode: 'template',
                  dataAttr: `data-template="${escapeAttr(t.id)}"`,
                })).join('')}
              </div>
            </div>

            <div class="template-choice-group">
              <div class="subhead">Индивидуальный кастом</div>
              <div class="subtext">Дизайн согласовывается лично с дизайнером</div>
              <div class="template-choice-list">
                ${customTemplates.map((item) => renderTemplateChoiceCard(item, {
                  active: state.selectedCustom === item.id,
                  mode: 'custom',
                  dataAttr: `data-custom="${escapeAttr(item.id)}"`,
                })).join('')}
              </div>
            </div>
          </div>
        `;
        return;
      }

      if (state.step === 3) {
        const uploadSlots = [0];
        const canAddCustomUpload = state.uploads.length < MAX_CUSTOM_UPLOADS;
        container.innerHTML = `
          <div class="section">
            ${!state.selectedCustom ? `
              <div class="stack">
                ${uploadSlots.map((idx) => {
                  const upload = state.uploads[idx];
                  return `
                    <label class="upload-drop" style="display:block; cursor:pointer; padding:22px 16px;">
                      <div style="font-weight:600;">${upload ? 'Заменить: ' + escapeHtml(upload.name) : (state.selectedCustom ? 'Загрузите изображение для дизайнера' : 'Загрузите изображение')}</div>
                      <div class="subtext">${state.selectedCustom ? 'JPG / PNG. Файл прикрепится к заказу без редактирования в конструкторе.' : 'JPG / PNG — или перетащите на превью слева'}</div>
                      <input class="hidden-input" data-file-input="${idx}" type="file" accept="image/*">
                    </label>
                  `;
                }).join('')}
              </div>
            ` : ''}

            ${state.selectedCustom ? `
              <div class="custom-upload-shell">
                <div class="custom-upload-head">
                  <div>
                    <div class="subhead">Референсы для дизайнера</div>
                    <div class="subtext">Загрузите до ${MAX_CUSTOM_UPLOADS} фотографий. Мы передадим их дизайнеру как ориентиры для индивидуального дизайна.</div>
                  </div>
                  <div class="custom-upload-count">${state.uploads.length}/${MAX_CUSTOM_UPLOADS}</div>
                </div>

                <label class="custom-upload-trigger ${canAddCustomUpload ? '' : 'disabled'}">
                  <input class="hidden-input" data-file-input="custom-gallery" type="file" accept="image/*" multiple ${canAddCustomUpload ? '' : 'disabled'}>
                  <span class="custom-upload-camera" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 6.25L9.65 4.75H14.35L15.5 6.25H18.25C19.3546 6.25 20.25 7.14543 20.25 8.25V17.25C20.25 18.3546 19.3546 19.25 18.25 19.25H5.75C4.64543 19.25 3.75 18.3546 3.75 17.25V8.25C3.75 7.14543 4.64543 6.25 5.75 6.25H8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                      <circle cx="12" cy="12.75" r="3.25" stroke="currentColor" stroke-width="1.5"/>
                      <circle cx="17.2" cy="9.2" r="0.9" fill="currentColor"/>
                    </svg>
                  </span>
                  <span class="custom-upload-trigger-copy">
                    <span class="custom-upload-trigger-title">${canAddCustomUpload ? 'Добавить фотографии' : 'Лимит фотографий достигнут'}</span>
                    <span class="custom-upload-trigger-text">${canAddCustomUpload ? 'Можно выбрать сразу несколько JPG/PNG. Каждая фотография появится в галерее ниже.' : 'Удалите одно из фото, чтобы освободить место для нового референса.'}</span>
                  </span>
                </label>

                ${state.uploads.length ? `
                  <div class="custom-upload-gallery">
                    ${state.uploads.map((upload, index) => `
                      <div class="custom-upload-card">
                        <img class="custom-upload-thumb" src="${upload.url}" alt="${escapeAttr(upload.name)}">
                        <button class="custom-upload-delete" data-remove-upload="${index}" type="button" aria-label="Удалить фото">×</button>
                        <div class="custom-upload-caption">${escapeHtml(upload.name)}</div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="muted-box">
                    Добавьте хотя бы одну фотографию, чтобы дизайнер получил референс для вашего кастома. Файлы не редактируются в конструкторе и будут отправлены как есть.
                  </div>
                `}

                <div class="custom-upload-hint">
                  Каждый файл можно удалить отдельно. Лучше всего подойдут фото референсов, деталей, цветов и принтов, которые вы хотите повторить в дизайне.
                </div>
              </div>
            ` : `
              ${(state.uploads[state.activeUploadIndex] || state.uploads[0]) ? `
                <div class="control-card" style="display:grid; gap:14px;">
                  <div>
                    <div class="range-head">
                      <span>Масштаб</span>
                      <span id="cropZoomValue">${state.cropZoom.toFixed(1)}x</span>
                    </div>
                    <input id="zoomRange" type="range" min="1" max="3" step="0.05" value="${state.cropZoom}">
                  </div>

                  <div>
                    <div class="range-head">
                      <span>Поворот</span>
                      <span id="cropRotationValue">${state.cropRotation}°</span>
                    </div>
                    <input id="rotationRange" type="range" min="-180" max="180" step="1" value="${state.cropRotation}">
                  </div>

                  <div class="split-row">
                    <div>
                      <div style="font-size:14px;">Черно-белый режим</div>
                    </div>
                    <button class="switch ${state.photoGrayscale ? 'active' : ''}" id="grayscaleToggle" type="button"><span class="switch-knob"></span></button>
                  </div>


                </div>
              ` : `
                <div class="muted-box">
                  Загрузите фото или перетащите файл на область визуализации слева.
                </div>
              `}
            `}
          </div>
        `;
        return;
      }

      if (state.step === 4) {
        const embroideryAvailable = isEmbroideryAvailable();
        const embroiderySymbols = getEmbroiderySymbolsCount();
        const embroideryPrice = getEmbroideryTotal();

        container.innerHTML = `
          <div class="section">
            <div>
              <div class="field-title">Текст</div>
              <input class="text-input" id="textValueInput" value="${escapeAttr(state.textValue)}">
              <div class="phrase-dropdown" data-step-dropdown>
                <button class="dropdown-toggle" data-dropdown-toggle type="button" aria-expanded="false">Не знаете, что написать? Попробуйте заготовленные фразы</button>
                <div class="dropdown-panel">
                  <div class="dropdown-panel-inner">
                    <div class="phrase-strip">
                      ${motivationalPhrases.map((phrase) => `<button class="chip-btn phrase-chip" data-phrase="${escapeAttr(phrase)}" type="button">${phrase}</button>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            ${embroideryAvailable ? `
              <div class="embroidery-card">
                <div>
                  <div class="subhead">Сделать надпись вышивкой</div>
                  <div class="subtext">Первые 5 символов бесплатно, дальше — 15 ₽ за символ без пробелов.</div>
                  <div class="embroidery-meta">
                    <div>Символов: <strong id="embroiderySymbolsCount">${embroiderySymbols}</strong></div>
                    <div>Доплата: <strong id="embroideryPriceValue">${formatPrice(embroideryPrice)}</strong></div>
                  </div>
                </div>
                <button class="switch ${state.isEmbroideryText ? 'active' : ''}" id="embroideryToggle" type="button"><span class="switch-knob"></span></button>
              </div>
            ` : ''}

            <div class="text-color-block">
              <div class="field-title">Цвет текста</div>
              <div class="color-row" style="margin-top:12px;">
                ${printColors.map((c) => `
                  <button class="swatch ${state.textColor === c ? 'active' : ''}" data-text-color="${c}" type="button"><span style="background:${c}"></span></button>
                `).join('')}
              </div>
            </div>

            <div>
              <div class="field-title">Выберите шрифт</div>
              <div class="font-dropdown" data-step-dropdown>
                <button class="dropdown-toggle" data-dropdown-toggle type="button" aria-expanded="false">
                  <span class="font-dropdown-label" id="fontDropdownLabel" style="font-family:${getFontFamily(state.font)};">${state.font}</span>
                </button>
                <div class="dropdown-panel">
                  <div class="dropdown-panel-inner">
                    ${fonts.map((f) => `<button class="font-btn font-option-btn ${state.font === f ? 'active' : ''}" data-font-value="${escapeAttr(f)}" style="font-family:${getFontFamily(f)};" type="button">${f}</button>`).join('')}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="field-title">Выберите размер нанесения</div>
              <div class="size-dropdown" data-step-dropdown>
                <button class="dropdown-toggle" data-dropdown-toggle type="button" aria-expanded="false">
                  <span class="font-dropdown-label" id="printSizeDropdownLabel">${selectedPrintSize.name}</span>
                </button>
                <div class="dropdown-panel">
                  <div class="dropdown-panel-inner">
                    ${printSizes.map((p) => `
                      <button class="wide-btn ${state.printSize === p.id ? 'active' : ''}" data-print-size="${p.id}" type="button">
                        <span>${p.name}</span>
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        return;
      }

      if (state.step === 5) {
        container.innerHTML = `
          <div class="section">
            <div class="stack">
              ${extras.map((e) => {
                const count = extrasCount[e.id] || 0;
                return `
                  <div class="extra-card ${count > 0 ? 'active' : ''}">
                    <div style="text-align:left;">
                      <div style="font-weight:600;">${e.name}</div>
                      <div class="subtext">Можно добавить к покупке</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                      <button type="button" class="icon-btn" data-minus="${e.id}" style="width:32px; height:32px; border-radius:10px;">−</button>
                      <div style="min-width:20px; text-align:center;">${count}</div>
                      <button type="button" class="icon-btn" data-plus="${e.id}" style="width:32px; height:32px; border-radius:10px;">+</button>
                      <div style="margin-left:10px; font-weight:600;">${formatPrice(e.price)}</div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
        return;
      }

      if (state.step === 6) {
        const selectedExtrasNames = Object.entries(extrasCount)
          .filter(([, count]) => count > 0)
          .map(([id, count]) => {
            const item = extras.find((e) => e.id === id);
            return item ? `${item.name} × ${count}` : null;
          })
          .filter(Boolean)
          .join(', ') || 'Не выбраны';

        const reviewStage = `
          <div class="checkout-review-grid">
            <div class="info-card">
              <div class="subhead" style="font-size:22px;">Параметры заказа</div>
              <div class="stack" style="margin-top:16px; font-size:14px;">
                ${rowHtml('Изделие', selectedProduct.name)}
                ${rowHtml('Размер', state.size)}
                ${hasSeamOptions() ? rowHtml('Цвет шва', state.seam) : ''}
                ${rowHtml('Цвет изделия', selectedColor.name)}
                ${rowHtml('Дизайн', getSelectedDesignName())}
                ${rowHtml('Размер принта', selectedPrintSize.name)}
                ${rowHtml('Файлы', (isCustomSelected() ? state.uploads.length : (state.uploads[0] ? 1 : 0)) ? `${isCustomSelected() ? state.uploads.length : 1} фото` : 'Не загружены')}
                ${rowHtml('Доп. элементы', selectedExtrasNames)}
                ${rowHtml('Надпись вышивкой', state.isEmbroideryText ? `Да, ${getEmbroiderySymbolsCount()} симв.` : 'Нет')}
              </div>
            </div>

            <div class="info-card production-card">
              <div class="subhead" style="font-size:22px;">Производство</div>
              <div class="stack" style="margin-top:16px;">
                <button class="toggle-card ${state.fastProduction ? 'active' : ''}" id="fastProductionBtn" type="button">
                  <div style="text-align:left;">
                    <div style="font-weight:600;">Ускоренное производство</div>
                    <div class="subtext">Добавим заказ в приоритет</div>
                  </div>
                  <div style="font-size:14px; font-weight:600;">+ 500 ₽</div>
                </button>

                <button class="toggle-card" id="manager24Btn" type="button">
                  <div style="text-align:left;">
                    <div style="font-weight:600;">Сделать за 24 часа</div>
                    <div class="subtext">Связаться с менеджером для подтверждения</div>
                  </div>
                  <div>→</div>
                </button>
              </div>
              <div class="checkout-inline-status" style="margin-top:auto;">
                <div class="status-pill ${state.fastProduction ? 'ok' : ''}">${state.fastProduction ? '✓ Ускорение включено' : 'Стандартное производство'}</div>
              </div>
            </div>
          </div>
          <div class="checkout-stage-actions">
            <button class="btn" data-go-step="5" type="button">Назад</button>
            <button class="btn" data-open-reset-confirm type="button">Сделать еще товар</button>
            <a class="btn primary" data-submit-order href="#order:1) Тест =1">Оформить заказ</a>
          </div>
          <form id="orderForm" method="post" onsubmit="return false;" hidden>
            <input type="hidden" name="configurator_order_data" id="orderDataField">
            <textarea name="configurator_order_summary" id="orderSummaryField" hidden></textarea>
            <input type="hidden" name="configurator_preview_meta" id="orderPreviewMetaField">
          </form>
        `;

        container.innerHTML = `
          <div class="section">
            <div class="info-card checkout-flow-note">
              <div class="checkout-stage">
                ${reviewStage}
              </div>
            </div>
          </div>
        `;
      }
    }

    function captureRenderState() {
      const stepContent = document.getElementById('stepContent');
      const activeElement = document.activeElement;
      const hasFocusedField = Boolean(
        stepContent
        && activeElement
        && stepContent.contains(activeElement)
        && activeElement.id
      );
      const preservedScrolls = Array.from(document.querySelectorAll('[data-preserve-scroll-key]')).map((element) => ({
        key: element.dataset.preserveScrollKey,
        top: element.scrollTop,
        left: element.scrollLeft,
      }));

      return {
        renderedStep: lastRenderedStep,
        windowScrollX: window.scrollX,
        windowScrollY: window.scrollY,
        stepScrollTop: stepContent?.scrollTop || 0,
        stepScrollLeft: stepContent?.scrollLeft || 0,
        preservedScrolls,
        focusedField: hasFocusedField ? {
          id: activeElement.id,
          selectionStart: typeof activeElement.selectionStart === 'number' ? activeElement.selectionStart : null,
          selectionEnd: typeof activeElement.selectionEnd === 'number' ? activeElement.selectionEnd : null,
          selectionDirection: activeElement.selectionDirection || 'none',
        } : null,
      };
    }

    function restoreRenderState(snapshot) {
      requestAnimationFrame(() => {
        const applyScrollState = () => {
          window.scrollTo(snapshot.windowScrollX, snapshot.windowScrollY);

          const nextContainer = document.getElementById('stepContent');
          if (nextContainer) {
            nextContainer.scrollTop = snapshot.stepScrollTop;
            nextContainer.scrollLeft = snapshot.stepScrollLeft;
          }

          (snapshot.preservedScrolls || []).forEach((item) => {
            const target = Array.from(document.querySelectorAll('[data-preserve-scroll-key]')).find((element) => element.dataset.preserveScrollKey === item.key);
            if (!target) return;
            target.scrollTop = item.top;
            target.scrollLeft = item.left;
          });
        };

        applyScrollState();

        if (snapshot.renderedStep !== state.step) return;

        requestAnimationFrame(applyScrollState);

        const nextContainer = document.getElementById('stepContent');
        if (!snapshot.focusedField?.id || !nextContainer) return;

        const nextField = nextContainer.querySelector(`#${snapshot.focusedField.id}`) || document.getElementById(snapshot.focusedField.id);
        if (!nextField) return;

        try {
          nextField.focus({ preventScroll: true });
        } catch (_) {
          nextField.focus();
        }

        if (snapshot.focusedField.selectionStart == null || typeof nextField.setSelectionRange !== 'function') return;

        try {
          nextField.setSelectionRange(
            snapshot.focusedField.selectionStart,
            snapshot.focusedField.selectionEnd ?? snapshot.focusedField.selectionStart,
            snapshot.focusedField.selectionDirection
          );
        } catch (_) {}
      });
    }

    function renderPreservingStepContentScroll() {
      render();
    }

    function bindStepEvents() {
      const container = $('#stepContent');
      if (!container) return;

      if (previewDragController) {
        previewDragController.abort();
        previewDragController = null;
      }
      if (stepDropdownController) {
        stepDropdownController.abort();
        stepDropdownController = null;
      }

      if (state.step === 1) {
        container.querySelectorAll('[data-product]').forEach((btn) => {
          btn.onclick = () => {
            if (btn.dataset.product !== state.product) {
              rememberCurrentProductVariantSelection();
            }
            state.product = btn.dataset.product;
            if (!restoreProductVariantSelection(state.product)) {
              applyProductVariantSelection(state.product);
            }
            syncProductVariantState();
            updateStepOneProductSelection();
          };
        });
        container.querySelectorAll('[data-color]').forEach((btn) => {
          btn.onclick = () => {
            state.color = btn.dataset.color;
            syncProductVariantState();
            updateStepOneProductSelection();
          };
        });
        container.querySelectorAll('[data-seam]').forEach((btn) => {
          btn.onclick = () => {
            state.seam = btn.dataset.seam;
            syncProductVariantState();
            updateStepOneProductSelection();
          };
        });
        container.querySelectorAll('[data-size]').forEach((btn) => {
          btn.onclick = () => {
            state.size = btn.dataset.size;
            rememberCurrentProductVariantSelection();
            updateStepOneProductSelection();
          };
        });
      }

      if (state.step === 2) {
        container.querySelectorAll('[data-template]').forEach((btn) => {
          btn.onclick = () => {
            state.template = btn.dataset.template;
            state.selectedCustom = null;
            if (!isEmbroideryAvailable()) state.isEmbroideryText = false;
            renderPreservingStepContentScroll();
          };
        });
        container.querySelectorAll('[data-custom]').forEach((btn) => {
          btn.onclick = () => {
            state.selectedCustom = btn.dataset.custom;
            state.template = null;
            state.isEmbroideryText = false;
            renderPreservingStepContentScroll();
          };
        });
      }

      if (state.step === 3) {
        container.querySelectorAll('[data-file-input]').forEach((input) => {
          input.onchange = (e) => {
            const slotValue = input.dataset.fileInput;
            handleFiles(e.target.files, slotValue === 'custom-gallery' ? slotValue : Number(slotValue));
            e.target.value = '';
          };
        });
        container.querySelectorAll('[data-remove-upload]').forEach((btn) => {
          btn.onclick = () => removeUploadAt(Number(btn.dataset.removeUpload));
        });
        if (isCustomSelected()) return;

        container.querySelectorAll('[data-edit-upload]').forEach((btn) => {
          btn.onclick = () => {
            state.activeUploadIndex = Number(btn.dataset.editUpload);
            render();
          };
        });

        const grayscaleToggle = document.getElementById('grayscaleToggle');
        if (grayscaleToggle) {
          grayscaleToggle.onclick = () => {
            state.photoGrayscale = !state.photoGrayscale;
            grayscaleToggle.classList.toggle('active', state.photoGrayscale);
            renderVisualizer();
          };
        }

        const zoomRange = $('#zoomRange');
        if (zoomRange) {
          zoomRange.oninput = (e) => {
            state.cropZoom = Number(e.target.value);
            clampCropPositionForCurrentZoom();
            updatePreviewImageStyles();
            syncCropZoomControls();
          };
        }

        const rotationRange = $('#rotationRange');
        if (rotationRange) {
          rotationRange.oninput = (e) => {
            state.cropRotation = Number(e.target.value);
            updatePreviewImageStyles();
            const rv = document.getElementById('cropRotationValue');
            if (rv) rv.textContent = `${state.cropRotation}°`;
          };
        }

        previewDragController = new AbortController();
        const signal = previewDragController.signal;
        const garmentWrap = document.getElementById('garmentWrap');

        if (garmentWrap) {
          let dragInfo = null;
          let pinchInfo = null;
          const activePointers = new Map();

          const getGesturePoints = () => Array.from(activePointers.values()).slice(0, 2);
          const getPointerDistance = (firstPoint, secondPoint) => Math.hypot(
            secondPoint.x - firstPoint.x,
            secondPoint.y - firstPoint.y
          );
          const startSinglePointerDrag = (point) => {
            dragInfo = {
              startX: point.x,
              startY: point.y,
              startCropX: state.cropPosition.x,
              startCropY: state.cropPosition.y,
            };
            pinchInfo = null;
            garmentWrap.classList.add('dragging-photo');
          };
          const startPinchGesture = () => {
            const [firstPoint, secondPoint] = getGesturePoints();
            if (!firstPoint || !secondPoint) return;

            dragInfo = null;
            pinchInfo = {
              startDistance: Math.max(1, getPointerDistance(firstPoint, secondPoint)),
              startMidX: (firstPoint.x + secondPoint.x) / 2,
              startMidY: (firstPoint.y + secondPoint.y) / 2,
              startZoom: state.cropZoom,
              startCropX: state.cropPosition.x,
              startCropY: state.cropPosition.y,
            };
            garmentWrap.classList.add('dragging-photo');
          };

          garmentWrap.addEventListener('pointerdown', (e) => {
            if (!state.uploads.length || e.target.closest('input, button, label')) return;
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            e.preventDefault();
            activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
            try { garmentWrap.setPointerCapture(e.pointerId); } catch (_) {}

            if (activePointers.size === 1) {
              startSinglePointerDrag({ x: e.clientX, y: e.clientY });
              return;
            }

            if (activePointers.size >= 2) {
              startPinchGesture();
            }
          }, { signal });

          garmentWrap.addEventListener('pointermove', (e) => {
            if (!activePointers.has(e.pointerId)) return;
            e.preventDefault();
            activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
            const rect = garmentWrap.getBoundingClientRect();

            if (pinchInfo && activePointers.size >= 2) {
              const [firstPoint, secondPoint] = getGesturePoints();
              if (!firstPoint || !secondPoint) return;

              const nextDistance = Math.max(1, getPointerDistance(firstPoint, secondPoint));
              const nextMidX = (firstPoint.x + secondPoint.x) / 2;
              const nextMidY = (firstPoint.y + secondPoint.y) / 2;
              const zoomFactor = nextDistance / pinchInfo.startDistance;
              state.cropZoom = clamp(pinchInfo.startZoom * zoomFactor, 1, 3);

              const dx = ((nextMidX - pinchInfo.startMidX) / rect.width) * 100;
              const dy = ((nextMidY - pinchInfo.startMidY) / rect.height) * 100;
              state.cropPosition = {
                x: pinchInfo.startCropX + dx,
                y: pinchInfo.startCropY + dy,
              };
              clampCropPositionForCurrentZoom();
              updatePreviewImageStyles();
              syncCropZoomControls();
              return;
            }

            if (!dragInfo) return;

            const dx = (e.clientX - dragInfo.startX) / rect.width * 100;
            const dy = (e.clientY - dragInfo.startY) / rect.height * 100;
            state.cropPosition = {
              x: dragInfo.startCropX + dx,
              y: dragInfo.startCropY + dy,
            };
            clampCropPositionForCurrentZoom();
            updatePreviewImageStyles();
          }, { signal });

          garmentWrap.addEventListener('wheel', (e) => {
            if (!state.uploads.length) return;
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            state.cropZoom = clamp(state.cropZoom + delta, 1, 3);
            clampCropPositionForCurrentZoom();
            updatePreviewImageStyles();
            syncCropZoomControls();
          }, { signal, passive: false });

          const stopPreviewDrag = (e) => {
            activePointers.delete(e.pointerId);
            if (e?.pointerId != null) {
              try { garmentWrap.releasePointerCapture(e.pointerId); } catch (_) {}
            }

            if (pinchInfo && activePointers.size >= 2) {
              startPinchGesture();
              return;
            }

            if (activePointers.size === 1) {
              const [remainingPoint] = getGesturePoints();
              if (remainingPoint) {
                startSinglePointerDrag(remainingPoint);
                return;
              }
            }

            dragInfo = null;
            pinchInfo = null;
            garmentWrap.classList.remove('dragging-photo');
          };
          garmentWrap.addEventListener('pointerup', stopPreviewDrag, { signal });
          garmentWrap.addEventListener('pointercancel', stopPreviewDrag, { signal });

          garmentWrap.addEventListener('dragover', (e) => {
            e.preventDefault();
            garmentWrap.classList.add('drop-hover');
          }, { signal });
          garmentWrap.addEventListener('dragleave', (e) => {
            if (!garmentWrap.contains(e.relatedTarget)) {
              garmentWrap.classList.remove('drop-hover');
            }
          }, { signal });
          garmentWrap.addEventListener('drop', (e) => {
            e.preventDefault();
            garmentWrap.classList.remove('drop-hover');
            handleFiles(e.dataTransfer.files, state.activeUploadIndex);
          }, { signal });

          if (!state.uploads.length) {
            garmentWrap.addEventListener('click', (e) => {
              if (e.target.closest('input, button, label')) return;
              const fileInput = document.querySelector('[data-file-input="0"]');
              if (fileInput) fileInput.click();
            }, { signal });
          }
        }
      }

      if (state.step === 4) {
        const textInput = $('#textValueInput');
        if (textInput) {
          textInput.oninput = (e) => {
            state.textValue = e.target.value;
            updateStepFourControls();
          };
        }
        stepDropdownController = new AbortController();
        const dropdownSignal = stepDropdownController.signal;
        const dropdownScrollState = new WeakMap();
        const getDropdownScrollHost = () => {
          const stepContent = document.getElementById('stepContent');
          if (!stepContent) return window;
          const styles = window.getComputedStyle(stepContent);
          const canScrollStepContent = (
            stepContent.scrollHeight > stepContent.clientHeight + 4
            && styles.overflowY !== 'visible'
            && styles.overflowY !== 'hidden'
          );
          return canScrollStepContent ? stepContent : window;
        };
        const captureDropdownScrollPosition = (host) => {
          if (host === window) {
            return {
              host,
              top: window.scrollY,
              left: window.scrollX,
            };
          }
          return {
            host,
            top: host.scrollTop,
            left: host.scrollLeft,
          };
        };
        const restoreDropdownScrollPosition = (snapshot, behavior = 'smooth') => {
          if (!snapshot?.host) return;
          if (snapshot.host === window) {
            window.scrollTo({
              top: snapshot.top,
              left: snapshot.left,
              behavior,
            });
            return;
          }
          snapshot.host.scrollTo({
            top: snapshot.top,
            left: snapshot.left,
            behavior,
          });
        };
        const revealDropdown = (dropdown) => {
          const runReveal = () => {
            if (!document.body.contains(dropdown) || !dropdown.classList.contains('open')) return;

            const host = getDropdownScrollHost();
            const dropdownRect = dropdown.getBoundingClientRect();
            const topGap = 16;
            const bottomGap = 24;

            if (host === window) {
              const viewportBottom = window.innerHeight - bottomGap;
              if (dropdownRect.bottom > viewportBottom) {
                window.scrollBy({
                  top: dropdownRect.bottom - viewportBottom,
                  behavior: 'smooth',
                });
              } else if (dropdownRect.top < topGap) {
                window.scrollBy({
                  top: dropdownRect.top - topGap,
                  behavior: 'smooth',
                });
              }
              return;
            }

            const hostRect = host.getBoundingClientRect();
            const visibleTop = hostRect.top + topGap;
            const visibleBottom = hostRect.bottom - bottomGap;

            if (dropdownRect.bottom > visibleBottom) {
              host.scrollTo({
                top: host.scrollTop + (dropdownRect.bottom - visibleBottom),
                behavior: 'smooth',
              });
            } else if (dropdownRect.top < visibleTop) {
              host.scrollTo({
                top: host.scrollTop + (dropdownRect.top - visibleTop),
                behavior: 'smooth',
              });
            }
          };

          requestAnimationFrame(() => {
            runReveal();
            setTimeout(runReveal, 170);
          });
        };
        const closeDropdown = (dropdown, { restoreScroll = true, behavior = 'smooth' } = {}) => {
          dropdown.classList.remove('open');
          const toggle = dropdown.querySelector('[data-dropdown-toggle]');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          const snapshot = dropdownScrollState.get(dropdown);
          if (restoreScroll && snapshot) restoreDropdownScrollPosition(snapshot, behavior);
          dropdownScrollState.delete(dropdown);
        };
        const openDropdown = (dropdown) => {
          container.querySelectorAll('[data-step-dropdown].open').forEach((item) => {
            if (item !== dropdown) closeDropdown(item, { restoreScroll: false });
          });
          dropdownScrollState.set(dropdown, captureDropdownScrollPosition(getDropdownScrollHost()));
          dropdown.classList.add('open');
          const toggle = dropdown.querySelector('[data-dropdown-toggle]');
          if (toggle) toggle.setAttribute('aria-expanded', 'true');
          revealDropdown(dropdown);
        };
        container.querySelectorAll('[data-dropdown-toggle]').forEach((btn) => {
          btn.onclick = () => {
            const dropdown = btn.closest('[data-step-dropdown]');
            if (!dropdown) return;
            if (dropdown.classList.contains('open')) {
              closeDropdown(dropdown);
            } else {
              openDropdown(dropdown);
            }
          };
        });
        document.addEventListener('click', (e) => {
          if (e.target.closest('[data-step-dropdown]')) return;
          container.querySelectorAll('[data-step-dropdown].open').forEach((dropdown) => closeDropdown(dropdown));
        }, { signal: dropdownSignal });
        document.addEventListener('keydown', (e) => {
          if (e.key !== 'Escape') return;
          container.querySelectorAll('[data-step-dropdown].open').forEach((dropdown) => closeDropdown(dropdown));
        }, { signal: dropdownSignal });
        container.querySelectorAll('[data-phrase]').forEach((btn) => {
          btn.onclick = () => {
            const dropdown = btn.closest('[data-step-dropdown]');
            if (dropdown) closeDropdown(dropdown, { behavior: 'auto' });
            state.textValue = btn.dataset.phrase;
            updateStepFourControls({ syncTextInput: true });
          };
        });
        container.querySelectorAll('[data-text-color]').forEach((btn) => {
          btn.onclick = () => {
            state.textColor = btn.dataset.textColor;
            updateStepFourControls();
          };
        });
        container.querySelectorAll('[data-font-value]').forEach((btn) => {
          btn.onclick = () => {
            const dropdown = btn.closest('[data-step-dropdown]');
            if (dropdown) closeDropdown(dropdown, { behavior: 'auto' });
            state.font = fonts.includes(btn.dataset.fontValue) ? btn.dataset.fontValue : fonts[0];
            updateStepFourControls();
          };
        });
        container.querySelectorAll('[data-print-size]').forEach((btn) => {
          btn.onclick = () => {
            const dropdown = btn.closest('[data-step-dropdown]');
            if (dropdown) closeDropdown(dropdown, { behavior: 'auto' });
            state.printSize = btn.dataset.printSize;
            updateStepFourControls();
          };
        });
        const embroideryToggle = $('#embroideryToggle');
        if (embroideryToggle) {
          embroideryToggle.onclick = () => {
            state.isEmbroideryText = !state.isEmbroideryText;
            updateStepFourControls();
          };
        }
      }

      if (state.step === 5) {
        container.querySelectorAll('[data-plus]').forEach((btn) => {
          btn.onclick = () => changeExtraCount(btn.dataset.plus, 1);
        });
        container.querySelectorAll('[data-minus]').forEach((btn) => {
          btn.onclick = () => changeExtraCount(btn.dataset.minus, -1);
        });
      }

      if (state.step === 6) {
        const checkoutStage = container.querySelector('.checkout-stage');
        const stepPanelEl = document.getElementById('stepPanel');
        if (checkoutStage && state.checkoutTab === 'review' && window.innerWidth > 1040) {
          const h = checkoutStage.offsetHeight;
          if (h > 0) checkoutCardHeight = h;
        }
        if (checkoutCardHeight > 0 && stepPanelEl && window.innerWidth > 1040) {
          stepPanelEl.style.setProperty('--checkout-stage-height', `${checkoutCardHeight}px`);
        } else if (stepPanelEl) {
          stepPanelEl.style.removeProperty('--checkout-stage-height');
        }

        container.querySelectorAll('[data-checkout-tab]').forEach((btn) => {
          btn.onclick = () => setCheckoutTab(btn.dataset.checkoutTab);
        });
        container.querySelectorAll('[data-checkout-next-tab]').forEach((btn) => {
          btn.onclick = () => setCheckoutTab(btn.dataset.checkoutNextTab);
        });
        container.querySelectorAll('[data-go-step]').forEach((btn) => {
          btn.onclick = () => {
            state.step = Number(btn.dataset.goStep) || 1;
            render();
          };
        });
        container.querySelectorAll('[data-open-reset-confirm]').forEach((btn) => {
          btn.onclick = () => openModal('resetConfirmModal');
        });
        document.querySelectorAll('[data-confirm-reset]').forEach((btn) => {
          btn.onclick = () => resetConfigurator();
        });

        document.getElementById('fastProductionBtn')?.addEventListener('click', () => {
          state.fastProduction = !state.fastProduction;
          render();
        });
        document.getElementById('manager24Btn')?.addEventListener('click', () => openModal('managerModal'));
        const emailInput = document.getElementById('configuratorEmail');
        const nameInput = document.getElementById('configuratorName');
        const phoneInput = document.getElementById('configuratorPhone');
        const commentInput = document.getElementById('configuratorComment');
        const policyInput = document.getElementById('configuratorPolicy');
        const processingInput = document.getElementById('configuratorProcessing');
        if (emailInput) {
          emailInput.oninput = (e) => {
            state.email = e.target.value.trim();
            updateOrderFormFields();
          };
        }
        if (nameInput) {
          nameInput.oninput = (e) => {
            state.customerName = e.target.value.trim();
            updateOrderFormFields();
          };
        }
        if (phoneInput) {
          phoneInput.oninput = (e) => {
            state.phone = e.target.value.trim();
            updateOrderFormFields();
          };
        }
        if (commentInput) {
          commentInput.oninput = (e) => {
            state.comment = e.target.value;
            updateOrderFormFields();
          };
        }
        if (policyInput) {
          policyInput.onchange = (e) => {
            state.policyAccepted = e.target.checked;
            updateOrderFormFields();
          };
        }
        if (processingInput) {
          processingInput.onchange = (e) => {
            state.processingAccepted = e.target.checked;
            updateOrderFormFields();
          };
        }
        container.querySelectorAll('[data-submit-order]').forEach((btn) => {
          btn.addEventListener('click', submitOrderForm);
        });
        updateOrderFormFields();
      }
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function escapeAttr(value) {
      return escapeHtml(value);
    }

    function renderButtons() {
      const actions = document.querySelector('.desktop-actions .actions');
      if (actions) actions.style.display = state.step === 6 ? 'none' : '';
      $('#prevBtn').disabled = state.step === 1;
      $('#prevBtn').style.opacity = state.step === 1 ? '.55' : '1';
      const canAdvance = isStepComplete(state.step) && state.step < steps.length;
      $('#nextBtn').textContent = 'Далее';
      $('#nextBtn').disabled = !canAdvance;
      $('#nextBtn').style.opacity = canAdvance ? '1' : '.55';
    }

    function renderProgress() {
      $('#progressBar').style.width = `${(state.step / steps.length) * 100}%`;
    }

    function syncStepPanelHeights() {
      const shell = document.querySelector('.shell');
      const previewCard = document.querySelector('.preview-card');
      const stepPanel = document.getElementById('stepPanel');
      if (!shell || !previewCard || !stepPanel) return;

      shell.style.removeProperty('--step-panel-height');
      previewCard.style.minHeight = '';
      stepPanel.style.minHeight = '';

      if (window.innerWidth <= 1040) return;
    }

    function render() {
      const renderState = captureRenderState();
      const previousStep = lastRenderedStep;
      const shouldScrollMobileStepNav = mobileStepNavScrollPending || previousStep !== state.step;
      syncProductVariantState();
      const shell = document.querySelector('.shell');
      if (shell) shell.classList.toggle('standard-steps-mode', state.step >= 1 && state.step <= 5);
      if (shell) shell.classList.toggle('step-1-mode', state.step === 1);
      if (shell) shell.classList.toggle('step-2-mode', state.step === 2 || state.step === 4);
      if (shell) shell.classList.toggle('step-6-mode', state.step === 6);
      renderProgress();
      renderStepList();
      renderVisualizer();
      renderStepPanel();
      renderLivePrice();
      renderButtons();
      bindStepEvents();
      updateOrderFormFields();
      syncStepPanelHeights();
      syncGarmentScale();
      requestAnimationFrame(syncGarmentScale);
      lastRenderedStep = state.step;
      restoreRenderState(renderState);
      if (shouldScrollMobileStepNav) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollActiveMobileStepIntoView(previousStep === state.step ? 'auto' : 'smooth');
          });
        });
      }
      mobileStepNavScrollPending = false;
      animateStandardStepTransition(previousStep);
      schedulePersistenceSave();
    }

    $('#prevBtn').addEventListener('click', prevStep);
    $('#nextBtn').addEventListener('click', nextStep);
    window.addEventListener('resize', syncStepPanelHeights);
    window.addEventListener('resize', syncGarmentScale);
    window.addEventListener('beforeunload', () => {
      if (!persistenceHydrated) return;
      const snapshot = getPersistenceSnapshot();
      persistenceWriteChain = persistenceWriteChain.then(() => writePersistedSnapshot(snapshot));
    });

    function scheduleFullCatalogImagePreload() {
      const run = () => preloadProductImages();
      if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(run, { timeout: 1800 });
        return;
      }
      setTimeout(run, 1200);
    }

    async function initializeConfigurator() {
      try {
        await restorePersistedState();
        await preloadInitialRenderImages();
        render();
        scheduleFullCatalogImagePreload();
      } finally {
        requestAnimationFrame(() => {
          setShellLoading(false);
        });
      }
    }

    initializeConfigurator();

    console.assert(typeof nextStep === 'function', 'nextStep should be defined');
    console.assert(Array.isArray(steps) && steps.length === 6, 'steps should contain 6 items');
    console.assert(typeof getTotalPrice() === 'number', 'total price should be numeric');
</script>
