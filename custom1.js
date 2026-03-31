<script>
const baseProducts = [
      { id: 'tee-iznanka', name: 'Футболка [ИЗНАНКА]', note: 'Швы наружу', price: 3400, priceNote: 'без нанесения' },
      { id: 'tee-base', name: 'Футболка [БАЗОВАЯ]', note: 'Классические швы', price: 3400, priceNote: 'без нанесения' },
      { id: 'longsleeve-choice', name: 'Лонгслив [choice]', price: 3290 },
      { id: 'hoodie-basic', name: 'Худи [basic]', price: 4990 },
      { id: 'sweatshirt-iznanka', name: 'Свитшот [iznanka]', price: 4490 },
    ];
    const productImages = {
      'tee-iznanka': [
        {
          name: 'Белый',
          image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ABIwOOLyoGhc6lGQ0aSNlnk/ti_izn_white_white.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=6cxt75os&raw=1',
          seams: [
            { name: 'Белый' },
            { name: 'Олива', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AN6mlFrYjIRyGndYk6DrVbc/ti_izn_white_olive.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=h6dovp1z&raw=1' },
            { name: 'Фуксия', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AJfCOwHDx5NcTGkpZXR2fEI/ti_izn_white_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=nyxc3i4l&raw=1' },
          ],
        },
        {
          name: 'Графитовый',
          image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AEXagzUfajVxZrmXV2HlFCE/ti_izn_graph_graph.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=4qkctpg6&raw=1',
          seams: [
            { name: 'Графитовый' },
            { name: 'Розовый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AMh_h5wZcRbpY6DnlG9A-hQ/ti_izn_graph_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=huvukwok&raw=1' },
            { name: 'Олива', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AMF3jCrqol4YnLlS4m4aoVs/ti_izn_graph_olive.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=dl38awol&raw=1' },
          ],
        },
        { name: 'Розовый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AEeHF0Xnt6Nd2iT0PkEs_Ic/ti_izn_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=aijeuihp&raw=1' },
        { name: 'Коричневый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AFO7RCZBVoKZEbeS-R6RUVQ/ti_izn_brown.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=msjm2p2i&raw=1' },
        { name: 'Серый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ACaQeTMuLurcVSGKWRyGVvg/ti_izn_gray.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=n6q6558r&raw=1' },
      ],
      'tee-base': [
        { name: 'Белый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ABsT3FDYIhU2kdViFlqPUd4/ti_base_white.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=jw3s7hru&raw=1' },
        { name: 'Чёрный', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ADnKAQmQejRc2ix1C3stu8M/ti_base_black.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=w90ga6s2&raw=1' },
      ],
      'longsleeve-choice': [
        { name: 'Белый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AFTkPoMhj3bedTdvfTG9OQ4/long_izn_white.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=uf3f4h1x&raw=1' },
        { name: 'Графит', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AJrtpKlYGuxouWdgt3ZEAts/long_izn_graph.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=y4d5fyp7&raw=1' },
        { name: 'Розовый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AFp8WghLG1-RgzA-a_mTqm8/long_izn_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=d73ci5ch&raw=1' },
        { name: 'Серый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ACR6nHTDf_LpLtEuCbx4_1M/long_izn_gray.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=npomiigv&raw=1' },
        { name: 'Чёрный', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AEC6TYawlT4dtQI8XqKQ35M/long_izn_black.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=9kxskdal&raw=1' },
      ],
      'hoodie-basic': [
        { name: 'Чёрный', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ANUnqcgNpsKxmEy_TENaIJA/hoodie_black.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=29c33hm0&raw=1' },
        { name: 'Графит', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AFgJ6T42BjFezK7m5Me06Ak/hoodie_gray.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=0511k9uv&raw=1' },
        { name: 'Розовый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/APR_yGCMOCqVopb5lnsHBRU/hoodie_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=x2s4pfuk&raw=1' }
      ],
      'sweatshirt-iznanka': [
        { name: 'Графит', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AGN90PD5DfqNomg2WbHd-cU/sweet_graph.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=k6jf0g4h&raw=1' },
        { name: 'Розовый', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AEwuQXJ0MmYfH9hjTGiG_ow/sweet_pink.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=ywnqusvs&raw=1' },
        { name: 'Чёрный', image: 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ADxxHhz6zkRXqJPkqHsLcBQ/sweet_gray.jpg?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=4ng4s1b6&raw=1' },
      ],
    };
    const seamColors = ['Белый', 'Графитовый'];
    const colors = [
      { name: 'Белый', value: '#F4F4F4', enabled: true },
      { name: 'Чёрный', value: '#111111', enabled: false },
      { name: 'Серый', value: '#727272', enabled: false },
      { name: 'Розовый', value: '#E99BB0', enabled: false },
      { name: 'Графитовый', value: '#2C2F36', enabled: false },
      { name: 'Коричневый', value: '#7A5A43', enabled: false },
    ];
    const colorValues = {
      'Белый': '#F4F4F4',
      'Чёрный': '#111111',
      'Серый': '#727272',
      'Розовый': '#E99BB0',
      'Графит': '#2C2F36',
      'Графитовый': '#2C2F36',
      'Коричневый': '#7A5A43',
    };
    const seamValues = {
      'Белый': '#F4F4F4',
      'Графитовый': '#2C2F36',
      'Олива': '#68734f',
      'Фуксия': '#d94693',
      'Розовый': '#E99BB0',
    };
    const templates = [
      { id: 'emb-center', name: 'Текст по центру', uploads: 0, kind: 'emb-center', price: 650 },
      { id: 'emb-left', name: 'Текст слева', uploads: 0, kind: 'emb-left', price: 650 },
      { id: 'polaroid', name: 'Полароид', uploads: 1, kind: 'polaroid', price: 300 },
      { id: 'polaroid-top-text', name: 'Полароид + текст сверху', uploads: 1, kind: 'polaroid-top', price: 1200 },
      { id: 'polaroid-bottom-text', name: 'Полароид + текст снизу', uploads: 1, kind: 'polaroid-bottom', price: 900 },
      { id: 'polaroid-tilt-text', name: 'Полароид + текст под наклоном', uploads: 1, kind: 'polaroid-tilt', price: 1200 },
    ];
    const customTemplates = [
      { id: 'custom-1', name: 'Индивидуальный дизайн 1', note: 'Разработка дизайнером', price: 1900 },
      { id: 'custom-2', name: 'Индивидуальный дизайн 2', note: 'Разработка дизайнером', price: 2400 },
      { id: 'custom-3', name: 'Индивидуальный дизайн 3', note: 'Разработка дизайнером', price: 2900 },
    ];
    const printSizes = [
      { id: 's', name: 'Маленький' },
      { id: 'm', name: 'Средний' },
      { id: 'l', name: 'Большой' },
    ];
    const fonts = ['Inter', 'Oswald', 'Cormorant Garamond'];
    const fontFamilies = {
      'Inter': 'Inter, system-ui, sans-serif',
      'Oswald': 'Oswald, Arial, sans-serif',
      'Cormorant Garamond': '"Cormorant Garamond", Georgia, serif',
    };
    const printColors = [
      '#000000', '#ffffff', '#111827', '#374151', '#6b7280', '#9ca3af',
      '#dc2626', '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6',
      '#2563eb', '#4f46e5', '#7c3aed', '#a855f7', '#ec4899', '#be123c'
    ];
    const previewTextPlaceholder = '\u0412\u0430\u0448 \u0442\u0435\u043a\u0441\u0442';
    const printScale = { s: 0.5, m: 0.9, l: 1.25 };
    const extras = [
      { id: 'postcard', name: 'Открытка', price: 350 },
      { id: 'cassette', name: 'Аудиокассета', price: 350 },
      { id: 'polaroid-photo', name: 'Фото полароид', price: 350 },
    ];
    // количество допов
    const extrasCount = {};
    const MAX_CUSTOM_UPLOADS = 6;
    const GARMENT_ARTBOARD_WIDTH = 860;
    const GARMENT_ARTBOARD_HEIGHT = 1075;
    let previewDragController = null;
    let stepDropdownController = null;
    let checkoutCardHeight = 0;
    let lastRenderedStep = null;
    function getTemplateCardMeta(item, mode = 'template') {
      if (mode === 'custom') return item.note || '';
      return item.uploads ? `${item.uploads} фото` : 'Без фото';
    }
    function renderTemplateChoiceCard(item, options = {}) {
      const { active = false, mode = 'template', dataAttr = '' } = options;
      const meta = getTemplateCardMeta(item, mode);
      const priceLabel = mode === 'custom' ? `от ${formatPrice(item.price)}` : formatPrice(item.price);
      const priceMark = mode === 'custom' ? '' : '+';
      return `
        <button class="option-btn template-choice-card ${active ? 'active' : ''}" ${dataAttr} type="button">
          ${getTemplatePreview(item, mode)}
          <div class="template-choice-copy">
            <div class="template-choice-title">${item.name}</div>
            ${meta ? `<div class="template-choice-meta">${meta}</div>` : ''}
          </div>
          <div class="template-choice-price">
            ${priceMark ? `<span class="template-choice-price-mark" aria-hidden="true">${priceMark}</span>` : ''}
            <span>${priceLabel}</span>
          </div>
        </button>
      `;
    }
    const motivationalPhrases = [
      'CREATE YOUR RHYTHM',
      'STAY ORIGINAL',
      'MAKE IT LOUD',
      'DESIGN YOUR ENERGY',
      'NO RULES — JUST STYLE',
      'OWN YOUR VIBE',
    ];
    const steps = [
      { id: 1, label: 'Изделие', title: 'Выберите изделие' },
      { id: 2, label: 'Шаблон дизайна', title: 'Выберите шаблон дизайна' },
      { id: 3, label: 'Загрузка изображения', title: 'Загрузите ваше изображение' },
      { id: 4, label: 'Кастомизация', title: 'Настройте дизайн' },
      { id: 5, label: 'Дополнительно', title: 'Добавьте дополнительные элементы к заказу' },
      { id: 6, label: 'Ваш заказ', title: 'Проверьте и оформите заказ' },
    ];
    function generateOrderId() {
      const timePart = String(Date.now()).slice(-8);
      const randomPart = String(Math.floor(Math.random() * 100)).padStart(2, '0');
      return `${timePart}${randomPart}`;
    }
    function normalizeOrderIdValue(value) {
      const digitsOnly = String(value || '').replace(/\D+/g, '');
      return digitsOnly || generateOrderId();
    }
    function getFormattedOrderId(orderId = '') {
      return `id_${normalizeOrderIdValue(orderId || state.orderId)}`;
    }
    function createDefaultState() {
      return {
        step: 1,
        orderId: generateOrderId(),
        product: baseProducts[0].id,
        size: 'M',
        seam: seamColors[0],
        color: colors[0].name,
        productVariants: {},
        template: null,
        printSize: printSizes[1].id,
        textValue: 'INSTITUTE OF RHYTHM',
        textColor: '#000000',
        font: fonts[0],
        uploads: [],
        selectedExtras: [],
        selectedCustom: null,
        fastProduction: false,
        photoGrayscale: false,
        isEmbroideryText: false,
        cropZoom: 1,
        cropPosition: { x: 0, y: 0 },
        cropRotation: 0,
        activeUploadIndex: 0,
        draggingCrop: false,
        email: '',
        customerName: '',
        phone: '',
        comment: '',
        policyAccepted: false,
        processingAccepted: false,
        previewDataUrl: '',
        previewMeta: '',
        checkoutTab: 'review',
      };
    }
    function shouldResetLegacyDefaultTemplate(snapshotState, snapshotExtras = {}, snapshotUploads = [], snapshotVersion = 0) {
      if (snapshotVersion >= 2) return false;
      if (!snapshotState || snapshotState.selectedCustom || snapshotState.template !== templates[0].id) return false;
      if ((snapshotUploads || []).length) return false;
      if (Object.values(snapshotExtras || {}).some((value) => (Number(value) || 0) > 0)) return false;
      if (snapshotState.fastProduction || snapshotState.isEmbroideryText) return false;
      return Number(snapshotState.step) === 1;
    }
    const state = createDefaultState();
    const PERSISTENCE_DB_NAME = 'constructor-checkout-mvp-db';
    const PERSISTENCE_STORE_NAME = 'configurator';
    const PERSISTENCE_RECORD_KEY = 'latest';
    const PERSISTENCE_DEBOUNCE_MS = 120;
    const checkoutTabsOrder = ['review', 'contacts'];
    const checkoutLabels = {
      review: 'Проверка',
      contacts: 'Контакты',
    };
    const $ = (selector) => document.querySelector(selector);
    const formatPrice = (value) => `${Number(value || 0).toLocaleString('ru-RU')} ₽`;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const getSelectedTemplate = () => templates.find((t) => t.id === state.template) || null;
    const getSelectedProduct = () => baseProducts.find((p) => p.id === state.product) || baseProducts[0];
    const getAvailableColors = (productId = state.product) => productImages[productId] || [];
    const getColorHex = (colorName) => colorValues[colorName] || '#cccccc';
    const getProductImagePlaceholder = (productId = state.product, colorName = '') => {
      const productName = baseProducts.find((item) => item.id === productId)?.name || 'Изделие';
      const accent = getColorHex(colorName) || '#d1d5db';
      const label = colorName || 'Изображение скоро';
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 1075">
          <defs>
            <linearGradient id="placeholderBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f8fafc"/>
              <stop offset="100%" stop-color="#eef2f7"/>
            </linearGradient>
          </defs>
          <rect width="860" height="1075" rx="56" fill="url(#placeholderBg)"/>
          <rect x="110" y="132" width="640" height="812" rx="44" fill="none" stroke="#d7dde5" stroke-width="16" stroke-dasharray="18 18"/>
          <circle cx="430" cy="356" r="74" fill="${accent}" fill-opacity="0.2"/>
          <circle cx="430" cy="356" r="46" fill="${accent}" fill-opacity="0.5"/>
          <text x="430" y="590" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="700" fill="#111111">${productName}</text>
          <text x="430" y="648" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="600" fill="#4b5563">${label}</text>
          <text x="430" y="712" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="26" fill="#9ca3af">Изображение цвета скоро появится</text>
        </svg>
      `.trim();
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };
    function normalizeProductImageUrl(url) {
      const normalizedUrl = String(url || '');
      if (!normalizedUrl || normalizedUrl.startsWith('data:') || normalizedUrl.startsWith('blob:')) {
        return normalizedUrl;
      }
      try {
        const parsed = new URL(normalizedUrl, document.baseURI || 'https://tilda.cc/');
        const hostname = parsed.hostname.toLowerCase();
        if ((hostname === 'www.dropbox.com' || hostname === 'dropbox.com') && parsed.pathname.startsWith('/scl/')) {
          return `https://dl.dropboxusercontent.com${parsed.pathname}${parsed.search}`;
        }
        return parsed.toString();
      } catch (_) {
        return normalizedUrl;
      }
    }
    function isDropboxHostedImageUrl(url = '') {
      const normalizedUrl = String(url || '');
      if (!normalizedUrl) return false;
      try {
        const parsed = new URL(normalizeProductImageUrl(normalizedUrl), document.baseURI || 'https://tilda.cc/');
        const hostname = parsed.hostname.toLowerCase();
        return hostname.endsWith('dropbox.com') || hostname.endsWith('dropboxusercontent.com');
      } catch (_) {
        return /dropbox(?:usercontent)?\.com/i.test(normalizedUrl);
      }
    }
    function isBrowserExportUnsafeImageUrl(url = '') {
      return false;
    }
    function shouldUseVectorCheckoutPreview(options = {}) {
      const baseImageUrl = options.baseImageUrl || getCurrentProductImage();
      return isBrowserExportUnsafeImageUrl(baseImageUrl);
    }
    const cloneProductVariants = (productVariants = {}) => Object.fromEntries(
      Object.entries(productVariants || {}).map(([productId, variant]) => [productId, {
        color: variant?.color || '',
        seam: variant?.seam || '',
        size: variant?.size || '',
      }])
    );
    const getDefaultProductVariant = (productId = state.product) => {
      const availableColors = getAvailableColors(productId);
      const defaultColor = availableColors[0]?.name || '';
      const defaultSeams = getAvailableSeams(productId, defaultColor);
      const availableSizes = getSizesByProduct(productId);
      return {
        color: defaultColor,
        seam: defaultSeams[0]?.name || '',
        size: availableSizes[0] || '',
      };
    };
    const applyProductVariantSelection = (productId = state.product, variant = null) => {
      const nextVariant = {
        ...getDefaultProductVariant(productId),
        ...(variant || {}),
      };
      state.color = nextVariant.color || '';
      state.seam = nextVariant.seam || '';
      state.size = nextVariant.size || '';
    };
    const rememberCurrentProductVariantSelection = () => {
      if (!state.product) return;
      if (!state.productVariants || typeof state.productVariants !== 'object') {
        state.productVariants = {};
      }
      state.productVariants[state.product] = {
        color: state.color,
        seam: state.seam,
        size: state.size,
      };
    };
    const restoreProductVariantSelection = (productId = state.product) => {
      const variant = state.productVariants?.[productId];
      if (!variant) return false;
      applyProductVariantSelection(productId, variant);
      return true;
    };
    const getProductPreviewImage = (productId = state.product, variant = null) => {
      scheduleProductImagesPreload(productId);
      const availableColors = getAvailableColors(productId);
      const fallbackVariant = getDefaultProductVariant(productId);
      const colorName = variant?.color ?? fallbackVariant.color;
      const seamName = variant?.seam ?? fallbackVariant.seam;
      const colorOption = availableColors.find((item) => item.name === colorName) || availableColors[0] || null;
      const availableSeams = colorOption?.seams || [];
      const seamOption = availableSeams.find((item) => item.name === seamName) || availableSeams[0] || null;
      return normalizeProductImageUrl(seamOption?.image || colorOption?.image || getProductImagePlaceholder(productId, colorOption?.name || colorName));
    };
    const getAvailableSeams = (productId = state.product, colorName = state.color) => {
      const colorOption = getAvailableColors(productId).find((item) => item.name === colorName) || getAvailableColors(productId)[0];
      return colorOption?.seams || [];
    };
    const getSelectedColor = () => {
      const colorOption = getAvailableColors(state.product).find((item) => item.name === state.color) || getAvailableColors(state.product)[0];
      if (!colorOption) return colors[0];
      return { ...colorOption, value: getColorHex(colorOption.name) };
    };
    const getSelectedSeam = () => getAvailableSeams().find((item) => item.name === state.seam) || getAvailableSeams()[0] || null;
    const hasSeamOptions = () => getAvailableSeams().length > 0;
    const getCurrentProductImage = () => getProductPreviewImage(state.product, { color: state.color, seam: state.seam });
    function syncProductVariantState() {
      const availableColors = getAvailableColors(state.product);
      if (!availableColors.some((item) => item.name === state.color)) {
        state.color = availableColors[0]?.name || '';
      }
      const availableSeams = getAvailableSeams(state.product, state.color);
      if (availableSeams.length) {
        if (!availableSeams.some((item) => item.name === state.seam)) {
          state.seam = availableSeams[0].name;
        }
      } else {
        state.seam = '';
      }
      rememberCurrentProductVariantSelection();
    }
    const getSelectedPrintSize = () => printSizes.find((p) => p.id === state.printSize) || printSizes[1];
    const getSelectedCustomTemplate = () => customTemplates.find((c) => c.id === state.selectedCustom) || null;
    const getSelectedDesignName = () => getSelectedCustomTemplate()?.name || getSelectedTemplate()?.name || 'Дизайн не выбран';
    const getSelectedDesignPrice = () => getSelectedCustomTemplate()?.price || getSelectedTemplate()?.price || 0;
    const getFontFamily = (fontName) => fontFamilies[fontName] || 'Inter, system-ui, sans-serif';
    const getExtrasTotal = () => Object.entries(extrasCount).reduce((sum, [id, count]) => {
      const price = extras.find((e) => e.id === id)?.price || 0;
      return sum + price * count;
    }, 0);
    const getProductionTotal = () => state.fastProduction ? 500 : 0;
    const getEmbroiderySymbolsCount = () => (state.textValue || '').replace(/\s/g, '').length;
    const isEmbroideryAvailable = () => ['emb-center', 'emb-left'].includes(state.template);
    const getEmbroideryTotal = () => {
      if (!(isEmbroideryAvailable() && state.isEmbroideryText)) return 0;
      return Math.max(0, getEmbroiderySymbolsCount() - 5) * 15;
    };
    const getTotalPrice = () => getSelectedProduct().price + getSelectedDesignPrice() + getExtrasTotal() + getProductionTotal() + getEmbroideryTotal();
    const isCustomSelected = () => Boolean(state.selectedCustom);
    let persistenceDbPromise = null;
    let persistenceSaveTimer = null;
    let persistenceHydrated = false;
    let persistenceWriteChain = Promise.resolve();
    let checkoutPreviewCacheKey = '';
    let checkoutPreviewCacheUrl = '';
    let checkoutPreviewRenderToken = 0;
    const productImageLoadPromises = new Map();
    const scheduledProductImagePreloads = new Set();
    const exportImageDataUrlPromises = new Map();
    let mobileStepNavScrollPending = false;
    let lastDesignLayerRenderKey = '';
    let orderSubmitInFlight = false;
    let cartUploadFiles = [];
    let cartUploadCleanupTimer = 0;
    let cartUploadCleanupInFlight = false;
    let cartUploadMutationObserver = null;
    let cartUploadMutationObserverTarget = null;
    function revokeUploadObjectUrls(uploads = []) {
      uploads.forEach((upload) => {
        if (upload?.url?.startsWith('blob:')) URL.revokeObjectURL(upload.url);
      });
    }
    function normalizeTrackedOrderId(value = '') {
      const normalizedValue = String(value || '').trim();
      const formattedMatch = normalizedValue.match(/\bid_\d+\b/i);
      if (formattedMatch) return formattedMatch[0].toLowerCase();
      const digits = normalizedValue.replace(/\D+/g, '');
      return digits ? `id_${digits}` : '';
    }
    function getCartUploadFilesSnapshot() {
      return Array.from(cartUploadFiles || [])
        .map((entry) => entry?.file || null)
        .filter(Boolean);
    }
    function mergeCartUploadFiles(files = [], options = {}) {
      const trackedOrderId = normalizeTrackedOrderId(options.orderId || getFormattedOrderId(state.orderId));
      const merged = new Map();
      Array.from(cartUploadFiles || []).forEach((entry) => {
        const file = entry?.file || null;
        if (file?.name) {
          merged.set(file.name, {
            orderId: normalizeTrackedOrderId(entry?.orderId || trackedOrderId),
            file,
          });
        }
      });
      Array.from(files || []).forEach((file) => {
        if (file?.name) {
          merged.set(file.name, {
            orderId: trackedOrderId,
            file,
          });
        }
      });
      cartUploadFiles = Array.from(merged.values());
      return getCartUploadFilesSnapshot();
    }
    function extractFormattedOrderIdsFromText(value = '') {
      return Array.from(String(value || '').matchAll(/\bid_\d+\b/gi))
        .map((match) => normalizeTrackedOrderId(match[0]))
        .filter(Boolean);
    }
    function collectFormattedOrderIdsFromValue(value, target = new Set()) {
      if (value == null) return target;
      if (typeof value === 'string' || typeof value === 'number') {
        extractFormattedOrderIdsFromText(value).forEach((orderId) => target.add(orderId));
        return target;
      }
      if (Array.isArray(value)) {
        value.forEach((item) => collectFormattedOrderIdsFromValue(item, target));
        return target;
      }
      if (typeof value === 'object') {
        Object.values(value).forEach((item) => collectFormattedOrderIdsFromValue(item, target));
      }
      return target;
    }
    function collectActiveTildaCartOrderIdsFromDom(cartWindow = getTildaCartWindow()) {
      const orderIds = new Set();
      if (!(cartWindow instanceof Element)) {
        return {
          orderIds,
          activeCount: 0,
        };
      }
      const productNodes = Array.from(cartWindow.querySelectorAll('.t706__product, .tcart__product'))
        .filter((node) => {
          if (!(node instanceof HTMLElement)) return false;
          if (node.closest('.t706__orderform, .t706 form, .t-upwidget-container, .t-input-group_uw')) return false;
          const styles = window.getComputedStyle(node);
          if (styles.display === 'none' || styles.visibility === 'hidden') return false;
          if (node.classList.contains('t706__product_deleted') || node.classList.contains('t706__product-hidden')) return false;
          return true;
        });
      productNodes.forEach((node) => {
        collectFormattedOrderIdsFromValue(node.textContent || '', orderIds);
      });
      return {
        orderIds,
        activeCount: productNodes.length,
      };
    }
    function collectActiveTildaCartOrderIds(products = window.tcart?.products, cartWindow = getTildaCartWindow()) {
      const orderIds = new Set();
      const activeProducts = Array.isArray(products)
        ? products.filter((item) => item && item.deleted !== 'yes')
        : [];
      activeProducts.forEach((item) => collectFormattedOrderIdsFromValue(item, orderIds));
      const domSnapshot = collectActiveTildaCartOrderIdsFromDom(cartWindow);
      domSnapshot.orderIds.forEach((orderId) => orderIds.add(orderId));
      return {
        orderIds,
        activeCount: Math.max(activeProducts.length, domSnapshot.activeCount),
      };
    }
    function pruneCartUploadFilesByActiveCart(products = window.tcart?.products) {
      const { orderIds, activeCount } = collectActiveTildaCartOrderIds(products);
      if (!activeCount) {
        const changed = cartUploadFiles.length > 0;
        cartUploadFiles = [];
        return { changed, orderIds, activeCount };
      }
      if (!orderIds.size) {
        return { changed: false, orderIds, activeCount };
      }
      const nextEntries = Array.from(cartUploadFiles || []).filter((entry) => {
        const trackedOrderId = normalizeTrackedOrderId(entry?.orderId || '');
        return !trackedOrderId || orderIds.has(trackedOrderId);
      });
      const changed = nextEntries.length !== cartUploadFiles.length;
      cartUploadFiles = nextEntries;
      return { changed, orderIds, activeCount };
    }
    function preloadImageUrl(url) {
      if (!url || typeof Image === 'undefined') return Promise.resolve(url || '');
      const normalizedUrl = normalizeProductImageUrl(url);
      if (productImageLoadPromises.has(normalizedUrl)) {
        return productImageLoadPromises.get(normalizedUrl);
      }
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          resolve(normalizedUrl);
        };
        img.onload = finish;
        img.onerror = finish;
        img.src = normalizedUrl;
        if (img.complete) finish();
      });
      productImageLoadPromises.set(normalizedUrl, promise);
      return promise;
    }
    function getProductVariantImageUrls(productId = state.product) {
      const variants = Array.isArray(productImages?.[productId]) ? productImages[productId] : [];
      return variants
        .flatMap((variant) => [variant?.image, ...(variant?.seams || []).map((seam) => seam?.image)])
        .filter(Boolean)
        .filter((url, index, list) => list.indexOf(url) === index);
    }
    function scheduleProductImagesPreload(productId = state.product) {
      const normalizedProductId = String(productId || '').trim();
      if (!normalizedProductId || scheduledProductImagePreloads.has(normalizedProductId)) return;
      scheduledProductImagePreloads.add(normalizedProductId);
      const flush = () => {
        scheduledProductImagePreloads.delete(normalizedProductId);
        preloadProductImages(normalizedProductId);
      };
      if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(flush, { timeout: 250 });
        return;
      }
      setTimeout(flush, 0);
    }
    function setShellLoading(isLoading) {
      const shell = document.querySelector('.shell');
      const overlay = document.getElementById('shellLoadingOverlay');
      if (!shell || !overlay) return;
      shell.classList.toggle('is-loading', isLoading);
      overlay.hidden = !isLoading;
      overlay.style.display = isLoading ? 'flex' : 'none';
      shell.querySelectorAll('[data-shell-content]').forEach((node) => {
        if (isLoading) {
          node.style.visibility = 'hidden';
        } else {
          node.style.removeProperty('visibility');
        }
      });
    }
    function waitForNextPaint() {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });
    }
    function getStepOneVariantControlsHtml() {
      return `
        <div class="section" data-step-one-variants>
          <div class="step-1-color-row">
            <div class="step-1-color-block">
              <div class="field-title">Цвет</div>
              <div class="color-row" style="margin-top:12px;">
                ${getAvailableColors(state.product).map((c) => `
                  <button class="swatch ${state.color === c.name ? 'active' : ''}" data-color="${c.name}" title="${c.name}">
                    <span style="background:${getColorHex(c.name)}"></span>
                  </button>
                `).join('')}
              </div>
            </div>
            ${hasSeamOptions() ? `
              <div class="step-1-seam-block">
                <div class="field-title">Цвет швов</div>
                <div class="color-row" style="margin-top:12px;">
                  ${getAvailableSeams().map((s) => `
                    <button class="swatch ${state.seam === s.name ? 'active' : ''}" data-seam="${s.name}" title="${s.name}">
                      <span style="background:${seamValues[s.name] || '#ccc'}"></span>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
          <div class="step-1-meta-row">
            <div class="step-1-size-block">
              <div class="field-title">Размер</div>
              <div class="chip-row" style="margin-top:12px;">
                ${getSizesByProduct(state.product).map((s) => `<button class="chip-btn ${state.size === s ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    function preloadProductImages(productId = null) {
      const productIds = productId ? [productId] : Object.keys(productImages || {});
      productIds.forEach((id) => {
        getProductVariantImageUrls(id).forEach((url) => {
          preloadImageUrl(url);
        });
      });
    }
    async function preloadInitialRenderImages() {
      const urls = [
        getCurrentProductImage(),
        ...getProductVariantImageUrls(state.product),
        ...baseProducts.map((item) => getProductCardPreviewImage(item.id)),
      ]
        .filter(Boolean)
        .filter((url, index, list) => list.indexOf(url) === index);
      await Promise.all(urls.map((url) => preloadImageUrl(url)));
    }
    preloadProductImages(state.product);
    function getPersistenceStateSnapshot() {
      rememberCurrentProductVariantSelection();
      return {
        step: state.step,
        orderId: normalizeOrderIdValue(state.orderId),
        product: state.product,
        size: state.size,
        seam: state.seam,
        color: state.color,
        productVariants: cloneProductVariants(state.productVariants),
        template: state.template,
        printSize: state.printSize,
        textValue: state.textValue,
        textColor: state.textColor,
        font: state.font,
        selectedExtras: [...state.selectedExtras],
        selectedCustom: state.selectedCustom,
        fastProduction: state.fastProduction,
        photoGrayscale: state.photoGrayscale,
        isEmbroideryText: state.isEmbroideryText,
        cropZoom: state.cropZoom,
        cropPosition: { ...state.cropPosition },
        cropRotation: state.cropRotation,
        activeUploadIndex: state.activeUploadIndex,
        draggingCrop: false,
        email: state.email,
        customerName: state.customerName,
        phone: state.phone,
        comment: state.comment,
        policyAccepted: state.policyAccepted,
        processingAccepted: state.processingAccepted,
        previewDataUrl: '',
        previewMeta: state.previewMeta || '',
        checkoutTab: state.checkoutTab,
      };
    }
    function getPersistenceSnapshot() {
      return {
        version: 3,
        savedAt: Date.now(),
        state: getPersistenceStateSnapshot(),
        extrasCount: { ...extrasCount },
        uploads: state.uploads.map((upload, index) => ({
          id: upload?.id ?? index,
          name: upload?.name || upload?.file?.name || `upload-${index + 1}`,
          file: upload?.file || null,
        })),
      };
    }
    function openPersistenceDb() {
      if (!('indexedDB' in window)) return Promise.resolve(null);
      if (persistenceDbPromise) return persistenceDbPromise;
      persistenceDbPromise = new Promise((resolve) => {
        const request = window.indexedDB.open(PERSISTENCE_DB_NAME, 1);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(PERSISTENCE_STORE_NAME)) {
            db.createObjectStore(PERSISTENCE_STORE_NAME);
          }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => {
          console.warn('Не удалось открыть IndexedDB для сохранения прогресса.');
          resolve(null);
        };
      });
      return persistenceDbPromise;
    }
    async function readPersistedSnapshot() {
      const db = await openPersistenceDb();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(PERSISTENCE_STORE_NAME, 'readonly');
        const store = tx.objectStore(PERSISTENCE_STORE_NAME);
        const request = store.get(PERSISTENCE_RECORD_KEY);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => {
          console.warn('Не удалось прочитать сохраненный прогресс конструктора.');
          resolve(null);
        };
      });
    }
    async function writePersistedSnapshot(snapshot) {
      const db = await openPersistenceDb();
      if (!db) return;
      return new Promise((resolve) => {
        const tx = db.transaction(PERSISTENCE_STORE_NAME, 'readwrite');
        const store = tx.objectStore(PERSISTENCE_STORE_NAME);
        store.put(snapshot, PERSISTENCE_RECORD_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => {
          console.warn('Не удалось сохранить прогресс конструктора.');
          resolve();
        };
        tx.onabort = () => resolve();
      });
    }
    async function clearPersistedSnapshot() {
      const db = await openPersistenceDb();
      if (!db) return;
      return new Promise((resolve) => {
        const tx = db.transaction(PERSISTENCE_STORE_NAME, 'readwrite');
        const store = tx.objectStore(PERSISTENCE_STORE_NAME);
        store.delete(PERSISTENCE_RECORD_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
        tx.onabort = () => resolve();
      });
    }
    function applyPersistedSnapshot(snapshot) {
      if (!snapshot?.state) return false;
      revokeUploadObjectUrls(state.uploads);
      const nextState = createDefaultState();
      Object.assign(nextState, snapshot.state || {});
      if (shouldResetLegacyDefaultTemplate(snapshot.state, snapshot.extrasCount, snapshot.uploads, Number(snapshot.version) || 0)) {
        nextState.template = null;
      }
      Object.assign(state, nextState);
      state.orderId = normalizeOrderIdValue(state.orderId);
      state.productVariants = cloneProductVariants(state.productVariants);
      Object.keys(extrasCount).forEach((key) => delete extrasCount[key]);
      Object.entries(snapshot.extrasCount || {}).forEach(([key, value]) => {
        const nextValue = Number(value) || 0;
        if (nextValue > 0) extrasCount[key] = nextValue;
      });
      state.selectedExtras = Object.keys(extrasCount).filter((key) => extrasCount[key] > 0);
      syncProductVariantState();
      state.uploads = (snapshot.uploads || [])
        .map((upload, index) => {
          const file = upload?.file || null;
          if (!file) return null;
          return {
            id: upload?.id ?? index,
            name: upload?.name || file.name || `upload-${index + 1}`,
            file,
            url: URL.createObjectURL(file),
          };
        })
        .filter(Boolean);
      state.activeUploadIndex = Math.max(0, Math.min(Number(state.activeUploadIndex) || 0, Math.max(0, state.uploads.length - 1)));
      if (!Number.isInteger(state.step) || state.step < 1 || state.step > steps.length) {
        state.step = 1;
      }
      return true;
    }
    function schedulePersistenceSave() {
      if (!persistenceHydrated) return;
      clearTimeout(persistenceSaveTimer);
      persistenceSaveTimer = setTimeout(() => {
        const snapshot = getPersistenceSnapshot();
        persistenceWriteChain = persistenceWriteChain.then(() => writePersistedSnapshot(snapshot));
      }, PERSISTENCE_DEBOUNCE_MS);
    }
    async function restorePersistedState() {
      const snapshot = await readPersistedSnapshot();
      if (snapshot) {
        applyPersistedSnapshot(snapshot);
        persistenceHydrated = true;
        return true;
      }
      persistenceHydrated = true;
      return false;
    }
    function getOrderPayload() {
      state.orderId = normalizeOrderIdValue(state.orderId);
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      const selectedPrintSize = getSelectedPrintSize();
      const uploadNames = (isCustomSelected() ? state.uploads : state.uploads.slice(0, 1))
        .map((upload) => upload?.name || '')
        .filter(Boolean);
      const selectedExtrasNames = Object.entries(extrasCount)
        .filter(([, count]) => count > 0)
        .map(([id, count]) => {
          const item = extras.find((e) => e.id === id);
          return item ? `${item.name} × ${count}` : null;
        })
        .filter(Boolean);
      return {
        orderId: state.orderId,
        formattedOrderId: getFormattedOrderId(state.orderId),
        productId: state.product,
        productName: selectedProduct.name,
        size: state.size,
        seam: hasSeamOptions() ? state.seam : '',
        color: selectedColor.name,
        templateId: state.selectedCustom || state.template || '',
        designName: getSelectedDesignName(),
        printSize: selectedPrintSize.name,
        textValue: state.textValue,
        textColor: state.textColor,
        font: state.font,
        uploadNames,
        uploadCount: uploadNames.length,
        extras: selectedExtrasNames,
        fastProduction: state.fastProduction,
        totalPrice: getTotalPrice(),
        email: state.email,
        customerName: state.customerName,
        phone: state.phone,
        comment: state.comment,
        policyAccepted: state.policyAccepted,
        processingAccepted: state.processingAccepted,
        isEmbroideryText: state.isEmbroideryText,
        embroiderySymbols: getEmbroiderySymbolsCount(),
        embroideryPrice: getEmbroideryTotal(),
      };
    }
    function sanitizeTildaOrderPart(value) {
      return String(value ?? '')
        .replace(/\s+/g, ' ')
        .replace(/:::/g, ' ')
        .replace(/[#:=%]+/g, '-')
        .trim();
    }
    function buildTildaCartTitle(payload = getOrderPayload()) {
      const isCustom = isCustomSelected();
      const parts = [
        `1) ${payload.productName}`,
        `Размер ${payload.size}`,
        `Цвет ${payload.color}`,
        payload.seam ? `Шов ${payload.seam}` : '',
        `Дизайн ${payload.designName}`,
        !isCustom ? `Принт ${payload.printSize}` : '',
        !isCustom && payload.textValue ? `Текст ${payload.textValue}` : '',
        !isCustom && payload.textColor ? `Цвет текста ${String(payload.textColor).replace('#', '')}` : '',
        !isCustom && payload.font ? `Шрифт ${payload.font}` : '',
        payload.isEmbroideryText ? `Вышивка ${payload.embroiderySymbols} симв.` : '',
        payload.uploadCount ? `Файлы ${payload.uploadCount}` : '',
        payload.extras.length ? `Допы ${payload.extras.join(', ')}` : '',
        payload.fastProduction ? 'Ускоренное производство' : '',
        `ID ${payload.formattedOrderId}`,
      ]
        .filter(Boolean)
        .map((part) => sanitizeTildaOrderPart(part));
      return parts.join(' / ');
    }
    function buildTildaCartHref(payload = getOrderPayload()) {
      const title = buildTildaCartTitle(payload);
      const price = Math.round(Number(payload.totalPrice || 0));
      return `#order:${title} =${price}`;
    }
    function escapeSvg(value) {
      return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;');
    }
    function splitPreviewText(value, maxCharsPerLine = 14, maxLines = 3) {
      const words = String(value || '')
        .replace(/\s+/g, ' ')
        .trim()
        .toUpperCase()
        .split(' ')
        .filter(Boolean);
      if (!words.length) return [];
      const lines = [];
      let currentLine = words.shift() || '';
      while (words.length) {
        const nextWord = words[0];
        const candidate = `${currentLine} ${nextWord}`.trim();
        if (candidate.length <= maxCharsPerLine || !currentLine) {
          currentLine = candidate;
          words.shift();
          continue;
        }
        lines.push(currentLine);
        currentLine = words.shift() || '';
        if (lines.length === maxLines - 1) break;
      }
      if (currentLine) {
        const tailWords = [currentLine, ...words].join(' ').trim();
        lines.push(tailWords);
      }
      return lines.slice(0, maxLines);
    }
    function renderSvgTextBlock(lines, options = {}) {
      if (!lines?.length) return '';
      const {
        x = 0,
        y = 0,
        lineHeight = 58,
        fontSize = 50,
        fill = '#111111',
        fontFamily = 'Inter, system-ui, sans-serif',
        anchor = 'middle',
      } = options;
      return `
        <text
          x="${x}"
          y="${y}"
          fill="${escapeSvg(fill)}"
          font-family="${escapeSvg(fontFamily)}"
          font-size="${fontSize}"
          font-weight="600"
          letter-spacing="6"
          text-anchor="${anchor}"
        >
          ${lines.map((line, index) => `
            <tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeSvg(line)}</tspan>
          `).join('')}
        </text>
      `;
    }
    function createSvgDataUrl(svg) {
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }
    function getCheckoutPreviewCacheKey() {
      return JSON.stringify({
        step: state.step,
        product: state.product,
        color: state.color,
        seam: state.seam,
        template: state.template,
        selectedCustom: state.selectedCustom,
        printSize: state.printSize,
        textValue: state.textValue,
        textColor: state.textColor,
        font: state.font,
        uploadUrls: state.uploads.map((upload) => upload?.url || ''),
        cropZoom: state.cropZoom,
        cropPosition: state.cropPosition,
        cropRotation: state.cropRotation,
        photoGrayscale: state.photoGrayscale,
      });
    }
    function ensureCheckoutPreviewImageElement() {
      const garment = document.getElementById('garment');
      if (!garment) return null;
      let img = document.getElementById('checkoutPreviewFlat');
      if (!img) {
        img = document.createElement('img');
        img.id = 'checkoutPreviewFlat';
        img.className = 'checkout-preview-flat';
        img.alt = 'preview';
        garment.appendChild(img);
      }
      return img;
    }
    function syncCartActionTargets() {
      const cartHref = buildTildaCartHref();
      const tildaCartLinks = document.querySelectorAll('.tab1next a');
      tildaCartLinks.forEach((node) => {
        node.setAttribute('href', cartHref);
        node.setAttribute('data-cart-href', cartHref);
      });
      document.querySelectorAll('[data-submit-order]').forEach((node) => {
        if (node.matches?.('a')) {
          node.setAttribute('href', cartHref);
        }
        node.setAttribute('data-cart-href', cartHref);
      });
      if (window.jQuery) {
        window.jQuery('.tab1next a').attr('href', cartHref);
      }
      return cartHref;
    }
    function getOrCreateTildaCartOrderTrigger() {
      let trigger = document.getElementById('configuratorTildaCartOrderTrigger');
      if (trigger) return trigger;
      trigger = document.createElement('a');
      trigger.id = 'configuratorTildaCartOrderTrigger';
      trigger.href = '#order:';
      trigger.setAttribute('data-cart-href', '#order:');
      trigger.setAttribute('aria-hidden', 'true');
      trigger.tabIndex = -1;
      trigger.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
      document.body.appendChild(trigger);
      return trigger;
    }
    function openTildaCart(cartHref) {
      const trigger = getOrCreateTildaCartOrderTrigger();
      if (!trigger) return false;
      trigger.setAttribute('href', cartHref);
      trigger.setAttribute('data-cart-href', cartHref);
      trigger.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }));
      return true;
    }
    function ensureHiddenField(form, name, id) {
      if (!form) return null;
      let field = form.querySelector(`#${id}`);
      if (!field) {
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        field.id = id;
        form.appendChild(field);
      }
      return field;
    }
    function canvasToBlob(canvas, type = 'image/jpeg', quality = 0.92) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), type, quality);
      });
    }
    function blobToDataUrl(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(reader.error || new Error('Failed to convert blob to data URL.'));
        reader.readAsDataURL(blob);
      });
    }
    async function renderImageSourceToDataUrl(src, options = {}) {
      const {
        width = null,
        height = null,
        type = 'image/png',
        quality = 0.95,
      } = options;
      if (!src) return '';
      let img = null;
          try {
        img = await loadImageElement(src, { crossOrigin: 'anonymous' });
      } catch (_) {
        img = await loadImageElement(src);
      }
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, width || img.naturalWidth || img.width || 1);
      canvas.height = Math.max(1, height || img.naturalHeight || img.height || 1);
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL(type, quality);
    }
    function normalizeExportImageUrl(url) {
      const normalizedUrl = normalizeProductImageUrl(url);
      if (!normalizedUrl) return '';
      try {
        const parsed = new URL(normalizedUrl, document.baseURI || 'https://tilda.cc/');
        if (isDropboxHostedImageUrl(normalizedUrl)) {
          const upstreamPath = `${parsed.host}${parsed.pathname}${parsed.search || ''}`;
          return `https://wsrv.nl/?url=${encodeURIComponent(upstreamPath)}&output=png`;
        }
        const isDriveThumbnail = parsed.hostname === 'drive.google.com' && parsed.pathname === '/thumbnail';
        if (!isDriveThumbnail) return normalizedUrl;
        const fileId = parsed.searchParams.get('id');
        if (!fileId) return normalizedUrl;
        const rawSize = parsed.searchParams.get('sz') || 'w1200';
        const size = /^[wh]\d+$/i.test(rawSize) ? rawSize.toLowerCase() : 'w1200';
        return `https://lh3.googleusercontent.com/d/${encodeURIComponent(fileId)}=${size}`;
      } catch (_) {
        return normalizedUrl;
      }
    }
    async function fetchImageAsDataUrl(url) {
      const normalizedUrl = normalizeExportImageUrl(url);
      if (!normalizedUrl || normalizedUrl.startsWith('data:')) {
        return normalizedUrl;
      }
      if (exportImageDataUrlPromises.has(normalizedUrl)) {
        return exportImageDataUrlPromises.get(normalizedUrl);
      }
      const fetchOptions = normalizedUrl.startsWith('blob:')
        ? undefined
        : {
          mode: 'cors',
          credentials: 'omit',
        };
      const promise = fetch(normalizedUrl, fetchOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.blob();
        })
        .then((blob) => blobToDataUrl(blob))
        .catch((error) => {
          console.warn('Не удалось встроить изображение в checkout preview export через fetch, пробую image decode.', error);
          return renderImageSourceToDataUrl(normalizedUrl).catch((nestedError) => {
            console.warn('Не удалось встроить изображение в checkout preview export.', nestedError);
            return normalizedUrl;
          });
        });
      exportImageDataUrlPromises.set(normalizedUrl, promise);
      return promise;
    }
    function loadImageElement(src, options = {}) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        let settled = false;
        const finish = (handler, value) => {
          if (settled) return;
          settled = true;
          handler(value);
        };
        if (options.crossOrigin) {
          img.crossOrigin = options.crossOrigin;
        }
        img.decoding = 'async';
        img.onload = () => finish(resolve, img);
        img.onerror = () => finish(reject, new Error(`Failed to load image: ${String(src || '').slice(0, 120)}`));
        img.src = src;
        if (img.complete && img.naturalWidth > 0) {
          finish(resolve, img);
        }
      });
    }
    function needsTildaUploadImageNormalization(file) {
      if (!file) return false;
      const normalizedType = String(file.type || '').trim().toLowerCase();
      const normalizedExtension = getFileExtensionFromName(file.name || '');
      return [
        'image/heic',
        'image/heif',
        'image/heic-sequence',
        'image/heif-sequence',
        'image/avif',
      ].includes(normalizedType) || ['heic', 'heif', 'avif'].includes(normalizedExtension);
    }
    async function convertImageFileToJpeg(file, quality = 0.92) {
      if (!file) return null;
      const objectUrl = URL.createObjectURL(file);
      try {
        const image = await loadImageElement(objectUrl);
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, image.naturalWidth || image.width || 1);
        canvas.height = Math.max(1, image.naturalHeight || image.height || 1);
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const blob = await canvasToBlob(canvas, 'image/jpeg', quality);
        if (!blob) return null;
        const baseName = String(file.name || 'upload').replace(/\.[^.]+$/, '') || 'upload';
        return new File([blob], `${baseName}.jpg`, {
          type: 'image/jpeg',
          lastModified: file.lastModified || Date.now(),
        });
      } catch (_) {
        return null;
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    }
    async function normalizeFileForTildaUpload(file) {
      if (!file) return null;
      if (!needsTildaUploadImageNormalization(file)) return file;
      const convertedFile = await convertImageFileToJpeg(file);
      if (convertedFile) return convertedFile;
      console.warn('Не удалось конвертировать файл для Tilda upload, отправляю оригинал.', file?.name || '');
      return file;
    }
    async function normalizeFilesForTildaUpload(files = []) {
      const normalizedFiles = await Promise.all(
        Array.from(files || []).map((file) => normalizeFileForTildaUpload(file))
      );
      return normalizedFiles.filter(Boolean);
    }
    function buildInlineStyleText(style) {
      return Array.from(style || [])
        .map((propertyName) => `${propertyName}:${style.getPropertyValue(propertyName)};`)
        .join('');
    }
    function isLikelyIosWebkit() {
      const userAgent = window.navigator?.userAgent || '';
      const platform = window.navigator?.platform || '';
      const maxTouchPoints = Number(window.navigator?.maxTouchPoints || 0);
      const isIosDevice = /iPad|iPhone|iPod/i.test(userAgent)
        || (platform === 'MacIntel' && maxTouchPoints > 1);
      return isIosDevice && /WebKit/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS/i.test(userAgent);
    }
    function buildRoundedRectPath(ctx, x, y, width, height, radius = 0) {
      if (!ctx) return;
      const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(x, y, width, height, safeRadius);
        return;
      }
      ctx.moveTo(x + safeRadius, y);
      ctx.lineTo(x + width - safeRadius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
      ctx.lineTo(x + width, y + height - safeRadius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
      ctx.lineTo(x + safeRadius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
      ctx.lineTo(x, y + safeRadius);
      ctx.quadraticCurveTo(x, y, x + safeRadius, y);
    }
    function dataUrlToBlob(dataUrl = '') {
      const normalizedDataUrl = String(dataUrl || '');
      if (!normalizedDataUrl.startsWith('data:')) return null;
      const [metaPart, dataPart = ''] = normalizedDataUrl.split(',', 2);
      const mimeMatch = /^data:([^;]+)/i.exec(metaPart);
      const mimeType = mimeMatch?.[1] || 'application/octet-stream';
      const isBase64 = /;base64/i.test(metaPart);
      try {
        const byteString = isBase64 ? window.atob(dataPart) : decodeURIComponent(dataPart);
        const bytes = new Uint8Array(byteString.length);
        for (let index = 0; index < byteString.length; index += 1) {
          bytes[index] = byteString.charCodeAt(index);
        }
        return new Blob([bytes], { type: mimeType });
      } catch (_) {
        return null;
      }
    }
    async function inlineSnapshotTree(sourceNode, clonedNode) {
      if (!(sourceNode instanceof Element) || !(clonedNode instanceof Element)) return;
      const computedStyle = window.getComputedStyle(sourceNode);
      clonedNode.setAttribute('style', buildInlineStyleText(computedStyle));
      if (sourceNode instanceof HTMLImageElement && clonedNode instanceof HTMLImageElement) {
        const sourceUrl = sourceNode.currentSrc || sourceNode.getAttribute('src') || '';
        const embeddedUrl = await fetchImageAsDataUrl(sourceUrl);
        if (embeddedUrl) {
          clonedNode.setAttribute('src', embeddedUrl);
        } else {
          clonedNode.removeAttribute('src');
        }
        clonedNode.removeAttribute('srcset');
        clonedNode.removeAttribute('sizes');
      }
      const sourceChildren = Array.from(sourceNode.childNodes);
      const clonedChildren = Array.from(clonedNode.childNodes);
      for (let index = 0; index < sourceChildren.length; index += 1) {
        const sourceChild = sourceChildren[index];
        const clonedChild = clonedChildren[index];
        if (sourceChild?.nodeType !== Node.ELEMENT_NODE || clonedChild?.nodeType !== Node.ELEMENT_NODE) {
          continue;
        }
        await inlineSnapshotTree(sourceChild, clonedChild);
      }
    }
    async function createCheckoutCompositePreviewFromDomUrl() {
      const garmentWrap = document.getElementById('garmentWrap');
      if (!garmentWrap) return '';
      const rect = garmentWrap.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      if (!width || !height) return '';
      const clonedWrap = garmentWrap.cloneNode(true);
      if (!(clonedWrap instanceof HTMLElement)) return '';
      clonedWrap.removeAttribute('id');
      clonedWrap.classList.remove('editable', 'upload-hint', 'dragging-photo', 'drop-hover');
      await inlineSnapshotTree(garmentWrap, clonedWrap);
      clonedWrap.querySelectorAll('#checkoutPreviewFlat, .garment-drop-overlay').forEach((node) => node.remove());
      clonedWrap.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
      clonedWrap.style.width = `${width}px`;
      clonedWrap.style.height = `${height}px`;
      clonedWrap.style.minHeight = `${height}px`;
      clonedWrap.style.maxWidth = 'none';
      clonedWrap.style.aspectRatio = 'auto';
      clonedWrap.style.position = 'relative';
      clonedWrap.style.inset = 'auto';
      const serializedMarkup = new XMLSerializer().serializeToString(clonedWrap);
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <foreignObject x="0" y="0" width="${width}" height="${height}">
            ${serializedMarkup}
          </foreignObject>
        </svg>
      `;
      return createSvgDataUrl(svg);
    }
    async function createPreviewFromUpload() {
      const upload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      if (!upload?.url) return { dataUrl: '', file: null };
      let img = null;
      try {
        img = await loadImageElement(upload.url);
      } catch (_) {
        return { dataUrl: '', file: null };
      }
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1500;
      const ctx = canvas.getContext('2d');
      if (!ctx) return { dataUrl: '', file: null };
      const imageWidth = img.naturalWidth || img.width || canvas.width;
      const imageHeight = img.naturalHeight || img.height || canvas.height;
      const scale = state.cropZoom || 1;
      const rot = state.cropRotation || 0;
      const drawWidth = canvas.width * scale;
      const drawHeight = (imageHeight / imageWidth) * drawWidth;
      const tx = (state.cropPosition.x / 100) * canvas.width;
      const ty = (state.cropPosition.y / 100) * canvas.height;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = state.photoGrayscale ? 'grayscale(1)' : 'none';
      ctx.save();
      ctx.translate(tx, ty);
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);
      ctx.rotate(rot * Math.PI / 180);
      ctx.translate(-cx, -cy);
      ctx.drawImage(img, (canvas.width - drawWidth / scale) / 2, (canvas.height - drawHeight / scale) / 2, drawWidth / scale, drawHeight / scale);
      ctx.restore();
      ctx.filter = 'none';
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      const blob = await canvasToBlob(canvas, 'image/jpeg', 0.9);
      const previewFile = blob
        ? new File([blob], `${(upload.name || 'preview').replace(/\.[^.]+$/, '')}-preview.jpg`, { type: 'image/jpeg' })
        : null;
      return { dataUrl, file: previewFile };
    }
    async function createTemplatePhotoDataUrl(width = 520, height = 650) {
      const upload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      if (!upload?.url) return '';
      let img = null;
      try {
        img = await loadImageElement(upload.url);
      } catch (_) {
        return '';
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';
      const imageWidth = img.naturalWidth || img.width || width;
      const imageHeight = img.naturalHeight || img.height || height;
      const coverScale = Math.max(width / imageWidth, height / imageHeight);
      const drawWidth = imageWidth * coverScale;
      const drawHeight = imageHeight * coverScale;
      const zoom = state.cropZoom || 1;
      const offsetX = (state.cropPosition.x / 100) * drawWidth * zoom;
      const offsetY = (state.cropPosition.y / 100) * drawHeight * zoom;
      ctx.clearRect(0, 0, width, height);
      ctx.filter = state.photoGrayscale ? 'grayscale(1)' : 'none';
      ctx.save();
      ctx.translate(width / 2 + offsetX, height / 2 + offsetY);
      ctx.rotate((state.cropRotation || 0) * Math.PI / 180);
      ctx.scale(zoom, zoom);
      ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
      ctx.restore();
      return canvas.toDataURL('image/png');
    }
    async function createCheckoutCompositePreviewUrl(options = {}) {
      const { embedAssets = false } = options;
      const selectedTemplate = getSelectedTemplate();
      const currentScale = printScale[state.printSize] || 1;
      const baseImageUrl = getCurrentProductImage();
      const baseImageHref = embedAssets ? await fetchImageAsDataUrl(baseImageUrl) : baseImageUrl;
      const isPolaroidTemplate = Boolean(selectedTemplate?.kind?.includes('polaroid'));
      const hasStandardUpload = Boolean(state.uploads[state.activeUploadIndex] || state.uploads[0])
        && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
      const standardPhotoX = 300;
      const standardPhotoY = 363;
      const standardPhotoWidth = 400;
      const standardPhotoHeight = 350;
      const uploadPreviewUrl = isPolaroidTemplate && state.uploads.length
        ? await createTemplatePhotoDataUrl()
        : '';
      const standardUploadPreviewUrl = hasStandardUpload
        ? await createTemplatePhotoDataUrl(standardPhotoWidth, standardPhotoHeight)
        : '';
      const fontFamily = getFontFamily(state.font);
      const textLines = splitPreviewText(state.textValue || previewTextPlaceholder, 14, 3);
      const baseScale = 1.12;
      const baseGroup = `
        <g transform="translate(500 625) scale(${baseScale}) translate(-500 -625)">
          <image href="${escapeSvg(baseImageHref)}" x="0" y="0" width="1000" height="1250" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;
      let designMarkup = '';
      if (state.selectedCustom) {
        designMarkup = '';
      } else if (isPolaroidTemplate) {
        const tilt = selectedTemplate.kind === 'polaroid-tilt' ? -8 : 0;
        const photoX = 329;
        const photoY = 476;
        const photoWidth = 342;
        const photoHeight = 428;
        const textTop = selectedTemplate.kind === 'polaroid-top';
        const textBottom = selectedTemplate.kind === 'polaroid-bottom';
        const textTilt = selectedTemplate.kind === 'polaroid-tilt';
        const polaroidBody = `
          <g transform="translate(500 587.5) scale(${currentScale}) rotate(${tilt}) translate(-500 -587.5)">
            ${textTop ? renderSvgTextBlock(textLines, {
              x: 500,
              y: 215,
              lineHeight: 48,
              fontSize: 40,
              fill: state.textColor,
              fontFamily,
            }) : ''}
            <rect x="265" y="335" width="470" height="504" rx="18" fill="#ffffff" stroke="#d1d5db" stroke-width="6"/>
            <clipPath id="checkoutPreviewPolaroidPhoto">
              <rect x="${photoX}" y="${photoY}" width="${photoWidth}" height="${photoHeight}" rx="12"/>
            </clipPath>
            <rect x="${photoX}" y="${photoY}" width="${photoWidth}" height="${photoHeight}" rx="12" fill="#f3f4f6"/>
            ${uploadPreviewUrl ? `<image href="${escapeSvg(uploadPreviewUrl)}" x="${photoX}" y="${photoY}" width="${photoWidth}" height="${photoHeight}" preserveAspectRatio="xMidYMid slice" clip-path="url(#checkoutPreviewPolaroidPhoto)"/>` : ''}
            ${!uploadPreviewUrl ? `<text x="500" y="690" fill="#9ca3af" font-size="34" font-family="Inter, system-ui, sans-serif" text-anchor="middle" letter-spacing="10">PHOTO</text>` : ''}
            ${(textBottom || textTilt) ? renderSvgTextBlock(textLines, {
              x: 500,
              y: 930,
              lineHeight: 48,
              fontSize: 40,
              fill: state.textColor,
              fontFamily,
            }) : ''}
          </g>
        `;
        designMarkup = polaroidBody;
      } else if (selectedTemplate) {
        const isEmbLeft = selectedTemplate.kind === 'emb-left';
        const textY = isEmbLeft ? 350 : (hasStandardUpload ? 780 : 485);
        const uploadMarkup = standardUploadPreviewUrl ? `
          <clipPath id="checkoutPreviewStandardPhoto">
            <rect x="${standardPhotoX}" y="${standardPhotoY}" width="${standardPhotoWidth}" height="${standardPhotoHeight}" rx="14"/>
          </clipPath>
          <rect
            x="${standardPhotoX}"
            y="${standardPhotoY}"
            width="${standardPhotoWidth}"
            height="${standardPhotoHeight}"
            rx="14"
            fill="#f3f4f6"
            stroke="#e5e7eb"
          />
          <image
            href="${escapeSvg(standardUploadPreviewUrl)}"
            x="${standardPhotoX}"
            y="${standardPhotoY}"
            width="${standardPhotoWidth}"
            height="${standardPhotoHeight}"
            preserveAspectRatio="xMidYMid slice"
            clip-path="url(#checkoutPreviewStandardPhoto)"
          />
        ` : '';
        designMarkup = renderSvgTextBlock(textLines, {
          x: isEmbLeft ? 260 : 500,
          y: textY,
          lineHeight: 56 * currentScale,
          fontSize: 48 * currentScale,
          fill: state.textColor,
          fontFamily,
          anchor: isEmbLeft ? 'start' : 'middle',
        });
        designMarkup = `${uploadMarkup}${designMarkup}`;
      }
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1250">
          ${baseGroup}
          ${designMarkup}
        </svg>
      `;
      return createSvgDataUrl(svg);
    }
    async function renderCheckoutCompositePreviewCanvas(canvas) {
      if (!(canvas instanceof HTMLCanvasElement)) return false;
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      const selectedTemplate = getSelectedTemplate();
      const currentScale = printScale[state.printSize] || 1;
      const fontFamily = getFontFamily(state.font);
      const textLines = splitPreviewText(state.textValue || previewTextPlaceholder, 14, 3);
      const domMetrics = getCheckoutPreviewDomMetrics();
      const isPolaroidTemplate = Boolean(selectedTemplate?.kind?.includes('polaroid'));
      const hasStandardUpload = Boolean(state.uploads[state.activeUploadIndex] || state.uploads[0])
        && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
      const hasPolaroidUpload = isPolaroidTemplate && state.uploads.length;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(canvas.width / 1000, canvas.height / 1250);
      await drawCheckoutBaseImageToCanvas(ctx);
      if (state.selectedCustom || !selectedTemplate) {
        ctx.restore();
        return true;
      }
      if (isPolaroidTemplate) {
        if (domMetrics) {
          const domRendered = await renderPolaroidPreviewCanvasFromDom(ctx, domMetrics);
          if (domRendered) {
            ctx.restore();
            return true;
          }
        }
        const tilt = selectedTemplate.kind === 'polaroid-tilt' ? -8 : 0;
        const textTop = selectedTemplate.kind === 'polaroid-top';
        const textBottom = selectedTemplate.kind === 'polaroid-bottom';
        const textTilt = selectedTemplate.kind === 'polaroid-tilt';
        const artboardScale = 1000 / GARMENT_ARTBOARD_WIDTH;
        const wrapWidth = 132 * artboardScale;
        const frameRadius = 8 * artboardScale;
        const framePadding = 8 * artboardScale;
        const photoWidth = 96 * artboardScale;
        const photoHeight = 120 * artboardScale;
        const photoRadius = 4 * artboardScale;
        const gapHeight = 24 * artboardScale;
        const photoX = (wrapWidth - photoWidth) / 2;
        const photoY = framePadding;
        const frameHeight = (framePadding * 2) + photoHeight + gapHeight;
        const textFontSize = 12 * artboardScale;
        const textLineHeight = textFontSize * 1.15;
        const textGap = 8 * artboardScale;
        const topTextHeight = textTop ? textLineHeight * textLines.length : 0;
        const bottomTextHeight = (textBottom || textTilt) ? textLineHeight * textLines.length : 0;
        const wrapHeight = topTextHeight
          + (textTop ? textGap : 0)
          + frameHeight
          + ((textBottom || textTilt) ? textGap + bottomTextHeight : 0);
        ctx.save();
        ctx.translate(500, 1250 * 0.47);
        ctx.scale(currentScale, currentScale);
        if (tilt) {
          ctx.rotate((tilt * Math.PI) / 180);
        }
        ctx.translate(-wrapWidth / 2, -wrapHeight / 2);
        if (textTop) {
          drawCanvasTextBlock(ctx, textLines, {
            x: wrapWidth / 2,
            y: textFontSize,
            lineHeight: textLineHeight,
            fontSize: textFontSize,
            fill: state.textColor,
            fontFamily,
          });
        }
        const frameY = textTop ? topTextHeight + textGap : 0;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.08)';
        ctx.shadowBlur = 18 * artboardScale;
        ctx.shadowOffsetY = 6 * artboardScale;
        buildRoundedRectPath(ctx, 0, frameY, wrapWidth, frameHeight, frameRadius);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.restore();
        ctx.save();
        buildRoundedRectPath(ctx, 0, frameY, wrapWidth, frameHeight, frameRadius);
        ctx.lineWidth = 1.2 * artboardScale;
        ctx.strokeStyle = '#d1d5db';
        ctx.stroke();
        ctx.restore();
        if (hasPolaroidUpload) {
          await drawCurrentUploadToCanvas(ctx, photoX, frameY + photoY, photoWidth, photoHeight, {
            radius: photoRadius,
            fill: '#f3f4f6',
          });
        } else {
          ctx.save();
          buildRoundedRectPath(ctx, photoX, frameY + photoY, photoWidth, photoHeight, photoRadius);
          ctx.fillStyle = '#f3f4f6';
          ctx.fill();
          ctx.restore();
          ctx.save();
          ctx.fillStyle = '#9ca3af';
          ctx.font = getCanvasFont(10 * artboardScale, 'Inter, system-ui, sans-serif', 600);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('PHOTO', photoX + (photoWidth / 2), frameY + photoY + (photoHeight / 2));
          ctx.restore();
        }
        if (textBottom || textTilt) {
          drawCanvasTextBlock(ctx, textLines, {
            x: wrapWidth / 2,
            y: frameY + frameHeight + textGap + textFontSize,
            lineHeight: textLineHeight,
            fontSize: textFontSize,
            fill: state.textColor,
            fontFamily,
          });
        }
        ctx.restore();
        ctx.restore();
        return true;
      }
      if (hasStandardUpload) {
        await drawCurrentUploadToCanvas(ctx, 300, 363, 400, 350, {
          radius: 14,
          fill: '#f3f4f6',
          stroke: '#e5e7eb',
          strokeWidth: 1,
        });
      }
      drawCanvasTextBlock(ctx, textLines, {
        x: selectedTemplate.kind === 'emb-left' ? 260 : 500,
        y: selectedTemplate.kind === 'emb-left' ? 350 : (hasStandardUpload ? 780 : 485),
        lineHeight: 56 * currentScale,
        fontSize: 48 * currentScale,
        fill: state.textColor,
        fontFamily,
        anchor: selectedTemplate.kind === 'emb-left' ? 'start' : 'middle',
      });
      ctx.restore();
      return true;
    }
    async function getCheckoutCompositePreviewUrl(options = {}) {
      const { embedAssets = false } = options;
      if (embedAssets) {
        return createCheckoutCompositePreviewUrl({ embedAssets: true });
      }
      const cacheKey = getCheckoutPreviewCacheKey();
      if (checkoutPreviewCacheKey === cacheKey && checkoutPreviewCacheUrl) {
        return checkoutPreviewCacheUrl;
      }
      const previewUrl = await createCheckoutCompositePreviewUrl();
      checkoutPreviewCacheKey = cacheKey;
      checkoutPreviewCacheUrl = previewUrl;
      return previewUrl;
    }
    function getFileExtensionFromName(name = '') {
      const normalizedName = String(name || '').trim();
      const dotIndex = normalizedName.lastIndexOf('.');
      if (dotIndex <= -1 || dotIndex === normalizedName.length - 1) return '';
      return normalizedName.slice(dotIndex + 1).toLowerCase();
    }
    function getFileExtensionFromType(type = '') {
      const normalizedType = String(type || '').toLowerCase();
      const extensionByType = {
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
        'image/gif': 'gif',
        'image/svg+xml': 'svg',
        'image/heic': 'heic',
        'image/heif': 'heif',
      };
      return extensionByType[normalizedType] || '';
    }
    function buildOrderScopedFileBaseName(kind = 'preview', options = {}) {
      const { index = null, total = 1, orderId = '' } = options;
      const formattedOrderId = getFormattedOrderId(orderId);
      if (kind === 'orig' && total > 1 && Number.isInteger(index) && index >= 0) {
        return `${formattedOrderId}_orig_${index + 1}`;
      }
      return `${formattedOrderId}_${kind}`;
    }
    function buildOrderScopedFileName(kind = 'preview', options = {}) {
      const {
        index = null,
        total = 1,
        name = '',
        type = '',
        extension = '',
        orderId = '',
      } = options;
      const baseName = buildOrderScopedFileBaseName(kind, { index, total, orderId });
      const resolvedExtension = String(extension || getFileExtensionFromName(name) || getFileExtensionFromType(type) || '').trim().toLowerCase();
      return resolvedExtension ? `${baseName}.${resolvedExtension}` : baseName;
    }
    function cloneFileWithName(file, nextName, typeOverride = '') {
      if (!file || !nextName) return file || null;
      return new File([file], nextName, {
        type: typeOverride || file.type || 'application/octet-stream',
        lastModified: file.lastModified || Date.now(),
      });
    }
    function renameUploadFileForOrder(file, kind = 'orig', options = {}) {
      if (!file) return null;
      const nextName = buildOrderScopedFileName(kind, {
        index: options.index ?? null,
        total: options.total ?? 1,
        name: file.name,
        type: options.type || file.type,
        extension: options.extension || '',
        orderId: options.orderId || state.orderId,
      });
      return cloneFileWithName(file, nextName, options.type || file.type);
    }
    function buildCheckoutCompositeFileName(extension = 'jpg') {
      return buildOrderScopedFileName('preview', {
        extension,
        type: extension === 'png'
          ? 'image/png'
          : extension === 'svg'
            ? 'image/svg+xml'
            : 'image/jpeg',
      });
    }
    async function createCheckoutCompositePreviewVectorFile(options = {}) {
      const { embedAssets = false } = options;
      const dataUrl = await createCheckoutCompositePreviewUrl({ embedAssets });
      if (!dataUrl) return { dataUrl: '', file: null };
      const blob = dataUrlToBlob(dataUrl);
      const previewFile = blob
        ? new File([blob], buildCheckoutCompositeFileName('svg'), { type: 'image/svg+xml' })
        : null;
      return {
        dataUrl,
        file: previewFile,
      };
    }
    async function createCheckoutCompositePreviewFileFromCanvas(type = 'image/jpeg', quality = 0.92) {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1500;
      const rendered = await renderCheckoutCompositePreviewCanvas(canvas);
      if (!rendered) return { dataUrl: '', file: null };
      let dataUrl = '';
      try {
        dataUrl = canvas.toDataURL(type, quality);
      } catch (_) {
        dataUrl = '';
      }
      let blob = null;
      try {
        blob = await canvasToBlob(canvas, type, quality);
      } catch (_) {
        blob = null;
      }
      if (!blob && dataUrl) {
        blob = dataUrlToBlob(dataUrl);
      }
      const extension = type === 'image/png' ? 'png' : 'jpg';
      const previewFile = blob
        ? new File([blob], buildCheckoutCompositeFileName(extension), { type })
        : null;
      return {
        dataUrl,
        file: previewFile,
      };
    }
    async function createCheckoutCompositePreviewFileFromSourceUrl(sourceUrl, type = 'image/jpeg', quality = 0.92) {
      if (!sourceUrl) return { dataUrl: '', file: null };
      let previewImage = null;
      try {
        previewImage = await loadImageElement(sourceUrl);
      } catch (_) {
        return { dataUrl: '', file: null };
      }
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1500;
      const ctx = canvas.getContext('2d');
      if (!ctx) return { dataUrl: '', file: null };
      try {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height);
      } catch (_) {
        return { dataUrl: '', file: null };
      }
      let dataUrl = '';
      try {
        dataUrl = canvas.toDataURL(type, quality);
      } catch (_) {
        dataUrl = '';
      }
      let blob = null;
      try {
        blob = await canvasToBlob(canvas, type, quality);
      } catch (_) {
        blob = null;
      }
      if (!blob && dataUrl) {
        blob = dataUrlToBlob(dataUrl);
      }
      const extension = type === 'image/png' ? 'png' : 'jpg';
      const previewFile = blob
        ? new File([blob], buildCheckoutCompositeFileName(extension), { type })
        : null;
      return {
        dataUrl,
        file: previewFile,
      };
    }
    async function waitForCurrentBaseImageReady() {
      const baseImage = document.getElementById('baseImage');
      const currentBaseImageUrl = normalizeProductImageUrl(getCurrentProductImage());
      if (!baseImage || !currentBaseImageUrl) return;
      const currentElementSrc = normalizeProductImageUrl(
        baseImage.dataset.currentSrc || baseImage.currentSrc || baseImage.getAttribute('src') || ''
      );
      if (currentElementSrc === currentBaseImageUrl && baseImage.complete && (baseImage.naturalWidth || 0) > 0) {
        return;
      }
      const pendingSrc = normalizeProductImageUrl(baseImage.dataset.pendingSrc || '');
      if (pendingSrc === currentBaseImageUrl && baseImage._deferredSrcPromise) {
        await Promise.resolve(baseImage._deferredSrcPromise).catch(() => {});
      }
      const refreshedElementSrc = normalizeProductImageUrl(
        baseImage.dataset.currentSrc || baseImage.currentSrc || baseImage.getAttribute('src') || ''
      );
      if (refreshedElementSrc === currentBaseImageUrl && baseImage.complete && (baseImage.naturalWidth || 0) > 0) {
        return;
      }
      await new Promise((resolve) => {
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          baseImage.removeEventListener('load', finish);
          baseImage.removeEventListener('error', finish);
          resolve();
        };
        baseImage.addEventListener('load', finish, { once: true });
        baseImage.addEventListener('error', finish, { once: true });
        baseImage.dataset.currentSrc = currentBaseImageUrl;
        baseImage.src = currentBaseImageUrl;
        if (baseImage.complete) {
          finish();
        }
      });
      if (typeof baseImage.decode === 'function') {
        try {
          await baseImage.decode();
        } catch (_) {}
      }
    }
    async function createCheckoutCompositePreviewFile(type = 'image/jpeg', quality = 0.92) {
      return withLiveCheckoutPreviewScene(async () => {
        if (document.fonts?.ready) {
          try {
            await document.fonts.ready;
          } catch (_) {
            // Font readiness is best-effort for export fidelity.
          }
        }
        await waitForCurrentBaseImageReady();
        const isIosSafari = isLikelyIosWebkit();
        let canvasPreview = null;
        if (isIosSafari) {
          canvasPreview = await createCheckoutCompositePreviewFileFromCanvas(type, quality);
          if (canvasPreview.file) {
            return {
              ...canvasPreview,
              kind: 'raster-canvas-ios',
            };
          }
        }
        if (!isIosSafari) {
          let domPreviewSourceUrl = '';
      try {
            domPreviewSourceUrl = await createCheckoutCompositePreviewFromDomUrl();
          } catch (error) {
        console.warn('Не удалось собрать checkout preview из live DOM, использую fallback export.', error);
          }
          const domPreview = await createCheckoutCompositePreviewFileFromSourceUrl(domPreviewSourceUrl, type, quality);
          if (domPreview.file) {
            return {
              ...domPreview,
              kind: 'raster-dom',
            };
          }
        }
        let embeddedPreviewSourceUrl = '';
        try {
          embeddedPreviewSourceUrl = await createCheckoutCompositePreviewUrl({ embedAssets: true });
        } catch (error) {
        console.warn('Failed to build checkout preview in SVG fallback.', error);
        }
        const embeddedPreview = await createCheckoutCompositePreviewFileFromSourceUrl(embeddedPreviewSourceUrl, type, quality);
        if (embeddedPreview.file) {
          return {
            ...embeddedPreview,
            kind: 'raster-embedded-svg',
          };
        }
        const fallbackCanvasPreview = canvasPreview || await createCheckoutCompositePreviewFileFromCanvas(type, quality);
        return {
          ...fallbackCanvasPreview,
          kind: canvasPreview?.file ? 'raster-canvas-ios' : 'raster-canvas-fallback',
        };
      });
    }
    function resetCheckoutCompositePreview() {
      checkoutPreviewRenderToken += 1;
      const flatPreview = document.getElementById('checkoutPreviewFlat');
      const baseImage = document.getElementById('baseImage');
      const designLayer = document.getElementById('designLayer');
      if (flatPreview) flatPreview.style.display = 'none';
      if (baseImage) baseImage.style.visibility = '';
      if (designLayer) designLayer.style.display = '';
    }
    async function renderCheckoutCompositePreview() {
      const flatPreview = ensureCheckoutPreviewImageElement();
      const baseImage = document.getElementById('baseImage');
      const designLayer = document.getElementById('designLayer');
      if (!flatPreview || !baseImage || !designLayer) return;
      const cacheKey = getCheckoutPreviewCacheKey();
      const renderToken = ++checkoutPreviewRenderToken;
      designLayer.style.display = 'none';
      baseImage.style.visibility = 'hidden';
      flatPreview.style.display = 'block';
      flatPreview.removeAttribute('src');
      try {
        const previewUrl = await getCheckoutCompositePreviewUrl();
        if (renderToken !== checkoutPreviewRenderToken) return;
        flatPreview.src = previewUrl;
      } catch (error) {
        if (renderToken !== checkoutPreviewRenderToken) return;
        console.warn('Не удалось собрать checkout preview.', error);
        flatPreview.style.display = 'none';
        baseImage.style.visibility = '';
        designLayer.style.display = '';
      }
    }
    async function syncTildaUploadFields(tildaForm) {
      if (!tildaForm) return;
      const preservedFormValues = captureTildaCartFormValues(tildaForm);
      state.email = preservedFormValues.email;
      state.customerName = preservedFormValues.customerName;
      state.phone = preservedFormValues.phone;
      state.comment = preservedFormValues.comment;
      state.orderId = normalizeOrderIdValue(state.orderId);
      const customMode = isCustomSelected();
      const sourceOriginalFiles = (customMode ? state.uploads : state.uploads.slice(0, 1))
        .map((upload) => upload?.file || null)
        .filter(Boolean);
      const preparedOriginalFiles = await normalizeFilesForTildaUpload(sourceOriginalFiles);
      const preview = customMode ? { dataUrl: '', file: null } : await createCheckoutCompositePreviewFile();
      const baseImageUrl = getCurrentProductImage();
      const usesVectorPreview = String(preview?.kind || '').startsWith('vector');
      const baseImageExportUnsafe = shouldUseVectorCheckoutPreview({ baseImageUrl });
      const renamedOriginalFiles = preparedOriginalFiles.map((file, index) => renameUploadFileForOrder(file, 'orig', {
        index,
        total: preparedOriginalFiles.length,
        orderId: state.orderId,
      }));
      const renamedOriginalFile = renamedOriginalFiles[0] || null;
      const renamedPreviewFile = preview.file ? renameUploadFileForOrder(preview.file, 'preview', {
        orderId: state.orderId,
        extension: getFileExtensionFromType(preview.file.type) || getFileExtensionFromName(preview.file.name) || 'jpg',
        type: preview.file.type,
      }) : null;
      const currentOrderFiles = customMode
        ? renamedOriginalFiles.slice(0, MAX_CUSTOM_UPLOADS)
        : [renamedOriginalFile, renamedPreviewFile].filter(Boolean);
      const filesForTilda = mergeCartUploadFiles(currentOrderFiles, { orderId: state.orderId });
      state.previewDataUrl = preview.dataUrl || '';
      state.previewMeta = JSON.stringify({
        orderId: state.orderId,
        formattedOrderId: getFormattedOrderId(state.orderId),
        hasPreview: Boolean(renamedPreviewFile),
        previewName: renamedPreviewFile?.name || '',
        previewType: renamedPreviewFile?.type || '',
        originalName: renamedOriginalFile?.name || '',
        originalType: renamedOriginalFile?.type || '',
        originalFiles: renamedOriginalFiles.map((file, index) => ({
          name: file?.name || '',
          type: file?.type || '',
          sourceName: sourceOriginalFiles[index]?.name || '',
          sourceType: sourceOriginalFiles[index]?.type || '',
          preparedName: preparedOriginalFiles[index]?.name || '',
          preparedType: preparedOriginalFiles[index]?.type || '',
        })),
        uploadCount: sourceOriginalFiles.length,
        uploadedFileCount: currentOrderFiles.length,
        customMode,
        previewKind: preview?.kind || '',
        usesVectorPreview,
        baseImageUrl,
        baseImageExportUnsafe,
        cropZoom: state.cropZoom,
        cropPosition: state.cropPosition,
        cropRotation: state.cropRotation,
        grayscale: state.photoGrayscale,
      });
      const previewField = ensureHiddenField(tildaForm, 'preview_image_meta', 'previewImageMetaField');
      const originalNameField = ensureHiddenField(tildaForm, 'original_image_name', 'originalImageNameField');
      const originalTypeField = ensureHiddenField(tildaForm, 'original_image_type', 'originalImageTypeField');
      const orderIdField = ensureHiddenField(tildaForm, 'order_id', 'uploadOrderIdField');
      if (previewField) previewField.value = state.previewMeta;
      if (originalNameField) originalNameField.value = renamedOriginalFiles.map((file) => file?.name || '').filter(Boolean).join(', ');
      if (originalTypeField) originalTypeField.value = renamedOriginalFiles.map((file) => file?.type || '').filter(Boolean).join(', ');
      if (orderIdField) orderIdField.value = getFormattedOrderId(state.orderId);
      await withPreservedTildaCartFormValues(async () => {
        const upwidgetContainer = await waitForTildaUpwidgetContainer(tildaForm, 5000);
        if (upwidgetContainer && filesForTilda.length) {
          await clearTildaUpwidgetFiles(upwidgetContainer);
          const uploaded = await uploadFilesToTildaUpwidget(upwidgetContainer, filesForTilda);
          if (uploaded) return;
        }
        const fileInputs = Array.from(tildaForm.querySelectorAll('.t-input-group_uw input[type="file"], input[type="file"]'));
        if (!fileInputs.length) {
          return;
        }
        syncFilesToAvailableInputs(fileInputs, filesForTilda);
      }, {
        form: tildaForm,
        values: preservedFormValues,
      });
    }
    function updateOrderFormFields() {
      const payload = getOrderPayload();
      const summaryLines = [
        `ID заказа: ${payload.formattedOrderId}`,
        `Изделие: ${payload.productName}`,
        `Размер: ${payload.size}`,
        payload.seam ? `Цвет швов: ${payload.seam}` : '',
        `Цвет изделия: ${payload.color}`,
        `Дизайн: ${payload.designName}`,
        `Размер принта: ${payload.printSize}`,
        `Текст: ${payload.textValue || '—'}`,
        `Цвет текста: ${payload.textColor}`,
        `Шрифт: ${payload.font}`,
        `Референсы: ${payload.uploadCount ? `${payload.uploadCount} фото` : 'Не загружены'}`,
        `Доп. элементы: ${payload.extras.length ? payload.extras.join(', ') : 'Не выбраны'}`,
        `Ускоренное производство: ${payload.fastProduction ? 'Да' : 'Нет'}`,
        `Имя: ${payload.customerName || '—'}`,
        `Телефон: ${payload.phone || '—'}`,
        `Комментарий: ${payload.comment || '—'}`,
        `Политика: ${payload.policyAccepted ? 'Да' : 'Нет'}`,
        `Согласие на обработку: ${payload.processingAccepted ? 'Да' : 'Нет'}`,
        `Итого: ${formatPrice(payload.totalPrice)}`,
      ].filter(Boolean);
      const localEmailInput = document.getElementById('configuratorEmail');
      const localNameInput = document.getElementById('configuratorName');
      const localPhoneInput = document.getElementById('configuratorPhone');
      const localCommentInput = document.getElementById('configuratorComment');
      const localPolicyInput = document.getElementById('configuratorPolicy');
      const localProcessingInput = document.getElementById('configuratorProcessing');
      const localOrderForm = document.getElementById('orderForm');
      const orderDataInput = document.getElementById('orderDataField');
      const orderSummaryInput = document.getElementById('orderSummaryField');
      const orderIdInput = ensureHiddenField(localOrderForm, 'configurator_order_id', 'orderIdField');
      if (localEmailInput) localEmailInput.value = state.email;
      if (localNameInput) localNameInput.value = state.customerName;
      if (localPhoneInput) localPhoneInput.value = state.phone;
      if (localCommentInput) localCommentInput.value = state.comment;
      if (localPolicyInput) localPolicyInput.checked = state.policyAccepted;
      if (localProcessingInput) localProcessingInput.checked = state.processingAccepted;
      if (orderIdInput) orderIdInput.value = payload.formattedOrderId;
      if (orderDataInput) orderDataInput.value = JSON.stringify(payload);
      if (orderSummaryInput) orderSummaryInput.value = summaryLines.join('\n');
      const localPreviewMetaField = document.getElementById('orderPreviewMetaField');
      if (localPreviewMetaField) localPreviewMetaField.value = state.previewMeta || '';
      const {
        form: tildaForm,
        emailInput: tildaEmailInput,
        nameInput: tildaNameInput,
        phoneInput: tildaPhoneInput,
      } = getTildaCartFormFields(findTildaOrderForm());
      const tildaOrderIdField = ensureHiddenField(tildaForm, 'configurator_order_id', 'tildaOrderIdField');
      const tildaOrderDataField = ensureHiddenField(tildaForm, 'configurator_order_data', 'tildaOrderDataField');
      const tildaOrderSummaryField = ensureHiddenField(tildaForm, 'configurator_order_summary', 'tildaOrderSummaryField');
      const tildaPreviewMetaField = ensureHiddenField(tildaForm, 'configurator_preview_meta', 'tildaPreviewMetaField');
      if (tildaEmailInput) {
        tildaEmailInput.value = state.email;
        tildaEmailInput.dispatchEvent(new Event('input', { bubbles: true }));
        tildaEmailInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (tildaNameInput) {
        tildaNameInput.value = state.customerName;
        tildaNameInput.dispatchEvent(new Event('input', { bubbles: true }));
        tildaNameInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (tildaPhoneInput) {
        tildaPhoneInput.value = state.phone;
        tildaPhoneInput.dispatchEvent(new Event('input', { bubbles: true }));
        tildaPhoneInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (tildaOrderIdField) tildaOrderIdField.value = payload.formattedOrderId;
      if (tildaOrderDataField) tildaOrderDataField.value = JSON.stringify(payload);
      if (tildaOrderSummaryField) tildaOrderSummaryField.value = summaryLines.join('\n');
      if (tildaPreviewMetaField) tildaPreviewMetaField.value = state.previewMeta || '';
      syncCartActionTargets();
      schedulePersistenceSave();
    }
    function advanceOrderIdForNextCartItem() {
      state.orderId = generateOrderId();
      syncCartActionTargets();
      schedulePersistenceSave();
    }
    async function submitOrderForm(event) {
      if (orderSubmitInFlight) {
        event?.preventDefault?.();
        return;
      }
      const activeCartProducts = Array.isArray(window.tcart?.products)
        ? window.tcart.products.filter((item) => item && item.deleted !== 'yes').length
        : 0;
      if (!activeCartProducts) {
        cartUploadFiles = [];
      }
      orderSubmitInFlight = true;
      const currentTarget = event?.currentTarget || null;
      event?.preventDefault?.();
      try {
        updateOrderFormFields();
        const cartHref = syncCartActionTargets();
        if (currentTarget?.tagName === 'A') {
          currentTarget.setAttribute('href', cartHref);
          currentTarget.setAttribute('data-cart-href', cartHref);
        }
        const cartOpened = openTildaCart(cartHref);
        if (!cartOpened) {
          console.warn('?? ??????? ??????? ??????? Tilda.');
          return;
        }
        const openedCartWindow = await waitForTildaCartWindowOpen(5000);
        if (!openedCartWindow) return;
        ensureCartUploadCleanupObserver(openedCartWindow);
        const openedTildaForm = await waitForTildaOrderForm(5000);
        if (openedTildaForm) {
          try {
            await delay(250);
            await syncTildaUploadFields(openedTildaForm);
            updateOrderFormFields();
          } catch (error) {
            console.warn('?? ??????? ???????? checkout preview ? upload field Tilda.', error);
          }
        }
        advanceOrderIdForNextCartItem();
      } finally {
        orderSubmitInFlight = false;
        scheduleCartUploadCleanup(900);
      }
    }
    function syncCheckoutStateFromForm() {
      const localEmailInput = document.getElementById('configuratorEmail');
      const localNameInput = document.getElementById('configuratorName');
      const localPhoneInput = document.getElementById('configuratorPhone');
      const localCommentInput = document.getElementById('configuratorComment');
      const localPolicyInput = document.getElementById('configuratorPolicy');
      const localProcessingInput = document.getElementById('configuratorProcessing');
      if (localEmailInput) state.email = localEmailInput.value.trim();
      if (localNameInput) state.customerName = localNameInput.value.trim();
      if (localPhoneInput) state.phone = localPhoneInput.value.trim();
      if (localCommentInput) state.comment = localCommentInput.value.trim();
      if (localPolicyInput) state.policyAccepted = Boolean(localPolicyInput.checked);
      if (localProcessingInput) state.processingAccepted = Boolean(localProcessingInput.checked);
      updateOrderFormFields();
    }
    function getCheckoutTabIndex(tab = state.checkoutTab) {
      return Math.max(0, checkoutTabsOrder.indexOf(tab));
    }
    function scrollCheckoutIntoView() {
      const checkoutRoot = document.querySelector('.checkout-flow-note');
      if (!checkoutRoot) return;
      requestAnimationFrame(() => {
        checkoutRoot.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    function validateCheckoutContacts(showFeedback = true) {
      syncCheckoutStateFromForm();
      const nameInput = document.getElementById('configuratorName');
      const phoneInput = document.getElementById('configuratorPhone');
      const emailInput = document.getElementById('configuratorEmail');
      const requiredInputs = [nameInput, phoneInput, emailInput].filter(Boolean);
      for (const input of requiredInputs) {
        if (!input.checkValidity()) {
          if (showFeedback) {
            input.focus();
            input.reportValidity?.();
          }
          return false;
        }
      }
      return Boolean(state.customerName && state.phone && state.email);
    }
    function setCheckoutTab(nextTab, options = {}) {
      const { scroll = false } = options;
      if (!checkoutTabsOrder.includes(nextTab)) return;
      syncCheckoutStateFromForm();
      state.checkoutTab = nextTab;
      render();
      if (scroll) scrollCheckoutIntoView();
    }
    function isStepComplete(stepId) {
      if (stepId === 1) return Boolean(state.product && state.size && state.color);
      if (stepId === 2) return Boolean(state.template || state.selectedCustom);
      if (stepId === 3) {
        if (isCustomSelected()) return state.uploads.length > 0;
        const tpl = getSelectedTemplate();
        if (tpl && tpl.uploads > 0) return state.uploads.length > 0;
        return true;
      }
      if (stepId === 4) return Boolean(state.textValue);
      if (stepId === 5) return true;
      return false;
    }
    function isStepUnlocked(stepId) {
      if (stepId === 1) return true;
      if (isCustomSelected() && stepId === 4) return false;
      for (let i = 1; i < stepId; i++) {
        if (isCustomSelected() && i === 4) continue;
        if (!isStepComplete(i)) return false;
      }
      return true;
    }
    function openModal(id) { document.getElementById(id).classList.add('open'); }
    function closeModal(id) { document.getElementById(id).classList.remove('open'); }
    async function resetConfigurator() {
      closeModal('resetConfirmModal');
      setShellLoading(true);
      await waitForNextPaint();
      revokeUploadObjectUrls(state.uploads);
      clearTimeout(persistenceSaveTimer);
      Object.keys(extrasCount).forEach((key) => {
        delete extrasCount[key];
      });
      Object.assign(state, createDefaultState());
      lastDesignLayerRenderKey = '';
      persistenceWriteChain = persistenceWriteChain.then(() => clearPersistedSnapshot());
      try {
        await persistenceWriteChain;
        await preloadInitialRenderImages();
        render();
      } finally {
        requestAnimationFrame(() => {
          setShellLoading(false);
        });
      }
    }
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-close]');
      if (target) closeModal(target.dataset.close);
      if (e.target.classList.contains('modal')) e.target.classList.remove('open');
    });
    function nextStep() {
      if (!isStepComplete(state.step)) return;
      let next = state.step + 1;
      if (isCustomSelected() && next === 4) next = 5;
      if (next <= steps.length) state.step = next;
      render();
    }
    function prevStep() {
      let prev = state.step - 1;
      if (isCustomSelected() && prev === 4) prev = 3;
      if (prev >= 1) state.step = prev;
      render();
    }
    function updateCropPositionFromEvent(event, element) {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const maxOffset = Math.max(0, ((state.cropZoom - 1) / (state.cropZoom * 2)) * 100);
      state.cropPosition = {
        x: clamp(x, maxOffset, 100 - maxOffset),
        y: clamp(y, maxOffset, 100 - maxOffset),
      };
      renderVisualizer();
      updateCropEditorPreview();
    }
    function updateCropEditorPreview() {
      const editorImage = document.getElementById('cropEditorImage');
      const zoomValue = document.getElementById('cropZoomValue');
      if (editorImage) {
        editorImage.style.filter = state.photoGrayscale ? 'grayscale(1)' : 'grayscale(0)';
        editorImage.style.transformOrigin = '50% 50%';
        editorImage.style.transform = `translate(${state.cropPosition.x}%, ${state.cropPosition.y}%) scale(${state.cropZoom}) rotate(${state.cropRotation}deg)`;
      }
      if (zoomValue) {
        zoomValue.textContent = `${state.cropZoom.toFixed(1)}x`;
      }
    }
    function clampCropPositionForCurrentZoom() {
      const maxOffset = Math.max(0, ((state.cropZoom - 1) / (state.cropZoom * 2)) * 100);
      state.cropPosition = {
        x: clamp(state.cropPosition.x, -maxOffset, maxOffset),
        y: clamp(state.cropPosition.y, -maxOffset, maxOffset),
      };
    }
    function syncCropZoomControls() {
      const zoomValue = document.getElementById('cropZoomValue');
      if (zoomValue) {
        zoomValue.textContent = `${state.cropZoom.toFixed(1)}x`;
      }
      const zoomRange = document.getElementById('zoomRange');
      if (zoomRange) {
        zoomRange.value = String(state.cropZoom);
      }
    }
    function updatePreviewImageStyles() {
      const filter = state.photoGrayscale ? 'grayscale(1)' : 'grayscale(0)';
      const previewText = state.textValue || previewTextPlaceholder;
      const tx = state.cropPosition.x;
      const ty = state.cropPosition.y;
      const zoom = state.cropZoom;
      const rot = state.cropRotation;
      document.querySelectorAll('#designLayer .crop-image').forEach((img) => {
        img.style.filter = filter;
        img.style.transformOrigin = '50% 50%';
        img.style.transform = `translate(${tx}%, ${ty}%) scale(${zoom}) rotate(${rot}deg)`;
      });
      lastDesignLayerRenderKey = getDesignLayerRenderState().key;
      schedulePersistenceSave();
    }
    function handleFiles(fileList, slotIndex = 0) {
      const files = Array.from(fileList || []).filter((file) => isSupportedImageFile(file));
      if (!files.length) return;
      if (isCustomSelected()) {
        const availableSlots = Math.max(0, MAX_CUSTOM_UPLOADS - state.uploads.length);
        if (!availableSlots) return;
        const uploadSeed = Date.now();
        files.slice(0, availableSlots).forEach((file, index) => {
          state.uploads.push({
            id: `custom-${uploadSeed}-${index}`,
            file,
            url: URL.createObjectURL(file),
            name: file.name,
          });
        });
        state.activeUploadIndex = Math.max(0, Math.min(state.activeUploadIndex, state.uploads.length - 1));
        render();
        return;
      }
      const file = files[0];
      const prev = state.uploads[slotIndex];
      if (prev?.url?.startsWith('blob:')) URL.revokeObjectURL(prev.url);
      state.uploads[slotIndex] = {
        id: slotIndex,
        file,
        url: URL.createObjectURL(file),
        name: file.name,
      };
      state.activeUploadIndex = slotIndex;
      state.cropZoom = 1;
      state.cropPosition = { x: 0, y: 0 };
      state.cropRotation = 0;
      render();
    }
    function resetCropRotation() {
      state.cropRotation = 0;
      updatePreviewImageStyles();
      const rv = document.getElementById('cropRotationValue');
      if (rv) rv.textContent = '0°';
      const rr = document.getElementById('rotationRange');
      if (rr) rr.value = 0;
    }
    function removeUploadAt(index = 0) {
      const prev = state.uploads[index];
      if (prev?.url?.startsWith('blob:')) URL.revokeObjectURL(prev.url);
      state.uploads.splice(index, 1);
      state.activeUploadIndex = Math.max(0, Math.min(state.activeUploadIndex, state.uploads.length - 1));
      if (!state.uploads.length) {
        state.cropZoom = 1;
        state.cropPosition = { x: 0, y: 0 };
        state.cropRotation = 0;
        state.photoGrayscale = false;
      }
      render();
    }
    function getCropClass() {
      const selectedTemplate = getSelectedTemplate();
      const mode = selectedTemplate?.kind?.includes('polaroid') ? 'portrait' : 'portrait';
      return mode;
    }
    function changeExtraCount(id, delta) {
      const current = extrasCount[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        delete extrasCount[id];
        state.selectedExtras = state.selectedExtras.filter(x => x !== id);
      } else {
        extrasCount[id] = next;
        if (!state.selectedExtras.includes(id)) state.selectedExtras.push(id);
      }
      render();
    }
</script>
