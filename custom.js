<!DOCTYPE html>

<html lang="ru">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Constructor Checkout MVP</title>

<!-- constructor-checkout-mvp-tilda-css.html -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Covered+By+Your+Grace&family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap');
:root {
      --bg: #ffffff;
      --text: #111111;
      --muted: #6b7280;
      --line: #e5e7eb;
      --soft: #f8f8f8;
      --soft-2: #f3f4f6;
      --radius: 18px;
      --radius-lg: 24px;
      --shadow: 0 10px 30px rgba(0,0,0,.06);
      --base-image-scale: 1.18;
      --garment-scale: 1;
    }

    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: Inter, system-ui, sans-serif; }
    button, input, select, textarea { font: inherit; }
    textarea { resize: vertical; }
    button { cursor: pointer; }
    img { max-width: 100%; display: block; }

    .t706 .t-input-group_uw,
    .t706 .t-upwidget-container {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: 0 !important;
      border: 0 !important;
      overflow: hidden !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      white-space: nowrap !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    .page {
      min-height: 100vh;
      padding: 32px 20px;
    }

    .shell {
      max-width: 1200px;
      margin: 0 auto;
      border: 1px solid var(--line);
      border-radius: 28px;
      overflow: hidden;
      background: #fff;
      position: relative;
    }

    .shell.is-loading .header,
    .shell.is-loading .layout {
      visibility: hidden;
    }

    .shell-loading {
      position: absolute;
      inset: 0;
      z-index: 30;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      background: rgba(255,255,255,.94);
      backdrop-filter: blur(6px);
    }

    .shell-loading[hidden] {
      display: none;
    }

    .shell-loading-spinner {
      width: 42px;
      height: 42px;
      border-radius: 999px;
      border: 2px solid #e5e7eb;
      border-top-color: #111111;
      animation: shellLoadingSpin .8s linear infinite;
    }

    .shell-loading-text {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: #111111;
    }

    @keyframes shellLoadingSpin {
      to { transform: rotate(360deg); }
    }

    .header {
      padding: 24px;
      border-bottom: 1px solid var(--line);
    }

    .eyebrow {
      font-size: 13px;
      color: var(--muted);
    }

    h1 {
      margin: 8px 0 0;
      font-size: 32px;
      line-height: 1.1;
    }

    .progress {
      margin-top: 18px;
      display: none;
      height: 8px;
      background: #ececec;
      border-radius: 999px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 0;
      background: #111;
      border-radius: 999px;
      transition: width .25s ease;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(360px, 430px);
      align-items: start;
      gap: 28px;
      padding: 18px 20px 24px;
    }

    .center {
      padding: 0;
      display: block;
      min-width: 0;
    }
    .right { padding: 0; min-width: 0; }
    .desktop-actions {
      width: 100%;
      margin-top: 10px;
      flex: 0 0 auto;
    }

    .step-list {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 12px;
      margin-top: 22px;
    }
    .mobile-step-nav,
    .template-choice-mobile-group,
    .product-choice-mobile-group {
      display: none;
    }
    .stack { display: grid; gap: 10px; }

    .step-btn, .chip-btn, .option-btn, .font-btn, .wide-btn, .icon-btn {
      border: 1px solid var(--line);
      background: #fff;
      color: var(--text);
      border-radius: 14px;
      transition: .2s ease;
    }

    .step-btn {
      width: 100%;
      min-height: 42px;
      text-align: center;
      padding: 11px 14px;
      font-size: 13px;
      border-radius: 999px;
      border-color: transparent;
      box-shadow: none;
    }

    .step-btn-content {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 0;
    }

    .step-index { display: none; }

    .step-label {
      min-width: 0;
      flex: 1 1 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .step-btn.active,
    .chip-btn.active,
    .option-btn.active,
    .font-btn.active,
    .wide-btn.active,
    .toggle-card.active,
    .extra-card.active {
      border-color: #111;
      background: #f8f8f8;
    }

    .step-btn.active {
      border-color: transparent;
    }

    .step-btn.disabled {
      opacity: .58;
      border-color: transparent;
    }

    .summary-card,
    .panel,
    .price-card,
    .preview-card,
    .info-card,
    .control-card,
    .modal-card {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 22px;
      box-shadow: var(--shadow);
    }

    .summary-card { margin-top: 20px; padding: 16px; box-shadow: none; }
    .summary-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: #9ca3af;
    }
    .summary-rows { margin-top: 12px; display: grid; gap: 10px; font-size: 13px; }
    .row { display: flex; justify-content: space-between; gap: 10px; align-items: flex-start; }
    .row .label { color: var(--muted); }
    .row span:last-child { text-align: right; word-break: break-word; }

    .sticky {
      position: sticky;
      top: 16px;
      width: 100%;
      max-width: 100%;
    }

    .preview-card {
      width: 100%;
      padding: 0;
      box-shadow: none;
      border: none;
      background: transparent;
    }
    .preview-head {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
      text-align: left;
      align-self: stretch;
    }
    .preview-label { font-size: 13px; text-transform: uppercase; letter-spacing: .22em; color: #9ca3af; }
    .preview-name { margin-top: 8px; font-size: 18px; font-weight: 600; }
    .preview-stage {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 680px;
      padding: 0;
    }

    .preview-artboard {
      width: 100%;
      min-height: 680px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .garment-wrap {
      position: relative;
      width: min(100%, 860px);
      aspect-ratio: 4 / 5;
      border: none;
      border-radius: 0;
      overflow: hidden;
      background: transparent;
    }

    .garment {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .base-img{
      position:absolute;
      left:50%;
      top:50%;
      width:100%;
      height:100%;
      object-fit:contain;
      object-position:center center;
      transform: translate(-50%, -50%) scale(var(--base-image-scale));
      transform-origin: center center;
      transition: opacity .18s ease;
      will-change: opacity, transform;
    }

    .garment.is-base-loading .base-img {
      opacity: .38;
    }

    .design-layer {
      position: absolute;
      inset: 0;
      z-index: 5;
      pointer-events: none;
    }

    .garment-loading {
      position: absolute;
      inset: 0;
      z-index: 8;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity .18s ease;
    }

    .garment.is-base-loading .garment-loading {
      opacity: 1;
    }

    .garment-loading-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,.92);
      border: 1px solid rgba(17,17,17,.08);
      box-shadow: 0 8px 24px rgba(0,0,0,.08);
      backdrop-filter: blur(8px);
    }

    .garment-loading-spinner {
      width: 18px;
      height: 18px;
      border-radius: 999px;
      border: 2px solid rgba(17,17,17,.16);
      border-top-color: #111111;
      animation: shellLoadingSpin .8s linear infinite;
      flex: 0 0 18px;
    }

    .garment-loading-text {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: #111111;
      white-space: nowrap;
    }
    .checkout-preview-flat {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: none;
      z-index: 7;
      pointer-events: none;
      user-select: none;
      -webkit-user-drag: none;
    }

    .garment-wrap.editable {
      cursor: grab;
      touch-action: none;
      user-select: none;
    }
    .garment-wrap.editable.dragging-photo {
      cursor: grabbing;
    }
    .garment-wrap.upload-hint {
      cursor: pointer;
    }

    .garment-drop-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      background: rgba(255,255,255,.85);
      border: 2px dashed #111;
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s ease;
    }
    .garment-wrap.drop-hover .garment-drop-overlay {
      opacity: 1;
    }
    .garment-drop-overlay span {
      font-size: 14px;
      font-weight: 600;
      color: #111;
      padding: 10px 20px;
      border-radius: 999px;
      background: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,.08);
    }

    .custom-mark {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 64px;
      height: 64px;
      transform: translate(-50%, -50%);
      border-radius: 999px;
      border: 2px solid #111;
    }

    .emb-block {
      position: absolute;
      left: 50%;
      width: min(72%, var(--preview-text-max-width, 190px));
      max-width: var(--preview-text-max-width, 190px);
      transform: translateX(-50%) scale(var(--print-scale, 1));
      transform-origin: center;
      text-align: center;
      color: var(--text-color, #111);
      top: var(--preview-text-top, 38%);
      font-weight: var(--preview-text-font-weight, 600);
      font-size: 16px;
      line-height: var(--preview-text-line-height, 1.15);
      letter-spacing: var(--preview-text-letter-spacing, .12em);
      text-transform: var(--preview-text-transform, uppercase);
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
      overflow: hidden;
    }
    .emb-block.left {
      left: 25%;
      right: 18%;
      width: auto;
      max-width: 170px;
      transform: scale(var(--print-scale, 1));
      text-align: left;
      top: 28%;
    }
    .emb-block.with-upload { top: 61%; }

    .image-box {
      position: absolute;
      left: 50%;
      top: 29%;
      transform: translateX(-50%);
      width: 40%;
      height: 28%;
      overflow: hidden;
      border-radius: 14px;
      border: 1px solid rgba(0,0,0,.08);
      background: rgba(255,255,255,.4);
    }

    .crop-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      -webkit-user-drag: none;
      transform-origin: center;
      pointer-events: none;
    }

    .polaroid-wrap {
      position: absolute;
      left: 50%;
      top: 47%;
      transform: translate(-50%, -50%) scale(var(--print-scale,1)) rotate(var(--tilt,0deg));
      transform-origin: center;
      text-align: center;
      color: var(--text-color, #111);
      width: 132px;
    }

    .polaroid-text {
      margin: 0 auto;
      max-width: 96px;
      font-size: 12px;
      line-height: 1.15;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .14em;
      overflow-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .polaroid-frame {
      margin-top: 8px;
      border: 1px solid #d1d5db;
      background: #fff;
      border-radius: 8px;
      padding: 8px;
      box-shadow: 0 6px 18px rgba(0,0,0,.08);
    }

    .polaroid-photo {
      width: 96px;
      height: 120px;
      border-radius: 4px;
      overflow: hidden;
      margin: 0 auto;
      background: #f3f4f6;
    }

    .polaroid-gap { height: 24px; }
    .polaroid-label {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .18em;
    }

    .fade-in { animation: fadeIn .25s ease; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .panel { padding: 18px; min-width: 0; border-radius: 26px; }
    .panel-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 18px;
    }
    .panel-step {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: #9ca3af;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .panel-step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: var(--soft);
      color: var(--text);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .14em;
    }
    .panel-title {
      margin-top: 6px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.05;
    }
    .panel-price {
      border: 1px solid var(--line);
      background: #f9fafb;
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }

    .section { display: grid; gap: 18px; }
    .section + .section { margin-top: 28px; }
    .field-title { font-size: 14px; color: var(--muted); }
    .subhead { font-size: 14px; font-weight: 600; }
    .subtext { margin-top: 4px; font-size: 12px; color: var(--muted); }

    .grid-2, .grid-3, .grid-6 { display: grid; gap: 6px; }
    .grid-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .grid-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .grid-6 { grid-template-columns: repeat(6, minmax(0,1fr)); }
    .option-btn {
      padding: 12px;
      text-align: left;
      font-size: 14px;
    }
    .template-visual {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 82px;
      margin-bottom: 12px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: linear-gradient(180deg, #fafafa, #f3f4f6);
      overflow: hidden;
    }
    .template-visual svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .option-title { font-weight: 500; }
    .option-meta { margin-top: 8px; color: var(--muted); font-size: 12px; }
    .option-price { margin-top: 12px; color: #111; font-size: 14px; }
    .option-price-note {
      font-size: 12px;
      font-weight: 500;
      color: var(--muted);
    }
    .product-choice-list {
      display: grid;
      gap: 10px;
    }
    .product-choice-card {
      width: 100%;
    }
    .product-choice-visual {
      width: 100%;
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: linear-gradient(180deg, #fcfcfc 0%, #f3f4f6 100%);
      overflow: hidden;
    }
    .product-choice-visual img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .product-choice-copy {
      display: grid;
      gap: 4px;
    }
    .product-choice-title {
      font-size: 14px;
      line-height: 1.2;
      font-weight: 600;
    }
    .product-choice-price {
      font-size: 12px;
      font-weight: 600;
      color: #111;
    }
    .template-choice-group {
      display: grid;
      gap: 12px;
    }
    .template-choice-list {
      display: grid;
      gap: 10px;
    }
    .template-choice-card {
      width: 100%;
      min-height: 92px;
      display: grid;
      grid-template-columns: 68px minmax(0, 1fr) auto;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      border-radius: 24px;
      border-color: rgba(17, 17, 17, 0.38);
      box-shadow: none;
      background: #fff;
    }
    .template-choice-card:hover {
      transform: translateY(-1px);
      border-color: #111;
    }
    .template-choice-card.active {
      border-color: #111;
      background: #f8f8f8;
    }
    .template-choice-icon {
      width: 68px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      background: linear-gradient(180deg, #fcfcfc 0%, #f3f4f6 100%);
      border: 1px solid var(--line);
      overflow: hidden;
    }
    .template-choice-icon-slot {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
    .template-choice-icon-slot svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .template-choice-icon-placeholder {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 1px dashed #cfd4dc;
      border-radius: 12px;
      color: #9ca3af;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .18em;
      text-transform: uppercase;
      background: rgba(255,255,255,.72);
    }
    .template-choice-copy {
      min-width: 0;
      display: grid;
      gap: 4px;
    }
    .template-choice-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: .02em;
      text-transform: uppercase;
      word-break: normal;
      overflow-wrap: normal;
      hyphens: none;
    }
    .template-choice-meta {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.3;
    }
    .template-choice-price {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      justify-self: end;
      padding-left: 10px;
      color: #111;
      font-size: 15px;
      font-weight: 700;
      white-space: nowrap;
    }
    .template-choice-price-mark {
      font-size: 20px;
      line-height: 1;
      font-weight: 500;
    }

    .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .step-1-color-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 16px;
      align-items: start;
    }
    .step-1-meta-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
      align-items: start;
    }
    .step-1-size-block {
      min-width: 0;
    }
    .step-1-color-block {
      min-width: 0;
    }
    .text-color-block {
      min-width: 0;
      padding-left: 10px;
    }
    .text-color-block .color-row {
      gap: 8px;
    }
    .step-1-seam-block .color-row {
      flex-wrap: nowrap;
      gap: 8px;
    }
    .upload-reference-card {
      display: grid;
      gap: 6px;
    }
    .upload-reference-card .subhead {
      margin: 0;
    }
    .upload-reference-visual {
      position: relative;
      width: 100%;
    }
    .upload-reference-image {
      display: block;
      width: 100%;
      height: auto;
      max-height: 320px;
      object-fit: contain;
      border-radius: 0;
      background: transparent;
      border: none;
    }
    .upload-remove-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 32px;
      height: 32px;
      border-radius: 999px;
      border: 1px solid rgba(17, 17, 17, 0.14);
      background: rgba(255, 255, 255, 0.92);
      color: #111;
      font-size: 20px;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,.08);
    }
    .custom-upload-shell {
      display: grid;
      gap: 14px;
    }
    .custom-upload-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }
    .custom-upload-head .subhead {
      margin: 0;
    }
    .custom-upload-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 52px;
      padding: 7px 12px;
      border-radius: 999px;
      border: 1px solid var(--line);
      background: var(--soft);
      color: var(--text);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .08em;
      white-space: nowrap;
    }
    .custom-upload-trigger {
      position: relative;
      overflow: hidden;
      width: 100%;
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 14px;
      align-items: center;
      padding: 16px 18px;
      border-radius: 22px;
      border: 1px solid rgba(17, 17, 17, 0.12);
      background:
        radial-gradient(circle at top left, rgba(17,17,17,.03), transparent 44%),
        linear-gradient(180deg, #ffffff 0%, #f6f7f8 100%);
      cursor: pointer;
      transition: .2s ease;
      box-shadow: 0 10px 24px rgba(17,17,17,.06);
    }
    .custom-upload-trigger:hover {
      transform: translateY(-1px);
      border-color: rgba(17, 17, 17, 0.28);
      box-shadow: 0 14px 28px rgba(17,17,17,.08);
    }
    .custom-upload-trigger.disabled {
      cursor: default;
      opacity: .68;
      transform: none;
      box-shadow: none;
    }
    .custom-upload-camera {
      width: 56px;
      height: 56px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      background: #111;
      color: #fff;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
      flex: 0 0 auto;
    }
    .custom-upload-camera svg {
      width: 26px;
      height: 26px;
      display: block;
    }
    .custom-upload-trigger-copy {
      min-width: 0;
      display: grid;
      gap: 4px;
    }
    .custom-upload-trigger-title {
      font-size: 15px;
      font-weight: 700;
      line-height: 1.15;
    }
    .custom-upload-trigger-text {
      font-size: 12px;
      line-height: 1.35;
      color: var(--muted);
    }
    .custom-upload-gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }
    .custom-upload-card {
      position: relative;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      border-radius: 20px;
      border: 1px solid rgba(17, 17, 17, 0.08);
      background: linear-gradient(180deg, #f8f8f8 0%, #eceff2 100%);
      box-shadow: 0 8px 18px rgba(17,17,17,.06);
    }
    .custom-upload-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .custom-upload-delete {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 34px;
      height: 34px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.18);
      background: rgba(17, 17, 17, 0.76);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 1;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 20px rgba(0,0,0,.18);
    }
    .custom-upload-caption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 28px 12px 10px;
      background: linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,.76) 100%);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .custom-upload-hint {
      font-size: 12px;
      line-height: 1.4;
      color: var(--muted);
    }
    .phrase-dropdown {
      margin-top: 12px;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: #fff;
      overflow: hidden;
    }
    .phrase-dropdown summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 14px;
      list-style: none;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--text);
      user-select: none;
    }
    .phrase-dropdown summary::-webkit-details-marker {
      display: none;
    }
    .phrase-dropdown summary::after {
      content: '+';
      flex: 0 0 auto;
      font-size: 18px;
      line-height: 1;
      color: var(--muted);
    }
    .phrase-dropdown[open] summary::after {
      content: '−';
    }
    .phrase-dropdown-content {
      padding: 0 14px 14px;
    }
    .phrase-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      width: 100%;
    }
    .phrase-chip {
      flex: 0 1 auto;
      max-width: 100%;
      padding: 7px 9px;
      border-radius: 999px;
      font-size: 10px;
      line-height: 1;
      letter-spacing: .06em;
      text-transform: uppercase;
      white-space: normal;
      word-break: break-word;
    }
    .chip-btn {
      padding: 10px 14px;
      border-radius: 12px;
      background: #fff;
      font-size: 14px;
    }

    .color-row { display: flex; flex-wrap: wrap; gap: 10px; }
    .swatch {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      border: 1px solid #d1d5db;
      padding: 4px;
      background: #fff;
      transition: .2s ease;
    }
    .swatch.active { transform: scale(1.08); border-color: #111; }
    .swatch.disabled {
      opacity: .35;
      cursor: not-allowed;
      filter: grayscale(1);
    }
    .swatch span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }

    .upload-drop {
      position: relative;
      overflow: hidden;
      border: 1px dashed #d1d5db;
      border-radius: 18px;
      padding: 40px 20px;
      text-align: center;
      background: #fff;
    }

    .upload-grid {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(240px, 280px);
      align-items: start;
      gap: 16px;
    }

    .upload-card, .control-card, .info-card {
      padding: 14px;
      box-shadow: none;
      border-radius: 18px;
    }

    .crop-stage {
      position: relative;
      overflow: hidden;
      border-radius: 14px;
      border: 1px solid var(--line);
      background: #f9fafb;
      touch-action: none;
      cursor: grab;
      user-select: none;
      min-height: 260px;
    }
    .crop-stage.dragging { cursor: grabbing; }
    .crop-stage.portrait { aspect-ratio: 3 / 4; }
    .crop-stage.square { aspect-ratio: 1 / 1; }
    .crop-stage.landscape { aspect-ratio: 4 / 3; }

    .upload-meta {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 14px;
      color: var(--muted);
    }
    .upload-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .range-head {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      font-size: 14px;
    }
    input[type="range"] { width: 100%; margin-top: 12px; }

    .text-input {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 14px;
      padding: 14px 14px;
      outline: none;
    }
    .text-input:focus { border-color: #111; }
    .text-input--multiline {
      min-height: 132px;
      line-height: 1.45;
      resize: vertical;
    }
    .text-input-meta {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      font-size: 12px;
      color: var(--muted);
    }
    .text-overflow-hint {
      margin-top: 8px;
      font-size: 12px;
      color: #b45309;
    }
    .select-wrap {
      position: relative;
      margin-top: 12px;
    }
    .select-wrap::after {
      content: '⌄';
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-52%);
      color: var(--muted);
      font-size: 18px;
      line-height: 1;
      pointer-events: none;
    }
    .font-select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: #fff;
      color: var(--text);
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      padding-right: 42px;
    }
    .font-dropdown {
      margin-top: 12px;
      border: 1px solid #d1d5db;
      border-radius: 14px;
      background: #fff;
      overflow: hidden;
    }
    .font-dropdown summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px;
      list-style: none;
      cursor: pointer;
      user-select: none;
    }
    .font-dropdown summary::-webkit-details-marker {
      display: none;
    }
    .font-dropdown summary::after {
      content: '';
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-right: 1.5px solid #6b7280;
      border-bottom: 1.5px solid #6b7280;
      transform: translateY(-2px) rotate(45deg);
      transition: transform .2s ease;
    }
    .font-dropdown[open] summary::after {
      transform: translateY(2px) rotate(-135deg);
    }
    .font-dropdown-label {
      min-width: 0;
      font-size: 14px;
      color: var(--text);
    }
    .font-dropdown-content {
      display: grid;
      gap: 6px;
      padding: 8px 8px 8px;
      border-top: 1px solid #f3f4f6;
    }
    .font-option-btn {
      width: 100%;
    }
    .font-option-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
    .font-option-title {
      display: block;
      font-size: 14px;
      color: var(--text);
    }
    .font-option-note {
      display: block;
      font-size: 11px;
      line-height: 1.35;
      color: var(--muted);
      white-space: normal;
    }
    .font-meta,
    .font-warning {
      margin-top: 8px;
      font-size: 12px;
      line-height: 1.4;
    }
    .font-meta {
      color: var(--muted);
    }
    .font-warning {
      color: #b45309;
    }
    .phrase-dropdown,
    .font-dropdown,
    .size-dropdown {
      margin-top: 12px;
      border: 1px solid #d1d5db;
      border-radius: 14px;
      background: #fff;
      overflow: hidden;
    }
    .phrase-dropdown summary,
    .font-dropdown summary,
    .size-dropdown summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px;
      list-style: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
      user-select: none;
    }
    .phrase-dropdown summary::-webkit-details-marker,
    .font-dropdown summary::-webkit-details-marker,
    .size-dropdown summary::-webkit-details-marker {
      display: none;
    }
    .phrase-dropdown summary::after,
    .font-dropdown summary::after,
    .size-dropdown summary::after {
      content: '';
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-right: 1.5px solid #6b7280;
      border-bottom: 1.5px solid #6b7280;
      transform: translateY(-2px) rotate(45deg);
      transition: transform .22s ease;
    }
    .phrase-dropdown[open] summary::after,
    .font-dropdown[open] summary::after,
    .size-dropdown[open] summary::after {
      transform: translateY(2px) rotate(-135deg);
    }
    .dropdown-panel {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows .24s ease;
    }
    .phrase-dropdown[open] .dropdown-panel,
    .font-dropdown[open] .dropdown-panel,
    .size-dropdown[open] .dropdown-panel {
      grid-template-rows: 1fr;
    }
    .dropdown-panel-inner {
      min-height: 0;
      overflow: hidden;
      border-top: 1px solid transparent;
      transition: padding .24s ease, border-color .24s ease;
    }
    .phrase-dropdown .dropdown-panel-inner {
      padding: 0 14px;
    }
    .font-dropdown .dropdown-panel-inner,
    .size-dropdown .dropdown-panel-inner {
      display: grid;
      gap: 6px;
      padding: 0 8px;
    }
    .dropdown-toggle {
      width: 100%;
      border: 0;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px;
      cursor: pointer;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
    }
    .dropdown-toggle::after {
      content: '';
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-right: 1.5px solid #6b7280;
      border-bottom: 1.5px solid #6b7280;
      transform: translateY(-2px) rotate(45deg);
      transition: transform .22s ease;
    }
    .phrase-dropdown.open > .dropdown-toggle::after,
    .font-dropdown.open > .dropdown-toggle::after,
    .size-dropdown.open > .dropdown-toggle::after {
      transform: translateY(2px) rotate(-135deg);
    }
    .phrase-dropdown[open] .dropdown-panel-inner {
      padding: 10px 14px 14px;
      border-top-color: #f3f4f6;
    }
    .font-dropdown[open] .dropdown-panel-inner,
    .size-dropdown[open] .dropdown-panel-inner {
      padding: 8px;
      border-top-color: #f3f4f6;
    }
    .phrase-dropdown.open .dropdown-panel-inner {
      padding: 10px 14px 14px;
      border-top-color: #f3f4f6;
    }
    .font-dropdown.open .dropdown-panel-inner,
    .size-dropdown.open .dropdown-panel-inner {
      padding: 8px;
      border-top-color: #f3f4f6;
    }
    .phrase-dropdown.open .dropdown-panel,
    .font-dropdown.open .dropdown-panel,
    .size-dropdown.open .dropdown-panel {
      grid-template-rows: 1fr;
    }

    .font-list { display: grid; gap: 10px; }
    .font-btn, .wide-btn {
      padding: 12px 14px;
      text-align: left;
      background: #fff;
    }
    .wide-btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .wide-btn-meta {
      font-size: 12px;
      color: var(--muted);
      text-align: right;
    }

    .toggle-card, .extra-card {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 16px;
      background: #fff;
      transition: .2s ease;
    }
    .production-card {
      border-color: #d7d3ff;
      background: linear-gradient(180deg, #faf8ff 0%, #f4f0ff 100%);
      box-shadow: 0 12px 32px rgba(124, 58, 237, .08);
    }
    .production-card .subhead {
      color: #4c1d95;
    }
    .production-card .toggle-card {
      border-color: #d7d3ff;
      background: rgba(255,255,255,.9);
    }
    .production-card .toggle-card.active {
      border-color: #7c3aed;
      background: #ede9fe;
    }
    .production-card .toggle-card:hover {
      border-color: #a78bfa;
      background: #f5f3ff;
    }
    .toggle-card,
    .extra-card,
    .split-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .switch {
      position: relative;
      width: 56px;
      min-width: 56px;
      height: 32px;
      border-radius: 999px;
      background: #e5e7eb;
      border: none;
      padding: 0;
      flex: 0 0 56px;
      flex-shrink: 0;
    }
    .switch.active { background: #111; }
    .switch-knob {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #fff;
      transition: .2s ease;
    }
    .switch.active .switch-knob { left: 28px; }

    .muted-box {
      border-radius: 14px;
      background: #f9fafb;
      padding: 12px 14px;
      color: var(--muted);
      font-size: 14px;
    }
    .form-grid {
      display: grid;
      gap: 12px;
    }
    .form-input,
    .form-textarea {
      width: 100%;
      color: #000;
      border: 1px solid #000;
      background: #fff;
      font-size: 16px;
      font-weight: 400;
      border-radius: 14px;
      padding: 0 16px;
    }
    .form-input {
      height: 50px;
    }
    .form-textarea {
      min-height: 110px;
      padding: 14px 16px;
    }
    .check-list {
      display: grid;
      gap: 10px;
    }
    .check-row {
      display: grid;
      grid-template-columns: 18px 1fr;
      gap: 10px;
      align-items: start;
      font-size: 13px;
      color: var(--muted);
    }
    .check-row input {
      margin: 2px 0 0;
      width: 16px;
      height: 16px;
    }
    .checkout-contacts-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      border: none;
      box-shadow: none;
      background: transparent;
      border-radius: 0;
    }
    .checkout-contacts-body {
      flex: 1 1 auto;
      min-height: 0;
      margin-top: 12px;
      overflow: visible;
    }
    .checkout-contacts-form {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }
    .checkout-span-2 {
      grid-column: 1 / -1;
    }
    .checkout-contacts-form .form-input,
    .checkout-contacts-form .form-textarea {
      font-size: 15px;
      border-radius: 12px;
    }
    .checkout-contacts-form .form-input {
      height: 44px;
      padding: 0 14px;
    }
    .checkout-contacts-form .form-textarea {
      min-height: 68px;
      padding: 12px 14px;
    }
    .checkout-contacts-form .check-list {
      gap: 8px;
    }
    .checkout-contacts-form .check-row {
      gap: 8px;
      font-size: 12px;
      line-height: 1.35;
    }
    .checkout-contacts-card .checkout-stage-actions {
      margin-top: 12px;
      flex-shrink: 0;
    }

    .embroidery-card {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 14px;
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 16px;
      background: #fff;
    }

    .embroidery-meta {
      margin-top: 10px;
      display: grid;
      gap: 6px;
      font-size: 13px;
      color: var(--muted);
    }

    .embroidery-meta strong {
      color: var(--text);
      font-weight: 600;
    }
    .customization-note {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 16px;
      background: #fff;
    }
    .customization-note-grid {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px 14px;
    }
    .customization-note-grid span {
      display: block;
      font-size: 12px;
      color: var(--muted);
    }
    .customization-note-grid strong {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: var(--text);
    }

    .actions {
      margin-top: 6px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      width: 100%;
      max-width: 100%;
    }

.btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      width: 100%;
      min-width: 0;
      border-radius: 18px;
      border: 1px solid #d1d5db;
      background: #fff;
      font-size: 15px;
      font-weight: 500;
      padding: 0 20px;
      transition: .2s ease;
      text-decoration: none;
    }
    .btn:hover { background: #f8f8f8; }
    .btn.primary {
      background: #111;
      color: #fff;
      border-color: #111;
    }
    .btn.primary,
    .btn.primary:link,
    .btn.primary:visited,
    .btn.primary:hover,
    .btn.primary:active,
    a.btn.primary,
    a.btn.primary:link,
    a.btn.primary:visited,
    a.btn.primary:hover,
    a.btn.primary:active,
    .checkout-stage-actions .btn.primary,
    .checkout-stage-actions a.btn.primary {
      color: #fff !important;
    }
    .btn.primary:hover { opacity: .92; background: #111; }

    .price-card {
      margin-top: 18px;
      padding: 16px;
    }

    .desktop-actions {
      display: grid;
      gap: 18px;
    }

    .panel-live-price {
      display: none;
      padding: 16px 18px;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: #fff;
      box-shadow: var(--shadow);
    }
    .price-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .price-live { font-size: 12px; color: #9ca3af; }
    .divider {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
    }
    .price-total {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 18px;
      font-weight: 700;
    }

    .modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.42);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 100;
    }
    .modal.open { display: flex; }
    .modal-card {
      width: 100%;
      max-width: 420px;
      padding: 24px;
    }
    .modal-title { font-size: 24px; font-weight: 600; }
    .modal-text { margin-top: 12px; font-size: 14px; line-height: 1.55; color: var(--muted); }
    .modal-actions {
      margin-top: 22px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .hidden-input {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
      font-size: 0;
    }

    .hidden-input:disabled {
      cursor: default;
    }


    .shell.standard-steps-mode .layout {
      align-items: start;
    }
    .shell.standard-steps-mode {
      --base-image-scale: 1.12;
    }
    .shell.standard-steps-mode .center {
      padding-inline: 18px;
    }
    .shell.standard-steps-mode .right {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: flex-start;
    }
    .shell.standard-steps-mode .sticky {
      width: 100%;
      max-width: none;
    }
    .shell.standard-steps-mode .preview-card {
      padding: 20px 24px 0;
      display: flex;
      flex-direction: column;
    }
    .shell.standard-steps-mode .preview-stage,
    .shell.standard-steps-mode .preview-artboard {
      width: 100%;
      min-height: 0;
      flex: 0 0 auto;
    }
    .shell.standard-steps-mode .garment-wrap {
      height: clamp(410px, 48vh, 470px);
      width: auto;
      max-width: 100%;
    }
    .shell.standard-steps-mode .panel {
      width: 100%;
      max-width: 520px;
      height: clamp(470px, 58vh, 540px);
      padding: 22px;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    .shell.standard-steps-mode #stepContent {
      flex: 1 1 auto;
      min-height: 0;
      overflow-y: auto;
      padding-right: 6px;
      scrollbar-gutter: stable;
    }
    .shell.standard-steps-mode .desktop-actions {
      width: 100%;
      max-width: 520px;
      margin-top: 0;
    }
    .shell.step-1-mode #stepContent > .section {
      gap: 14px;
    }
    .shell.step-1-mode #stepContent .section + .section {
      margin-top: 18px;
    }
    .shell.step-1-mode #stepContent .subtext {
      margin-top: 2px;
      line-height: 1.35;
    }
    .shell.step-1-mode #stepContent .color-row {
      gap: 8px;
    }
    .shell.step-1-mode #stepContent .step-1-color-row {
      gap: 14px;
    }
    .shell.step-1-mode #stepContent .step-1-color-block {
      padding-left: 10px;
    }
    .shell.step-1-mode #stepContent .step-1-meta-row {
      gap: 0;
    }

    .shell.step-6-mode {
      max-width: 1200px;
      --base-image-scale: 1.12;
    }
    .shell.step-6-mode .layout {
      grid-template-columns: minmax(320px, 400px) minmax(0, 1fr);
      align-items: start;
      gap: 28px;
      padding: 24px 28px 30px;
    }
    .shell.step-6-mode .center {
      padding: 10px 0 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .shell.step-6-mode .right {
      display: block;
      padding: 0;
    }
    .shell.step-6-mode .panel-price {
      margin-top: 8px;
    }
    .shell.step-6-mode .desktop-actions .actions {
      display: none;
    }
    .shell.step-6-mode .sticky {
      width: 100%;
      max-width: 400px;
    }
    .shell.step-6-mode .preview-card {
      padding: 0;
      max-width: 400px;
    }
    .shell.step-6-mode .preview-stage,
    .shell.step-6-mode .preview-artboard {
      width: 100%;
      min-height: auto;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    .shell.step-6-mode .garment-wrap {
      height: clamp(410px, 48vh, 470px);
      width: auto;
      max-width: 100%;
    }
    .shell.step-6-mode .panel {
      width: 100%;
      max-width: none;
      height: auto;
      min-height: 0;
      padding: 16px 16px 18px;
      border-radius: 26px;
    }
    .shell.step-6-mode #stepContent {
      overflow: visible;
      padding-right: 0;
    }
    .shell.step-6-mode .desktop-actions {
      width: 100%;
      max-width: none;
      margin-top: 0;
    }
    .shell.step-6-mode .panel-head {
      margin-bottom: 14px;
    }
    .shell.step-6-mode .preview-head {
      margin-bottom: 12px;
    }
    .shell.step-6-mode .preview-label {
      font-size: 11px;
      letter-spacing: .18em;
    }
    .shell.step-6-mode .preview-name {
      margin-top: 4px;
      font-size: 16px;
    }
    .shell.step-6-mode .checkout-stage {
      margin-top: 16px;
      height: auto;
    }
    .shell.step-6-mode .checkout-badges {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }
    .shell.step-6-mode .checkout-badge {
      min-height: 90px;
    }
    .checkout-flow-note {
      padding: 0;
      background: transparent;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
    .checkout-flow-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
    }
    .checkout-flow-total {
      border: 1px solid var(--line);
      background: #f9fafb;
      border-radius: 999px;
      padding: 10px 14px;
      font-weight: 700;
      white-space: nowrap;
    }
    .checkout-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
    }
    .checkout-tab {
      border: 1px solid var(--line);
      background: #fff;
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 14px;
      transition: .2s ease;
    }
    .checkout-tab.active {
      border-color: #111;
      background: #111;
      color: #fff;
    }
    .checkout-stage {
      margin-top: 18px;
      height: var(--checkout-stage-height, auto);
    }
    .checkout-review-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 16px;
      align-items: stretch;
    }
    .checkout-review-grid > .info-card {
      display: flex;
      flex-direction: column;
    }
    .checkout-stage-actions {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 12px;
    }
    .checkout-stage-actions .btn {
      flex: 1 1 0;
      min-width: 0;
    }
    .checkout-price-card {
      position: sticky;
      top: 24px;
    }
    .checkout-mini-note {
      margin-top: 12px;
      font-size: 12px;
      color: var(--muted);
      line-height: 1.5;
    }
    .btn[disabled] {
      opacity: .5;
      cursor: not-allowed;
    }
    .checkout-badges {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 16px;
    }
    .checkout-flow-note .checkout-badges {
      margin-top: 0;
    }
    .checkout-badge {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 12px 14px;
      background: #fff;
    }
    .checkout-badge-step {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: #9ca3af;
    }
    .checkout-badge-title {
      margin-top: 6px;
      font-size: 14px;
      font-weight: 600;
    }
    .checkout-badge-meta {
      margin-top: 4px;
      font-size: 12px;
      color: var(--muted);
    }
    .checkout-badge.active {
      border-color: #111;
      background: #111;
      color: #fff;
    }
    .checkout-badge.active .checkout-badge-step,
    .checkout-badge.active .checkout-badge-meta {
      color: rgba(255,255,255,.72);
    }
    .checkout-badge.done {
      border-color: #c7f0d3;
      background: #f4fff7;
    }
    .checkout-inline-status {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 10px;
      border-radius: 999px;
      font-size: 12px;
      border: 1px solid var(--line);
      background: #fff;
      color: var(--muted);
    }
    .status-pill.ok {
      border-color: #c7f0d3;
      background: #f4fff7;
      color: #166534;
    }
    .status-pill.warn {
      border-color: #fde68a;
      background: #fffbeb;
      color: #92400e;
    }
    .checkout-link-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
    }
    .checkout-link-btn {
      border: 1px solid var(--line);
      background: #fff;
      border-radius: 999px;
      padding: 9px 12px;
      font-size: 13px;
      color: var(--text);
    }
    .checkout-section-note {
      margin-top: 12px;
      padding: 12px 14px;
      border-radius: 14px;
      background: #f9fafb;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.5;
    }
    .checkout-mobile-submit {
      position: sticky;
      bottom: 10px;
      z-index: 10;
      margin-top: 16px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: rgba(255,255,255,.96);
      box-shadow: 0 10px 30px rgba(0,0,0,.10);
      padding: 12px;
      display: none;
      align-items: center;
      gap: 12px;
      backdrop-filter: blur(10px);
    }
    .checkout-mobile-submit .btn {
      flex: 1;
      min-width: 0;
    }
    .checkout-mobile-total {
      min-width: max-content;
      display: grid;
      gap: 2px;
    }
    .checkout-mobile-total span {
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: #9ca3af;
    }
    .checkout-mobile-total strong {
      font-size: 18px;
      line-height: 1;
    }
    @media (max-width: 980px) {
      .shell.step-6-mode .layout {
        grid-template-columns: 1fr;
      }
      .shell.step-6-mode .right {
        order: 1;
      }
      .shell.step-6-mode .center {
        order: 2;
        border-right: none;
        border-top: 1px solid var(--line);
        border-bottom: none;
      }
      .checkout-review-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 640px) {
      .checkout-flow-head {
        flex-direction: column;
        align-items: stretch;
      }
      .checkout-contacts-form {
        grid-template-columns: 1fr;
      }
      .checkout-span-2 {
        grid-column: auto;
      }
      .shell.step-6-mode .panel-price {
        margin-top: 0;
      }
      .checkout-flow-total {
        align-self: flex-start;
      }
      .checkout-stage-actions .btn {
        width: 100%;
      }
      .checkout-badges {
        grid-template-columns: 1fr;
      }
      .checkout-mobile-submit {
        display: flex;
      }
      .checkout-price-card {
        position: static;
      }
    }
    @media (max-width: 1180px) {
      .layout {
        grid-template-columns: minmax(0, 1fr) minmax(340px, 400px);
        gap: 20px;
      }
      .garment-wrap {
        width: min(100%, 780px);
      }
    }

    @media (max-width: 980px) {
      .step-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .layout {
        grid-template-columns: 1fr;
        gap: 22px;
        padding: 16px;
      }
      .center,
      .right {
        padding: 0;
      }
      .desktop-actions {
        margin-top: 0;
        max-width: none;
      }
      .shell.standard-steps-mode .layout {
        height: auto;
      }
      .shell.standard-steps-mode #stepPanel {
        height: auto;
        overflow-y: visible;
      }
      .sticky { position: static; max-width: none; }
      .shell.standard-steps-mode .panel {
        max-width: none;
      }
      .shell.standard-steps-mode .panel {
        padding: 18px;
      }
      .shell.standard-steps-mode #stepContent {
        overflow: visible;
        padding-right: 0;
      }
      .upload-grid { grid-template-columns: 1fr; }
      .grid-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
    }

    @media (max-width: 640px) {
      .page { padding: 14px; }
      .header { padding: 16px; }
      h1 { font-size: 28px; }
      .panel-title { font-size: 22px; }
      .panel-head { flex-direction: column; align-items: flex-start; }
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .grid-6 { grid-template-columns: repeat(4, minmax(0,1fr)); }
      .actions { grid-template-columns: 1fr 1fr; }
      .template-choice-card {
        grid-template-columns: 56px minmax(0, 1fr) auto;
        min-height: 82px;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 20px;
      }
      .template-choice-icon {
        width: 56px;
        height: 56px;
        border-radius: 14px;
      }
      .template-choice-icon-slot {
        padding: 8px;
      }
      .template-choice-title {
        font-size: 14px;
      }
      .template-choice-meta {
        font-size: 11px;
      }
      .template-choice-price {
        gap: 8px;
        padding-left: 0;
        font-size: 13px;
      }
      .template-choice-price-mark {
        font-size: 18px;
      }
      .custom-upload-head {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .custom-upload-gallery {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .custom-upload-trigger {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 14px;
      }
      .custom-upload-camera {
        width: 48px;
        height: 48px;
        border-radius: 14px;
      }
      .custom-upload-trigger-title {
        font-size: 14px;
      }
      .custom-upload-trigger-text,
      .custom-upload-hint {
        font-size: 11px;
      }
      .custom-upload-card {
        border-radius: 16px;
      }
      .preview-label { font-size: 11px; }
      .preview-name { font-size: 16px; }
      .preview-stage,
      .preview-artboard { min-height: auto; }
      .garment-wrap { width: min(100%, 340px); }
      .step-1-color-row,
      .step-1-meta-row { grid-template-columns: 1fr; }
      .step-list {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .page {
        padding: 0;
      }

      .shell {
        max-width: none;
        border: none;
        border-radius: 0;
        box-shadow: none;
      }

      .header {
        padding: 18px 20px 8px;
        border-bottom: none;
      }

      .header .step-list {
        display: none;
      }

      .eyebrow {
        font-size: 11px;
      }

      h1 {
        font-size: 24px;
        line-height: 1.04;
        letter-spacing: -.03em;
      }

      .mobile-step-nav {
        display: grid;
        grid-template-columns: 18px minmax(0, 1fr) 18px;
        align-items: center;
        gap: 4px;
        width: calc(100% + 12px);
        max-width: none;
        min-width: 0;
        margin-inline: -6px;
        padding: 8px 0 0;
      }

      .mobile-step-nav-track {
        width: 100%;
        min-width: 0;
      }

      .step-list {
        display: flex;
        grid-template-columns: none;
        gap: 8px;
        overflow-x: auto;
        margin: 14px -20px 0;
        padding: 0 20px 4px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        scroll-snap-type: x proximity;
      }

      .mobile-step-nav .step-list {
        width: 100%;
        margin: 0;
        padding: 0 0 4px;
      }

      .mobile-step-arrow {
        position: relative;
        width: 18px;
        height: 36px;
        padding: 0;
        border: none;
        background: transparent;
        color: #111111;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .mobile-step-arrow::before {
        content: '';
        width: 9px;
        height: 9px;
        display: block;
        border-top: 1.6px solid currentColor;
        border-right: 1.6px solid currentColor;
      }

      .mobile-step-arrow.prev::before {
        transform: rotate(-135deg);
      }

      .mobile-step-arrow.next::before {
        transform: rotate(45deg);
      }

      .mobile-step-arrow:disabled {
        opacity: .28;
        pointer-events: none;
      }

      .step-list::-webkit-scrollbar {
        display: none;
      }

      .step-btn {
        flex: 0 0 auto;
        width: auto;
        min-width: 116px;
        min-height: 38px;
        padding: 9px 14px;
        font-size: 12px;
        border-radius: 16px;
        border: 1px solid #eceff2;
        background: #fff;
        scroll-snap-align: start;
      }

      .mobile-step-nav .step-btn {
        min-width: 102px;
        min-height: 38px;
        padding: 9px 16px;
        border-radius: 999px;
        border-color: var(--line);
        background: #fff;
      }

      .step-btn.active {
        border-color: #eceff2;
        background: #f5f5f5;
      }

      .mobile-step-nav .step-btn.active {
        border-color: var(--line);
        background: #f5f5f5;
        color: #111111;
      }

      .mobile-step-nav .step-btn.active .step-label {
        color: #111111;
      }

      .mobile-step-nav .step-btn.disabled {
        border-color: var(--line);
      }

      .layout,
      .shell.step-6-mode .layout,
      .shell.standard-steps-mode .layout {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 8px 20px 24px;
        height: auto;
      }

      .center,
      .right,
      .shell.standard-steps-mode .center,
      .shell.standard-steps-mode .right,
      .shell.step-6-mode .center,
      .shell.step-6-mode .right {
        order: initial;
        padding: 0;
      }

      .shell.step-6-mode .center {
        border-top: none;
      }

      .sticky,
      .shell.step-6-mode .sticky {
        position: static;
        width: 100%;
        max-width: none;
        margin: 0 auto;
      }

      .preview-card,
      .shell.standard-steps-mode .preview-card,
      .shell.step-6-mode .preview-card {
        padding: 0;
        max-width: none;
      }

      .preview-head,
      .shell.step-6-mode .preview-head {
        margin-bottom: 8px;
      }

      .preview-label,
      .shell.step-6-mode .preview-label {
        font-size: 11px;
        letter-spacing: .18em;
      }

      .preview-name,
      .shell.step-6-mode .preview-name {
        margin-top: 4px;
        font-size: 18px;
      }

      .preview-stage,
      .preview-artboard,
      .shell.standard-steps-mode .preview-stage,
      .shell.standard-steps-mode .preview-artboard,
      .shell.step-6-mode .preview-stage,
      .shell.step-6-mode .preview-artboard {
        width: min(100%, 340px);
        max-width: 100%;
        min-height: auto;
        height: auto;
        margin: 0 auto;
        justify-content: center;
      }

      .garment-wrap,
      .shell.standard-steps-mode .garment-wrap,
      .shell.step-6-mode .garment-wrap {
        width: 100%;
        max-width: 340px;
        height: auto;
        aspect-ratio: 4 / 5;
        margin: 0 auto;
      }

      .panel,
      .shell.standard-steps-mode .panel,
      .shell.step-6-mode .panel {
        max-width: none;
        height: auto;
        min-height: 0;
        padding: 18px 18px 22px;
        border-radius: 28px;
      }

      .panel-head {
        gap: 14px;
        margin-bottom: 18px;
      }

      .panel-title {
        font-size: 20px;
        line-height: 1.08;
      }

      .panel-price,
      .shell.step-6-mode .panel-price {
        margin-top: 0;
        padding: 10px 14px;
        font-size: 13px;
      }

      .shell.standard-steps-mode #stepContent,
      .shell.step-6-mode #stepContent {
        overflow: visible;
        padding-right: 0;
      }

      .desktop-actions,
      .shell.step-6-mode .desktop-actions {
        gap: 12px;
        max-width: none;
      }

      .desktop-actions .actions {
        display: none !important;
      }

      .actions {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-top: 12px;
      }

      .btn {
        height: 48px;
        border-radius: 16px;
      }

      .template-choice-group {
        display: none;
      }

      .step-1-product-desktop {
        display: none;
      }

      .product-choice-mobile-group {
        display: grid;
        gap: 0;
      }

      .product-choice-list {
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: clamp(84px, 22.5vw, 96px);
        gap: 8px;
        overflow-x: auto;
        padding: 2px 0 8px;
        margin: 0;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .product-choice-list::-webkit-scrollbar {
        display: none;
      }

      .product-choice-card {
        min-height: 0;
        grid-template-columns: 1fr;
        align-items: start;
        align-content: start;
        gap: 10px;
        padding: 0;
        border: none;
        background: transparent;
        box-shadow: none;
        scroll-snap-align: start;
      }

      .product-choice-card:hover,
      .product-choice-card.active {
        transform: none;
        border-color: transparent;
        background: transparent;
      }

      .product-choice-visual {
        border-radius: 12px;
      }

      .product-choice-card.active .product-choice-visual {
        border-color: #111111;
      }

      .product-choice-copy {
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 3px;
        min-width: 0;
        min-height: 38px;
        padding-top: 6px;
        align-content: start;
      }

      .product-choice-title {
        font-size: 11px;
        line-height: 1.15;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .product-choice-note {
        font-size: 9px;
        line-height: 1.15;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .product-choice-note.is-empty {
        visibility: hidden;
      }

      .product-choice-price {
        font-size: 11px;
        font-weight: 600;
      }

      .shell.step-1-mode #stepContent .step-1-color-row {
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 10px;
        align-items: start;
      }

      .shell.step-1-mode #stepContent .step-1-color-block,
      .shell.step-1-mode #stepContent .step-1-seam-block {
        min-width: 0;
        padding-left: 0;
      }

      .shell.step-1-mode #stepContent .step-1-seam-block {
        margin-left: 0;
      }

      .template-choice-mobile-group {
        display: grid;
        gap: 0;
      }

      .template-choice-list {
        grid-template-columns: none;
        grid-auto-flow: column;
        grid-auto-columns: minmax(104px, 29vw);
        gap: 8px;
        overflow-x: auto;
        padding: 2px 0 8px;
        margin: 0;
        scroll-snap-type: x proximity;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .template-choice-list::-webkit-scrollbar {
        display: none;
      }

      .template-choice-card {
        min-height: 0;
        grid-template-columns: 1fr;
        align-items: start;
        align-content: start;
        gap: 8px;
        padding: 8px;
        border-radius: 16px;
        scroll-snap-align: start;
      }

      .template-choice-icon {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        border-radius: 12px;
      }

      .template-choice-icon-slot {
        padding: 8px;
      }

      .template-choice-copy {
        gap: 3px;
      }

      .template-choice-title {
        font-size: 12px;
        line-height: 1.15;
        text-transform: none;
      }

      .template-choice-meta {
        display: none;
      }

      .template-choice-price {
        justify-self: start;
        margin-top: 0;
        gap: 4px;
        padding-left: 0;
        font-size: 11px;
      }

      .template-choice-price-mark {
        display: inline;
        font-size: 14px;
      }

      .template-choice-mobile-group .template-choice-card {
        border: none;
        background: transparent;
        box-shadow: none;
        padding: 0;
        gap: 8px;
      }

      .template-choice-mobile-group .template-choice-card:hover,
      .template-choice-mobile-group .template-choice-card.active {
        transform: none;
        border-color: transparent;
        background: transparent;
      }

      .template-choice-mobile-group .template-choice-icon {
        border-width: 1px;
        border-style: solid;
        border-color: var(--line);
        background: linear-gradient(180deg, #fcfcfc 0%, #f3f4f6 100%);
      }

      .template-choice-mobile-group .template-choice-card.active .template-choice-icon {
        border-color: #111111;
      }

      .template-choice-mobile-group .template-choice-copy {
        gap: 4px;
      }

      .template-choice-mobile-group .template-choice-title {
        font-size: 12px;
        line-height: 1.2;
        font-weight: 600;
      }

      .template-choice-mobile-group .template-choice-price {
        display: flex;
        align-items: center;
        justify-self: start;
        gap: 0;
        font-size: 11px;
        font-weight: 600;
      }

      .template-choice-mobile-group .template-choice-price-mark {
        display: none;
      }

      .checkout-review-grid {
        grid-template-columns: 1fr;
      }

      .shell.step-6-mode .layout {
        gap: 20px;
        padding: 8px 20px 24px;
      }

      .shell.step-6-mode .preview-head {
        margin-bottom: 8px;
      }

      .shell.step-6-mode .preview-name {
        font-size: 18px;
      }

      .shell.step-6-mode .preview-stage,
      .shell.step-6-mode .preview-artboard {
        width: min(100%, 340px);
      }

      .shell.step-6-mode .panel {
        padding: 18px 18px 22px;
        border-radius: 28px;
      }

      .shell.step-6-mode .panel-head {
        gap: 14px;
        margin-bottom: 18px;
      }

      .shell.step-6-mode .panel-title {
        font-size: 20px;
        line-height: 1.08;
      }

      .shell.step-6-mode .panel-price {
        padding: 10px 14px;
        font-size: 13px;
      }

      .shell.step-6-mode #stepContent > .section {
        gap: 12px;
      }

      .shell.step-6-mode .checkout-flow-note {
        margin: 0;
      }

      .shell.step-6-mode .checkout-stage {
        margin-top: 0;
        height: auto !important;
      }

      .shell.step-6-mode .checkout-review-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .shell.step-6-mode .checkout-review-grid > .info-card {
        padding: 16px;
        border-radius: 20px;
        box-shadow: none;
      }

      .shell.step-6-mode .checkout-review-grid .subhead {
        font-size: 18px !important;
        line-height: 1.08;
      }

      .shell.step-6-mode .checkout-review-grid .stack {
        margin-top: 12px !important;
        gap: 10px;
      }

      .shell.step-6-mode .row {
        gap: 14px;
        font-size: 13px;
      }

      .shell.step-6-mode .row span:last-child {
        max-width: 52%;
      }

      .shell.step-6-mode .production-card {
        padding: 16px;
      }

      .shell.step-6-mode .toggle-card {
        padding: 14px;
        border-radius: 18px;
        gap: 10px;
        align-items: flex-start;
      }

      .shell.step-6-mode .toggle-card > div:first-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .shell.step-6-mode .toggle-card > div:last-child {
        flex: 0 0 auto;
      }

      .shell.step-6-mode .toggle-card .subtext {
        font-size: 11px;
        line-height: 1.35;
      }

      .shell.step-6-mode .checkout-inline-status {
        margin-top: 12px;
      }

      .shell.step-6-mode .status-pill {
        max-width: 100%;
        font-size: 11px;
        padding: 7px 10px;
      }

      .shell.step-6-mode .checkout-stage-actions {
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        width: 100%;
      }

      .shell.step-6-mode .checkout-stage-actions .btn {
        width: 100%;
        min-width: 100%;
        flex: none;
        height: 50px;
        border-radius: 16px;
      }
    }
</style>


</head>

<body>

<!-- constructor-checkout-mvp-tilda-body.html -->
<div class="modal" id="designerModal">
                <div class="modal-card">
                  <div class="modal-title">Настройки недоступны</div>
                  <div class="modal-text">Для данного вида дизайна настройки конструктора недоступны. Этот дизайн разрабатывается нашим дизайнером.</div>
                  <div class="modal-text">Давайте свяжемся с ним и обсудим ваш дизайн.</div>
                  <div class="modal-actions">
                    <button class="btn" data-close="designerModal">Закрыть</button>
                    <button class="btn primary" data-close="designerModal">Связаться с дизайнером</button>
                  </div>
                </div>
              </div>
            
        <div class="modal" id="managerModal">
          <div class="modal-card">
            <div class="modal-title">Срочный заказ за 24 часа</div>
            <div class="modal-text">Для изготовления за 24 часа нужно связаться с менеджером и уточнить загрузку производства.</div>
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
            
              <div class="page">
                <div class="shell is-loading" style="position:relative;">
                  <div class="shell-loading" id="shellLoadingOverlay" role="status" aria-live="polite" style="position:absolute;inset:0;z-index:30;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:rgba(255,255,255,.96);">
                    <div class="shell-loading-spinner" aria-hidden="true"></div>
                    <div class="shell-loading-text">Загружаем конструктор</div>
                  </div>
                  <div class="header" data-shell-content style="visibility:hidden;">
                    <div class="eyebrow">Стань дизайнером одежды</div>
                    <h1>Конструктор одежды</h1>
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


<!-- constructor-checkout-mvp-tilda-config.html -->
<script>
(function initConstructorCheckoutTemplateConfig(global) {
  const defaultPrintSizes = [
    { id: 's', name: 'Маленький' },
    { id: 'm', name: 'Средний' },
    { id: 'l', name: 'Большой' },
  ];

  const centerTextPrintSizes = [
    {
      id: 's',
      name: 'Маленький',
      heightLabel: '0,8-1 см',
      maxCharsPerLine: 20,
      maxLines: 5,
      scale: 0.66,
      previewMaxWidth: 320,
      exportFontSize: 34,
      exportLineHeight: 42,
    },
    {
      id: 'm',
      name: 'Средний',
      heightLabel: '1,3-1,5 см',
      maxCharsPerLine: 15,
      maxLines: 5,
      scale: 0.92,
      previewMaxWidth: 300,
      exportFontSize: 42,
      exportLineHeight: 50,
    },
  ];

  const defaultFonts = ['Inter', 'Oswald', 'Cormorant Garamond'];
  const centerEmbroideryFonts = [
    {
      id: 'emb-center-emb-font-1',
      label: 'Шрифт 1',
      family: '"Wix Madefor Display", Inter, system-ui, sans-serif',
    },
    {
      id: 'emb-center-emb-font-2',
      label: 'Шрифт 2',
      family: '"Gooseberry Normal", "Wix Madefor Display", Inter, system-ui, sans-serif',
    },
  ];
  const centerPrintFonts = [
    {
      id: 'emb-center-print-font-1',
      label: 'Шрифт 1',
      family: '"Wix Madefor Display", Inter, system-ui, sans-serif',
    },
    {
      id: 'emb-center-print-font-2',
      label: 'Шрифт 2',
      family: '"Covered By Your Grace", "Comic Sans MS", cursive',
      note: 'Только для латиницы',
      latinOnly: true,
    },
    {
      id: 'emb-center-print-font-3',
      label: 'Шрифт 3',
      family: '"Anjhay", "Times New Roman", serif',
    },
    {
      id: 'emb-center-print-font-4',
      label: 'Шрифт 4',
      family: '"Zhizn Regular", "Trebuchet MS", sans-serif',
    },
    {
      id: 'emb-center-print-font-5',
      label: 'Шрифт 5',
      family: '"Bebas Neue", Impact, sans-serif',
    },
    {
      id: 'emb-center-print-font-6',
      label: 'Шрифт 6',
      family: '"Kom-post Regular", "Arial Narrow", sans-serif',
    },
  ];

  global.CONSTRUCTOR_CHECKOUT_TEMPLATE_CONFIG = {
    templates: [
      { id: 'emb-center', name: 'Текст по центру', uploads: 0, kind: 'emb-center', price: 650 },
      { id: 'emb-left', name: 'Текст слева', uploads: 0, kind: 'emb-left', price: 650 },
      { id: 'polaroid', name: 'Полароид', uploads: 1, kind: 'polaroid', price: 300 },
      { id: 'polaroid-top-text', name: 'Полароид + текст сверху', uploads: 1, kind: 'polaroid-top', price: 1200 },
      { id: 'polaroid-bottom-text', name: 'Полароид + текст снизу', uploads: 1, kind: 'polaroid-bottom', price: 900 },
      { id: 'polaroid-tilt-text', name: 'Полароид + текст под наклоном', uploads: 1, kind: 'polaroid-tilt', price: 1200 },
    ],
    customTemplates: [
      { id: 'custom-1', name: 'Индивидуальный дизайн 1', note: 'Разработка дизайнером', price: 1900 },
      { id: 'custom-2', name: 'Индивидуальный дизайн 2', note: 'Разработка дизайнером', price: 2400 },
      { id: 'custom-3', name: 'Индивидуальный дизайн 3', note: 'Разработка дизайнером', price: 2900 },
    ],
    printColors: [
      '#000000', '#ffffff', '#111827', '#374151', '#6b7280', '#9ca3af',
      '#dc2626', '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6',
      '#2563eb', '#4f46e5', '#7c3aed', '#a855f7', '#ec4899', '#be123c',
    ],
    previewTextPlaceholder: 'Ваш текст',
    printScale: { s: 0.5, m: 0.9, l: 1.25 },
    textApplicationOptions: [
      { id: 'print', name: 'Печать', isEmbroidery: false },
      { id: 'embroidery', name: 'Вышивка', isEmbroidery: true },
    ],
    fontFamilies: {
      Inter: 'Inter, system-ui, sans-serif',
      Oswald: 'Oswald, Arial, sans-serif',
      'Cormorant Garamond': '"Cormorant Garamond", Georgia, serif',
      'emb-center-emb-font-1': '"Wix Madefor Display", Inter, system-ui, sans-serif',
      'emb-center-emb-font-2': '"Gooseberry Normal", "Wix Madefor Display", Inter, system-ui, sans-serif',
      'emb-center-print-font-1': '"Wix Madefor Display", Inter, system-ui, sans-serif',
      'emb-center-print-font-2': '"Covered By Your Grace", "Comic Sans MS", cursive',
      'emb-center-print-font-3': '"Anjhay", "Times New Roman", serif',
      'emb-center-print-font-4': '"Zhizn Regular", "Trebuchet MS", sans-serif',
      'emb-center-print-font-5': '"Bebas Neue", Impact, sans-serif',
      'emb-center-print-font-6': '"Kom-post Regular", "Arial Narrow", sans-serif',
    },
    motivationalPhrases: [
      'CREATE YOUR RHYTHM',
      'STAY ORIGINAL',
      'MAKE IT LOUD',
      'DESIGN YOUR ENERGY',
      'NO RULES — JUST STYLE',
      'OWN YOUR VIBE',
    ],
    defaultPreviewTextRules: {
      maxCharsPerLine: 14,
      maxLines: 3,
      uppercase: true,
      previewMaxWidth: 190,
      exportFontSize: 48,
      exportLineHeight: 56,
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: '.12em',
      previewTop: '38%',
      textTransform: 'uppercase',
    },
    templateTextConfigMap: {
      default: {
        printSizes: defaultPrintSizes,
        fonts: defaultFonts,
        defaultPrintSize: 'm',
        defaultFont: 'Inter',
      },
      'emb-center': {
        printSizes: centerTextPrintSizes,
        fontOptionsByApplication: {
          embroidery: centerEmbroideryFonts,
          print: centerPrintFonts,
        },
        defaultPrintSize: 'm',
        defaultFontByApplication: {
          embroidery: 'emb-center-emb-font-1',
          print: 'emb-center-print-font-1',
        },
        uppercase: false,
        previewMaxWidth: 300,
        lineHeight: 1.12,
        fontWeight: 600,
        letterSpacing: '.08em',
        previewTop: '38%',
        textTransform: 'none',
      },
    },
  };
})(window);
</script>


<!-- constructor-checkout-mvp-tilda-products.html -->
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
</script>


<!-- constructor-checkout-mvp-tilda-js-1.html -->
<script>
    const constructorCheckoutTemplateConfig = window.CONSTRUCTOR_CHECKOUT_TEMPLATE_CONFIG;
    if (!constructorCheckoutTemplateConfig) {
      throw new Error('Load constructor-checkout-mvp-tilda-config.html before constructor-checkout-mvp-tilda-js-1.html');
    }
    if (typeof baseProducts === 'undefined' || typeof productImages === 'undefined' || typeof seamColors === 'undefined') {
      throw new Error('Load constructor-checkout-mvp-tilda-products.html before constructor-checkout-mvp-tilda-js-1.html');
    }
    const {
      templates,
      customTemplates,
      printColors,
      previewTextPlaceholder,
      printScale,
      textApplicationOptions,
      fontFamilies,
      motivationalPhrases,
      defaultPreviewTextRules: DEFAULT_PREVIEW_TEXT_RULES,
      templateTextConfigMap = {},
    } = constructorCheckoutTemplateConfig;
    const defaultTemplateTextConfig = templateTextConfigMap.default || {};
    const printSizes = Array.isArray(defaultTemplateTextConfig.printSizes) ? defaultTemplateTextConfig.printSizes : [];
    const fonts = Array.isArray(defaultTemplateTextConfig.fonts) ? defaultTemplateTextConfig.fonts : [];
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
    function getTemplateTextConfig(template = getSelectedTemplate()) {
      return templateTextConfigMap[template?.id || ''] || null;
    }
    function normalizeFontOption(fontOption, index = 0) {
      if (!fontOption) return null;
      if (typeof fontOption === 'string') {
        return {
          id: fontOption,
          label: fontOption,
          family: fontFamilies[fontOption] || 'Inter, system-ui, sans-serif',
          note: '',
          latinOnly: false,
        };
      }
      return {
        id: fontOption.id || fontOption.value || fontOption.label || `font-option-${index + 1}`,
        label: fontOption.label || fontOption.name || fontOption.id || `Шрифт ${index + 1}`,
        family: fontOption.family || fontFamilies[fontOption.id] || fontFamilies[fontOption.label] || 'Inter, system-ui, sans-serif',
        note: fontOption.note || '',
        latinOnly: Boolean(fontOption.latinOnly),
      };
    }
    function normalizeFontOptions(fontOptions = []) {
      return Array.from(fontOptions || [])
        .map((fontOption, index) => normalizeFontOption(fontOption, index))
        .filter(Boolean);
    }
    function getAvailablePrintSizes(template = getSelectedTemplate()) {
      const templateConfig = getTemplateTextConfig(template);
      return templateConfig?.printSizes || templateConfig?.sizeOptions || printSizes;
    }
    function getDefaultPrintSizeId(template = getSelectedTemplate()) {
      return getTemplateTextConfig(template)?.defaultPrintSize || printSizes[1]?.id || printSizes[0]?.id || 'm';
    }
    function getAvailableFontOptions(template = getSelectedTemplate()) {
      const templateConfig = getTemplateTextConfig(template);
      const fontSource = templateConfig?.fontOptionsByApplication
        ? (state.isEmbroideryText ? templateConfig.fontOptionsByApplication.embroidery : templateConfig.fontOptionsByApplication.print)
        : (templateConfig?.fontOptions || fonts);
      return normalizeFontOptions(fontSource);
    }
    function getDefaultFontName(template = getSelectedTemplate()) {
      const templateConfig = getTemplateTextConfig(template);
      if (templateConfig?.defaultFontByApplication) {
        return state.isEmbroideryText
          ? templateConfig.defaultFontByApplication.embroidery
          : templateConfig.defaultFontByApplication.print;
      }
      return templateConfig?.defaultFont || fonts[0];
    }
    function getSelectedPrintSize(printSizeId = state.printSize, template = getSelectedTemplate()) {
      const availableSizes = getAvailablePrintSizes(template);
      return availableSizes.find((item) => item.id === printSizeId)
        || availableSizes.find((item) => item.id === getDefaultPrintSizeId(template))
        || printSizes.find((item) => item.id === getDefaultPrintSizeId(template))
        || printSizes[1]
        || printSizes[0];
    }
    const getSelectedCustomTemplate = () => customTemplates.find((c) => c.id === state.selectedCustom) || null;
    const getSelectedDesignName = () => getSelectedCustomTemplate()?.name || getSelectedTemplate()?.name || 'Дизайн не выбран';
    const getSelectedDesignPrice = () => getSelectedCustomTemplate()?.price || getSelectedTemplate()?.price || 0;
    function getSelectedFontOption(fontId = state.font, template = getSelectedTemplate()) {
      return getAvailableFontOptions(template).find((fontOption) => fontOption.id === fontId) || null;
    }
    function getFontDisplayName(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.label || String(fontId || '');
    }
    function getFontOptionNote(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.note || '';
    }
    function isFontLatinOnly(fontId = state.font, template = getSelectedTemplate()) {
      return Boolean(getSelectedFontOption(fontId, template)?.latinOnly);
    }
    function textContainsCyrillic(value = state.textValue) {
      return /[\u0400-\u04FF]/.test(String(value || ''));
    }
    const getFontFamily = (fontName) => getSelectedFontOption(fontName)?.family || fontFamilies[fontName] || 'Inter, system-ui, sans-serif';
    function getCurrentPrintScale(printSizeId = state.printSize, template = getSelectedTemplate()) {
      const selectedPrintSize = getSelectedPrintSize(printSizeId, template);
      if (selectedPrintSize?.scale) return selectedPrintSize.scale;
      return printScale[selectedPrintSize?.id || printSizeId] || 1;
    }
    function getPreviewTextRules(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      const config = getTemplateTextConfig(template);
      if (config && printSize) {
        return {
          maxCharsPerLine: Number(printSize.maxCharsPerLine) || 15,
          maxLines: Number(printSize.maxLines) || 5,
          uppercase: Boolean(config.uppercase),
          previewMaxWidth: Number(printSize.previewMaxWidth) || Number(config.previewMaxWidth) || DEFAULT_PREVIEW_TEXT_RULES.previewMaxWidth,
          exportFontSize: Number(printSize.exportFontSize) || DEFAULT_PREVIEW_TEXT_RULES.exportFontSize,
          exportLineHeight: Number(printSize.exportLineHeight) || DEFAULT_PREVIEW_TEXT_RULES.exportLineHeight,
          lineHeight: Number(printSize.lineHeight) || Number(config.lineHeight) || DEFAULT_PREVIEW_TEXT_RULES.lineHeight,
          fontWeight: Number(printSize.fontWeight) || Number(config.fontWeight) || DEFAULT_PREVIEW_TEXT_RULES.fontWeight,
          letterSpacing: printSize.letterSpacing || config.letterSpacing || DEFAULT_PREVIEW_TEXT_RULES.letterSpacing,
          previewTop: printSize.previewTop || config.previewTop || DEFAULT_PREVIEW_TEXT_RULES.previewTop,
          textTransform: config.textTransform || DEFAULT_PREVIEW_TEXT_RULES.textTransform,
          heightLabel: printSize.heightLabel || '',
        };
      }
      return { ...DEFAULT_PREVIEW_TEXT_RULES, heightLabel: printSize?.heightLabel || '' };
    }
    function getPreviewTextBlockStyleConfig(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template), lineCount = 1) {
      const rules = getPreviewTextRules(template, printSize);
      let previewTop = rules.previewTop || DEFAULT_PREVIEW_TEXT_RULES.previewTop;
      if (template?.id === 'emb-center') {
        const baseTop = Number.parseFloat(String(previewTop).replace('%', ''));
        if (Number.isFinite(baseTop)) {
          previewTop = `${Math.max(30, baseTop - (Math.max(0, lineCount - 1) * 1.4))}%`;
        }
      }
      return {
        maxWidth: `${rules.previewMaxWidth}px`,
        lineHeight: String(rules.lineHeight || DEFAULT_PREVIEW_TEXT_RULES.lineHeight),
        fontWeight: String(rules.fontWeight || DEFAULT_PREVIEW_TEXT_RULES.fontWeight),
        letterSpacing: rules.letterSpacing || DEFAULT_PREVIEW_TEXT_RULES.letterSpacing,
        previewTop,
        textTransform: rules.textTransform || (rules.uppercase ? 'uppercase' : 'none'),
      };
    }
    function getPreviewTextRenderMetrics(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template), lineCount = 1, options = {}) {
      const { hasStandardUpload = false } = options;
      const rules = getPreviewTextRules(template, printSize);
      const currentScale = getCurrentPrintScale(printSize?.id, template);
      if (template?.id === 'emb-center') {
        const lineHeight = rules.exportLineHeight || DEFAULT_PREVIEW_TEXT_RULES.exportLineHeight;
        const centerY = hasStandardUpload ? 780 : 500;
        return {
          fontSize: rules.exportFontSize || DEFAULT_PREVIEW_TEXT_RULES.exportFontSize,
          lineHeight,
          y: centerY - ((Math.max(1, lineCount) - 1) * lineHeight) / 2,
        };
      }
      return {
        fontSize: 48 * currentScale,
        lineHeight: 56 * currentScale,
        y: template?.kind === 'emb-left' ? 350 : (hasStandardUpload ? 780 : 485),
      };
    }
    function getPrintSizeLabel(printSize = getSelectedPrintSize()) {
      if (!printSize) return '';
      return printSize.heightLabel ? `${printSize.name} - ${printSize.heightLabel}` : printSize.name;
    }
    function getTextCustomizationHint(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      const rules = getPreviewTextRules(template, printSize);
      return `До ${rules.maxCharsPerLine} символов в строке, до ${rules.maxLines} строк`;
    }
    function getApplicationTypeLabel(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return '';
      return state.isEmbroideryText ? 'Вышивка' : 'Печать';
    }
    function normalizeTextCustomizationState() {
      const template = getSelectedTemplate();
      const availableSizes = getAvailablePrintSizes(template);
      const availableFonts = getAvailableFontOptions(template);
      if (availableSizes.length && !availableSizes.some((item) => item.id === state.printSize)) {
        state.printSize = getDefaultPrintSizeId(template);
      }
      if (availableFonts.length && !availableFonts.some((fontOption) => fontOption.id === state.font)) {
        state.font = getDefaultFontName(template);
      }
      if (!isEmbroideryAvailable()) {
        state.isEmbroideryText = false;
      }
    }
    function shouldSkipUploadStep(template = getSelectedTemplate()) {
      if (isCustomSelected()) return false;
      return Boolean(template) && Number(template.uploads || 0) === 0;
    }
    function normalizeSkippedStepState() {
      if (isCustomSelected() && state.step === 4) {
        state.step = 5;
      }
      if (shouldSkipUploadStep() && state.step === 3) {
        state.step = 4;
      }
    }
    const getExtrasTotal = () => Object.entries(extrasCount).reduce((sum, [id, count]) => {
      const price = extras.find((e) => e.id === id)?.price || 0;
      return sum + price * count;
    }, 0);
    const getProductionTotal = () => state.fastProduction ? 500 : 0;
    const getEmbroiderySymbolsCount = () => getConfiguredTextValue().replace(/\s/g, '').length;
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
      normalizeTextCustomizationState();
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
      normalizeSkippedStepState();
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
      normalizeTextCustomizationState();
      state.orderId = normalizeOrderIdValue(state.orderId);
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      const selectedPrintSize = getSelectedPrintSize();
      const applicationType = getApplicationTypeLabel();
      const configuredTextValue = getConfiguredTextValue();
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
        printHeight: selectedPrintSize.heightLabel || '',
        applicationType,
        textValue: configuredTextValue,
        textColor: state.textColor,
        fontId: state.font,
        font: getFontDisplayName(state.font),
        fontNote: getFontOptionNote(state.font),
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
        !isCustom && payload.printHeight ? `Высота ${payload.printHeight}` : '',
        !isCustom && payload.applicationType ? `Нанесение ${payload.applicationType}` : '',
        !isCustom && payload.textValue ? `Текст ${payload.textValue}` : '',
        !isCustom && payload.textColor ? `Цвет текста ${String(payload.textColor).replace('#', '')}` : '',
        !isCustom && payload.font ? `Шрифт ${payload.font}` : '',
        !isCustom && payload.fontNote ? payload.fontNote : '',
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
    function splitLongTextChunk(value = '', maxCharsPerLine = 14) {
      const chunk = String(value || '');
      const maxChars = Math.max(1, Number(maxCharsPerLine) || 1);
      const parts = [];
      for (let index = 0; index < chunk.length; index += maxChars) {
        parts.push(chunk.slice(index, index + maxChars));
      }
      return parts.filter(Boolean);
    }
    function splitPreviewTextDetailed(value, maxCharsPerLine = 14, maxLines = 3, options = {}) {
      const { uppercase = true } = options;
      const maxChars = Math.max(1, Number(maxCharsPerLine) || 1);
      const maxVisibleLines = Math.max(1, Number(maxLines) || 1);
      const sourceLines = String(value || '')
        .replace(/\r\n?/g, '\n')
        .split('\n');
      const lines = [];
      let truncated = false;
      for (let sourceIndex = 0; sourceIndex < sourceLines.length; sourceIndex += 1) {
        if (lines.length >= maxVisibleLines) {
          if (sourceLines.slice(sourceIndex).some((line) => line.replace(/[ \t]+/g, '').length > 0)) {
            truncated = true;
          }
          break;
        }
        const normalizedLine = sourceLines[sourceIndex]
          .replace(/[ \t]+/g, ' ')
          .trim();
        if (!normalizedLine) {
          if (sourceIndex < sourceLines.length - 1 && lines.length < maxVisibleLines) {
            lines.push('');
          }
          continue;
        }
        const words = normalizedLine.split(' ').filter(Boolean);
        let currentLine = '';
        while (words.length) {
          const nextWord = words[0];
          if (!currentLine && nextWord.length > maxChars) {
            const parts = splitLongTextChunk(nextWord, maxChars);
            words.shift();
            for (let partIndex = 0; partIndex < parts.length; partIndex += 1) {
              if (partIndex === parts.length - 1) {
                currentLine = parts[partIndex];
                continue;
              }
              if (lines.length >= maxVisibleLines) {
                truncated = true;
                break;
              }
              lines.push(parts[partIndex]);
            }
            if (truncated) break;
            continue;
          }
          const candidate = currentLine ? `${currentLine} ${nextWord}` : nextWord;
          if (candidate.length <= maxChars) {
            currentLine = candidate;
            words.shift();
            continue;
          }
          if (lines.length >= maxVisibleLines - 1) {
            truncated = true;
            words.length = 0;
            break;
          }
          lines.push(currentLine);
          currentLine = '';
        }
        if (truncated) break;
        if (currentLine) {
          if (lines.length >= maxVisibleLines) {
            truncated = true;
            break;
          }
          lines.push(currentLine);
        }
      }
      return {
        lines: lines.slice(0, maxVisibleLines).map((line) => (uppercase ? line.toUpperCase() : line)),
        truncated,
      };
    }
    function splitPreviewText(value, maxCharsPerLine = 14, maxLines = 3, options = {}) {
      return splitPreviewTextDetailed(value, maxCharsPerLine, maxLines, options).lines;
    }
    function getPreviewTextBreakdown(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      const rules = getPreviewTextRules(template, printSize);
      return splitPreviewTextDetailed(value, rules.maxCharsPerLine, rules.maxLines, {
        uppercase: rules.uppercase,
      });
    }
    function getPreviewTextLines(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      return getPreviewTextBreakdown(value, template, printSize).lines;
    }
    function getConfiguredTextValue(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      return getPreviewTextLines(value, template, printSize)
        .join('\n')
        .trim();
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
        payload.printHeight ? `Высота букв: ${payload.printHeight}` : '',
        payload.applicationType ? `Нанесение: ${payload.applicationType}` : '',
        `Текст: ${payload.textValue || '—'}`,
        `Цвет текста: ${payload.textColor}`,
        `Шрифт: ${payload.font}`,
        payload.fontNote ? `Примечание к шрифту: ${payload.fontNote}` : '',
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
      if (typeof syncTildaUploadFields !== 'function' || typeof createCheckoutCompositePreviewFile !== 'function') {
        throw new Error('Load constructor-checkout-mvp-tilda-js-1-preview.html before submitting orders.');
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
      if (stepId === 4) return Boolean(getConfiguredTextValue());
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
      if (shouldSkipUploadStep() && next === 3) next = 4;
      if (isCustomSelected() && next === 4) next = 5;
      if (next <= steps.length) state.step = next;
      render();
    }
    function prevStep() {
      let prev = state.step - 1;
      if (shouldSkipUploadStep() && prev === 3) prev = 2;
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


<!-- constructor-checkout-mvp-tilda-js-1-preview.html -->
<script>
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
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
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
      const textLines = getPreviewTextLines(state.textValue || previewTextPlaceholder, selectedTemplate, selectedPrintSize);
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
        const textMetrics = getPreviewTextRenderMetrics(selectedTemplate, selectedPrintSize, textLines.length, {
          hasStandardUpload,
        });
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
          y: textMetrics.y,
          lineHeight: textMetrics.lineHeight,
          fontSize: textMetrics.fontSize,
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
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const fontFamily = getFontFamily(state.font);
      const textLines = getPreviewTextLines(state.textValue || previewTextPlaceholder, selectedTemplate, selectedPrintSize);
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
      const textMetrics = getPreviewTextRenderMetrics(selectedTemplate, selectedPrintSize, textLines.length, {
        hasStandardUpload,
      });
      drawCanvasTextBlock(ctx, textLines, {
        x: selectedTemplate.kind === 'emb-left' ? 260 : 500,
        y: textMetrics.y,
        lineHeight: textMetrics.lineHeight,
        fontSize: textMetrics.fontSize,
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
</script>


<!-- constructor-checkout-mvp-tilda-js-2-steps.html -->
<script>
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
        normalizeTextCustomizationState();
        const embroideryAvailable = isEmbroideryAvailable();
        const embroiderySymbols = getEmbroiderySymbolsCount();
        const embroideryPrice = getEmbroideryTotal();
        const isCenterTextTemplate = state.template === 'emb-center';
        const availableFonts = getAvailableFontOptions();
        const availablePrintSizes = getAvailablePrintSizes();
        const textBreakdown = getPreviewTextBreakdown();
        const textRules = getPreviewTextRules();

        container.innerHTML = `
          <div class="section">
            <div>
              <div class="field-title">Текст</div>
              <textarea class="text-input text-input--multiline" id="textValueInput" rows="${textRules.maxLines}">${escapeHtml(state.textValue)}</textarea>
              <div class="text-input-meta">
                <span id="textRulesHint">${getTextCustomizationHint()}</span>
                <span id="textLinesCount">${textBreakdown.lines.length}/${textRules.maxLines} строк</span>
              </div>
              <div class="text-overflow-hint" id="textOverflowHint" ${textBreakdown.truncated ? '' : 'hidden'}>Лишний текст не попадет в макет.</div>
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

            ${isCenterTextTemplate ? `
              <div>
                <div class="field-title">Вариант нанесения</div>
                <div class="chip-row" style="margin-top:12px;">
                  ${textApplicationOptions.map((option) => `
                    <button class="chip-btn ${Boolean(state.isEmbroideryText) === option.isEmbroidery ? 'active' : ''}" data-application-type="${option.id}" type="button">${option.name}</button>
                  `).join('')}
                </div>
              </div>

              <div class="customization-note">
                <div class="subhead">Параметры шаблона</div>
                <div class="customization-note-grid">
                  <div>
                    <span>Высота букв</span>
                    <strong id="selectedHeightLabel">${selectedPrintSize.heightLabel || '-'}</strong>
                  </div>
                  <div>
                    <span>Нанесение</span>
                    <strong id="applicationTypeLabel">${getApplicationTypeLabel() || 'Печать'}</strong>
                  </div>
                </div>
              </div>
            ` : ''}

            ${!isCenterTextTemplate && embroideryAvailable ? `
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
                  <span class="font-dropdown-label" id="fontDropdownLabel" style="font-family:${getFontFamily(state.font)};">${getFontDisplayName(state.font)}</span>
                </button>
                <div class="dropdown-panel">
                  <div class="dropdown-panel-inner">
                    ${availableFonts.map((fontOption) => `
                      <button class="font-btn font-option-btn ${state.font === fontOption.id ? 'active' : ''}" data-font-value="${escapeAttr(fontOption.id)}" style="font-family:${getFontFamily(fontOption.id)};" type="button">
                        <span class="font-option-title">${fontOption.label}</span>
                        ${fontOption.note ? `<span class="font-option-note">${fontOption.note}</span>` : ''}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
              <div class="font-meta" id="fontMeta" ${getFontOptionNote(state.font) ? '' : 'hidden'}>${getFontOptionNote(state.font)}</div>
              <div class="font-warning" id="fontWarning" ${(isFontLatinOnly(state.font) && textContainsCyrillic(state.textValue)) ? '' : 'hidden'}>Этот шрифт работает только с латиницей.</div>
            </div>

            <div>
              <div class="field-title">Выберите размер нанесения</div>
              <div class="size-dropdown" data-step-dropdown>
                <button class="dropdown-toggle" data-dropdown-toggle type="button" aria-expanded="false">
                  <span class="font-dropdown-label" id="printSizeDropdownLabel">${getPrintSizeLabel(selectedPrintSize)}</span>
                </button>
                <div class="dropdown-panel">
                  <div class="dropdown-panel-inner">
                    ${availablePrintSizes.map((p) => `
                      <button class="wide-btn ${state.printSize === p.id ? 'active' : ''}" data-print-size="${p.id}" type="button">
                        <span>${p.name}</span>
                        ${p.heightLabel ? `<span class="wide-btn-meta">${p.heightLabel}</span>` : ''}
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
                ${!isCustomSelected() && selectedPrintSize.heightLabel ? rowHtml('Высота букв', selectedPrintSize.heightLabel) : ''}
                ${!isCustomSelected() ? rowHtml('Нанесение', getApplicationTypeLabel() || 'Печать') : ''}
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
            normalizeTextCustomizationState();
            renderPreservingStepContentScroll();
          };
        });
        container.querySelectorAll('[data-custom]').forEach((btn) => {
          btn.onclick = () => {
            state.selectedCustom = btn.dataset.custom;
            state.template = null;
            state.isEmbroideryText = false;
            normalizeTextCustomizationState();
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
        normalizeTextCustomizationState();
        const selectedTemplate = getSelectedTemplate();
        const availableFonts = getAvailableFontOptions(selectedTemplate);
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
            state.font = availableFonts.some((fontOption) => fontOption.id === btn.dataset.fontValue) ? btn.dataset.fontValue : (availableFonts[0]?.id || '');
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
        container.querySelectorAll('[data-application-type]').forEach((btn) => {
          btn.onclick = () => {
            state.isEmbroideryText = btn.dataset.applicationType === 'embroidery';
            renderPreservingStepContentScroll();
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
</script>


<!-- constructor-checkout-mvp-tilda-js-2.html -->
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
      normalizeTextCustomizationState();
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const availableFonts = getAvailableFontOptions(selectedTemplate);
      const textBreakdown = getPreviewTextBreakdown(state.textValue, selectedTemplate, selectedPrintSize);
      const textRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const renderedFontIds = Array.from(container.querySelectorAll('[data-font-value]')).map((btn) => btn.dataset.fontValue);
      const expectedFontIds = availableFonts.map((fontOption) => fontOption.id);
      if (renderedFontIds.length && renderedFontIds.join('|') !== expectedFontIds.join('|')) {
        renderPreservingStepContentScroll();
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
        btn.classList.toggle('active', (availableFonts.some((fontOption) => fontOption.id === btn.dataset.fontValue) ? btn.dataset.fontValue : availableFonts[0]?.id) === state.font);
      });
      container.querySelectorAll('[data-print-size]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.printSize === state.printSize);
      });
      container.querySelectorAll('[data-application-type]').forEach((btn) => {
        const isEmbroidery = btn.dataset.applicationType === 'embroidery';
        btn.classList.toggle('active', Boolean(state.isEmbroideryText) === isEmbroidery);
      });

      const fontDropdownLabel = container.querySelector('#fontDropdownLabel');
      if (fontDropdownLabel) {
        fontDropdownLabel.textContent = getFontDisplayName(state.font, selectedTemplate);
        fontDropdownLabel.style.fontFamily = getFontFamily(state.font);
      }
      const fontWarning = container.querySelector('#fontWarning');
      if (fontWarning) {
        const shouldWarn = isFontLatinOnly(state.font, selectedTemplate) && textContainsCyrillic(state.textValue);
        fontWarning.hidden = !shouldWarn;
      }
      const fontMeta = container.querySelector('#fontMeta');
      if (fontMeta) {
        const note = getFontOptionNote(state.font, selectedTemplate);
        fontMeta.textContent = note || '';
        fontMeta.hidden = !note;
      }

      const sizeDropdownLabel = container.querySelector('#printSizeDropdownLabel');
      if (sizeDropdownLabel) sizeDropdownLabel.textContent = getPrintSizeLabel(selectedPrintSize);

      const embroideryToggle = container.querySelector('#embroideryToggle');
      if (embroideryToggle) embroideryToggle.classList.toggle('active', state.isEmbroideryText);

      const embroiderySymbolsCount = container.querySelector('#embroiderySymbolsCount');
      if (embroiderySymbolsCount) embroiderySymbolsCount.textContent = String(getEmbroiderySymbolsCount());
      const embroideryPriceValue = container.querySelector('#embroideryPriceValue');
      if (embroideryPriceValue) embroideryPriceValue.textContent = formatPrice(getEmbroideryTotal());
      const textRulesHint = container.querySelector('#textRulesHint');
      if (textRulesHint) textRulesHint.textContent = getTextCustomizationHint(selectedTemplate, selectedPrintSize);
      const textLinesCount = container.querySelector('#textLinesCount');
      if (textLinesCount) textLinesCount.textContent = `${textBreakdown.lines.length}/${textRules.maxLines} строк`;
      const textOverflowHint = container.querySelector('#textOverflowHint');
      if (textOverflowHint) textOverflowHint.hidden = !textBreakdown.truncated;
      const selectedHeightLabel = container.querySelector('#selectedHeightLabel');
      if (selectedHeightLabel) selectedHeightLabel.textContent = selectedPrintSize.heightLabel || '-';
      const applicationTypeLabel = container.querySelector('#applicationTypeLabel');
      if (applicationTypeLabel) applicationTypeLabel.textContent = getApplicationTypeLabel(selectedTemplate) || 'Печать';

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
        state.step = shouldSkipUploadStep() && stepDef.id === 3 ? 4 : stepDef.id;
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
      normalizeTextCustomizationState();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const isPolaroid = state.step !== 1 && selectedTemplate?.kind?.includes('polaroid');
      const hideDesign = state.step === 1;
      const textTop = selectedTemplate?.kind === 'polaroid-top';
      const textBottom = selectedTemplate?.kind === 'polaroid-bottom';
      const textTilt = selectedTemplate?.kind === 'polaroid-tilt';
      const isEmbLeft = selectedTemplate?.kind === 'emb-left';
      const filter = state.photoGrayscale ? 'grayscale(1)' : 'grayscale(0)';
      const previewText = state.textValue || previewTextPlaceholder;
      const previewTextLines = getPreviewTextLines(previewText, selectedTemplate, selectedPrintSize);
      const previewTextHtml = previewTextLines.map((line) => escapeHtml(line)).join('<br>');
      const previewTextStyle = getPreviewTextBlockStyleConfig(selectedTemplate, selectedPrintSize, previewTextLines.length);
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
          <div class="emb-block ${isEmbLeft ? 'left' : ''} ${hasUpload ? 'with-upload' : ''}" style="--print-scale:${currentScale}; --text-color:${state.textColor}; --preview-text-max-width:${previewTextStyle.maxWidth}; --preview-text-line-height:${previewTextStyle.lineHeight}; --preview-text-font-weight:${previewTextStyle.fontWeight}; --preview-text-letter-spacing:${previewTextStyle.letterSpacing}; --preview-text-top:${previewTextStyle.previewTop}; --preview-text-transform:${previewTextStyle.textTransform}; font-family:${getFontFamily(state.font)};">
            ${previewTextHtml}
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

    if (typeof renderStepPanel !== 'function' || typeof renderStepContent !== 'function' || typeof bindStepEvents !== 'function') {
      throw new Error('Load constructor-checkout-mvp-tilda-js-2-steps.html before constructor-checkout-mvp-tilda-js-2.html');
    }


    function render() {
      normalizeSkippedStepState();
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


</body>

</html>
