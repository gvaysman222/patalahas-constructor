<div class="modal" id="designerModal">
                <div class="modal-card">
                  <div class="modal-title">Настройки недоступны</div>
                  <div class="modal-text">Для данного вида дизайна настройки конструктора недоступны. Этот дизайн разрабатывается нашим дизайнером.</div>
                  <div class="modal-text">Можно сразу перейти к оформлению заказа, а детали по индивидуальному дизайну уточнить уже в заказе.</div>
                  <div class="modal-actions">
                    <button class="btn" data-close="designerModal" type="button">Закрыть</button>
                    <button class="btn primary" data-go-checkout type="button">Перейти к оформлению</button>
                  </div>
                </div>
              </div>
            
        <div class="modal" id="managerModal">
          <div class="modal-card">
            <div class="modal-title">Срочный заказ за 24 часа</div>
            <div class="modal-text">Для изготовления за 24 часа нужно связаться с менеджером и уточнить загрузку производства.</div>
            <div class="modal-text">Доплата за срочное производство: +800&nbsp;₽.</div>
                  <div class="modal-actions">
                    <button class="btn" data-close="managerModal">Закрыть</button>
                    <button class="btn primary" data-close="managerModal">Связаться с менеджером</button>
            </div>
          </div>
        </div>
      
        <div class="modal" id="resetConfirmModal">
          <div class="modal-card">
            <div class="modal-title">Сделать еще товар?</div>
            <div class="modal-text">Вы уверены? Все текущие изменения будут сброшены, и конструктор вернется на первый шаг.</div>
            <div class="modal-actions">
              <button class="btn" data-close="resetConfirmModal" type="button">Отмена</button>
              <button class="btn primary" data-confirm-reset type="button">Сбросить</button>
            </div>
          </div>
        </div>

        <div class="modal" id="uploadBlockedModal">
          <div class="modal-card">
            <div class="modal-title">Загрузка изображения недоступна</div>
            <div class="modal-text">Сейчас выбран шаблон только с текстом. Чтобы загрузить изображение, сначала выберите шаблон с фото на шаге 2.</div>
            <div class="modal-actions">
              <button class="btn" data-close="uploadBlockedModal" type="button">Понятно</button>
              <button class="btn primary" data-go-step-2-photo type="button">Выбрать шаблон с фото</button>
            </div>
          </div>
        </div>

        <div class="modal" id="restoreProgressModal">
          <div class="modal-card">
            <div class="modal-title">Есть несохраненные изменения</div>
            <div class="modal-text">Мы нашли ваш предыдущий прогресс в конструкторе.</div>
            <div class="modal-text">Можно продолжить с места, где вы остановились, или сбросить все и начать сначала.</div>
            <div class="modal-actions">
              <button class="btn" data-discard-progress type="button">Сбросить</button>
              <button class="btn primary" data-resume-progress type="button">Продолжить</button>
            </div>
          </div>
        </div>

              <div class="page">
                <div class="shell is-loading" style="position:relative;">
                  <div class="shell-loading" id="shellLoadingOverlay" role="status" aria-live="polite" style="position:absolute;inset:0;z-index:30;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:rgba(255,255,255,.96);">
                    <div class="shell-loading-spinner" aria-hidden="true"></div>
                    <div class="shell-loading-text">Загружаем конструктор</div>
                  </div>
                  <div class="header" data-shell-content style="visibility:hidden;">
                    <div class="progress"><div class="progress-bar" id="progressBar"></div></div>
                    <div class="step-list" id="stepList"></div>
                  </div>
            
                  <div class="layout" data-shell-content style="visibility:hidden;">
                    <main class="center">
                      <div class="sticky">
                        <div class="preview-card">
                          <div class="preview-head">
                            <div>
                              <div class="preview-label">Визуализация изделия</div>
                              <div class="preview-name" id="previewProductName"></div>
                            </div>
                          </div>
                          <div class="preview-stage">
                            <div class="preview-artboard">
                              <div class="garment-wrap" id="garmentWrap">
                                <div class="garment-drop-overlay"><span>Перетащите фото сюда</span></div>
                                <div class="garment" id="garment">
                                  <img class="base-img" id="baseImage" src="" alt="product" decoding="async" loading="eager">
                                  <div class="garment-loading" id="garmentLoadingOverlay" aria-hidden="true">
                                    <div class="garment-loading-badge">
                                      <span class="garment-loading-spinner" aria-hidden="true"></span>
                                      <span class="garment-loading-text">Загружаем цвет</span>
                                    </div>
                                  </div>
                                  <div class="design-layer" id="designLayer"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mobile-step-nav">
                          <button class="mobile-step-arrow prev" id="mobileStepPrev" type="button" aria-label="Предыдущий шаг"></button>
                          <div class="mobile-step-nav-track">
                            <div class="step-list" id="stepListMobile" data-preserve-scroll-key="mobile-steps"></div>
                          </div>
                          <button class="mobile-step-arrow next" id="mobileStepNext" type="button" aria-label="Следующий шаг"></button>
                        </div>
                      </div>
                    </main>
            
                    <aside class="right">
                      <div class="panel fade-in" id="stepPanel"></div>
                      <div class="desktop-actions">
                        <div class="panel-live-price">
                          <div class="price-head">
                            <div class="subhead">Стоимость заказа</div>
                          </div>
                          <div class="stack" style="margin-top:16px; font-size:14px;" id="livePriceRows"></div>
                          <div class="divider price-total"><span>Итого</span><span id="liveTotal"></span></div>
                        </div>
                        <div class="actions">
                          <button class="btn" id="prevBtn">Назад</button>
                          <button class="btn primary" id="nextBtn">Далее</button>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
