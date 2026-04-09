// Working bundle: edit this file for further constructor logic changes.
// ===== constructor-checkout-mvp-tilda-config.html =====
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
      scale: 0.88,
      previewMaxWidth: 350,
      previewFontSize: 10,
      exportFontSize: 16,
      exportLineHeight: 21,
      lineHeight: 1.16,
      fontWeight: 700,
      letterSpacing: '0.01em',
      previewTop: '34%',
    },
    {
      id: 'm',
      name: 'Средний',
      heightLabel: '1,3-1,5 см',
      maxCharsPerLine: 15,
      maxLines: 5,
      scale: 1.0,
      previewMaxWidth: 380,
      previewFontSize: 11,
      exportFontSize: 19,
      exportLineHeight: 24,
      lineHeight: 1.14,
      fontWeight: 700,
      letterSpacing: '0',
      previewTop: '33%',
    },
  ];
  const textOnlyPrintSizes = centerTextPrintSizes.map((size) => ({
    ...size,
    previewTop: `${(Math.round((Number.parseFloat(String(size.previewTop || '0').replace('%', '')) + 0.2) * 1000) / 1000)}%`,
  }));
  const simplePhotoPrintSizes = [
    {
      id: 's',
      name: '8x10',
      exportWidth: 110,
      exportHeight: 138,
      exportTop: 430,
    },
    {
      id: 'l',
      name: '12x15',
      exportWidth: 160,
      exportHeight: 198,
      exportTop: 430,
    },
  ];
  const photoTopTextPrintSizes = textOnlyPrintSizes.map((size) => ({
    ...size,
    maxLines: 1,
  }));
  const photoBottomTextPrintSizes = textOnlyPrintSizes.map((size) => ({
    ...size,
    maxLines: 3,
  }));
  const photoDiagonalTextPrintSizes = textOnlyPrintSizes.map((size) => ({
    ...size,
    maxLines: 3,
  }));
  const gooseberryEmbroideryFontRuntimeFamily = 'Gooseberry Embroidery 2';
  const gooseberryEmbroideryFontFamily = `"${gooseberryEmbroideryFontRuntimeFamily}", "Gooseberry Normal", Georgia, "Times New Roman", serif`;
  const gooseberryEmbroideryFontSourceUrl = 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ACgLw1EMeCP1IQF49pERAfM/gooseberry%20normal_%D1%88%D1%80%D0%B8%D1%84%D1%82%202.otf?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=7xexk6z4&dl=0';

  const defaultFonts = ['Inter', 'Oswald', 'Cormorant Garamond'];
  const centerEmbroideryFonts = [
    {
      id: 'emb-center-emb-font-1',
      label: 'Шрифт 1',
      family: '"Wix Madefor Display", Inter, system-ui, sans-serif',
      previewScale: 0.84,
      exportScale: 0.84,
      previewMaxWidthScale: 1.04,
    },
    {
      id: 'emb-center-emb-font-2',
      label: 'Шрифт 2',
      family: gooseberryEmbroideryFontFamily,
      previewScale: 0.8,
      exportScale: 0.8,
      previewMaxWidthScale: 1.06,
      lineHeightScale: 0.85,
    },
  ];
  const centerPrintFonts = [
    {
      id: 'emb-center-print-font-1',
      label: 'Шрифт 1',
      family: '"Wix Madefor Display", Inter, system-ui, sans-serif',
      previewScale: 0.82,
      exportScale: 0.82,
      previewMaxWidthScale: 1.05,
    },
    {
      id: 'emb-center-print-font-2',
      label: 'Шрифт 2',
      family: '"Covered By Your Grace", "Comic Sans MS", cursive',
      note: 'Только для латиницы',
      latinOnly: true,
      previewScale: 0.7,
      exportScale: 0.72,
      previewMaxWidthScale: 1.1,
      lineHeightScale: 0.85,
    },
    {
      id: 'emb-center-print-font-3',
      label: 'Шрифт 3',
      family: '"Anjhay", "Times New Roman", serif',
      previewScale: 0.74,
      exportScale: 0.76,
      previewMaxWidthScale: 1.08,
      lineHeightScale: 0.85,
    },
    {
      id: 'emb-center-print-font-4',
      label: 'Шрифт 4',
      family: '"Zhizn Regular", "Trebuchet MS", sans-serif',
      previewScale: 0.78,
      exportScale: 0.8,
      previewMaxWidthScale: 1.06,
      lineHeightScale: 0.85,
    },
    {
      id: 'emb-center-print-font-5',
      label: 'Шрифт 5',
      family: '"Bebas Neue", Impact, sans-serif',
      lineHeightScale: 0.85,
    },
    {
      id: 'emb-center-print-font-6',
      label: 'Шрифт 6',
      family: '"Kom-post Regular", "Arial Narrow", sans-serif',
      lineHeightScale: 0.85,
    },
  ];
  const printColorOptions = [
    { value: 'rgb(233, 207, 242)', name: 'Сиреневый' },
    { value: 'rgb(255, 198, 210)', name: 'Розовый' },
    { value: 'rgb(223, 252, 224)', name: 'Олива' },
    { value: 'rgb(253, 168, 199)', name: 'Барби' },
    { value: 'rgb(255, 255, 255)', name: 'Белый' },
    { value: 'rgb(196, 196, 196)', name: 'Серый' },
    { value: 'rgb(75, 73, 74)', name: 'Графит' },
    { value: '#000000', name: 'Черный' },
    { value: '#fd7501', name: 'Оранжевый' },
    { value: '#fff8c0', name: 'Светло-желтый' },
    { value: '#ffe317', name: 'Желтый' },
    { value: '#8b1a38', name: 'Бордовый' },
    { value: '#c70400', name: 'Красный' },
    { value: '#175b1f', name: 'Зеленый' },
    { value: '#01b095', name: 'Бирюзовый' },
    { value: '#1e27ad', name: 'Синий' },
    { value: '#c0e6fa', name: 'Голубой' },
    { value: '#713faf', name: 'Фиолетовый' },
    { value: '#744728', name: 'Коричневый' },
    { value: '#d81a7b', name: 'Фуксия' },
  ];
  const printColorLabels = Object.fromEntries(printColorOptions.map(({ value, name }) => [value, name]));
  const sharedTextTemplateBaseConfig = {
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
    lineHeight: 1.14,
    fontWeight: 700,
    letterSpacing: '0.01em',
    textTransform: 'none',
    dynamicPreviewTop: false,
  };

  global.CONSTRUCTOR_CHECKOUT_TEMPLATE_CONFIG = {
    templates: [
      { id: 'emb-center', name: 'Текст по центру', uploads: 0, kind: 'emb-center', price: 650 },
      { id: 'emb-left', name: 'Текст слева', uploads: 0, kind: 'emb-left', price: 650 },
      { id: 'simple-photo', name: 'Просто фото', uploads: 1, kind: 'simple-photo', price: 300 },
      { id: 'photo-top-text', name: 'Фото + надпись сверху', uploads: 1, kind: 'photo-top-text', price: 950 },
      { id: 'photo-bottom-text', name: 'Фото + надпись снизу', uploads: 1, kind: 'photo-bottom-text', price: 950 },
      { id: 'photo-diagonal-text', name: 'Фото + надпись по диагонали', uploads: 1, kind: 'photo-diagonal-text', price: 950 },
      { id: 'polaroid-photo', name: 'Полароид', uploads: 1, kind: 'polaroid-photo', price: 950 },
      { id: 'polaroid-top-text', name: 'Полароид + надпись сверху', uploads: 1, kind: 'polaroid-top-text', price: 950 },
      { id: 'polaroid-diagonal-text', name: 'Полароид + надпись по диагонали', uploads: 1, kind: 'polaroid-diagonal-text', price: 950 },
      { id: 'polaroid-inside-text', name: 'Полароид + текст внутри', uploads: 1, kind: 'polaroid-inside-text', price: 950 },
    ],
    customTemplates: [
      { id: 'custom-1', name: 'Индивидуальный дизайн 1', note: 'Разработка дизайнером', price: 1900 },
      { id: 'custom-2', name: 'Индивидуальный дизайн 2', note: 'Разработка дизайнером', price: 2400 },
      { id: 'custom-3', name: 'Индивидуальный дизайн 3', note: 'Разработка дизайнером', price: 2900 },
    ],
    printColors: printColorOptions.map(({ value }) => value),
    printColorLabels,
    previewTextPlaceholder: 'ВАШ ТЕКСТ',
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
      'emb-center-emb-font-2': gooseberryEmbroideryFontFamily,
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
      maxLines: 5,
      uppercase: true,
      previewMaxWidth: 190,
      exportFontSize: 48,
      exportLineHeight: 56,
      lineHeight: 1.15,
      fontWeight: 700,
      letterSpacing: '.12em',
      previewTop: '38%',
      textTransform: 'uppercase',
    },
    templatePhotoConfigMap: {
      'simple-photo': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'photo-top-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 520,
      },
      'photo-bottom-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'photo-diagonal-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'polaroid-photo': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'polaroid-top-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'polaroid-diagonal-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
      'polaroid-inside-text': {
        sizes: simplePhotoPrintSizes,
        defaultPhotoPrintSize: 's',
        exportTop: 430,
      },
    },
    templateTextConfigMap: {
      default: {
        printSizes: defaultPrintSizes,
        fonts: defaultFonts,
        defaultPrintSize: 'm',
        defaultFont: 'Inter',
      },
      'emb-center': {
        ...sharedTextTemplateBaseConfig,
        printSizes: textOnlyPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
      'emb-left': {
        ...sharedTextTemplateBaseConfig,
        printSizes: textOnlyPrintSizes,
        previewMaxWidth: 210,
        previewTop: '33%',
        previewLeft: 'auto',
        previewRight: '29%',
        previewTranslateX: '0',
        previewWidth: 'min(44%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'right',
        previewTransformOrigin: 'right top',
        exportX: 625,
        exportCenterY: 433,
        exportAnchor: 'end',
      },
      'simple-photo': {
        sizeOptions: simplePhotoPrintSizes,
        defaultPrintSize: 's',
      },
      'polaroid-photo': {
        sizeOptions: simplePhotoPrintSizes,
        defaultPrintSize: 's',
      },
      'polaroid-top-text': {
        ...sharedTextTemplateBaseConfig,
        printSizes: photoTopTextPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
      'polaroid-diagonal-text': {
        ...sharedTextTemplateBaseConfig,
        printSizes: photoDiagonalTextPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
      'polaroid-inside-text': {
        fontOptions: [centerPrintFonts.find((f) => f.id === 'emb-center-print-font-6')].filter(Boolean),
        defaultPrintSize: 's',
        defaultFont: 'emb-center-print-font-6',
        supportsEmbroidery: false,
        uppercase: false,
        lineHeight: 1.0,
        fontWeight: 700,
        letterSpacing: '0',
        textTransform: 'none',
        printSizes: [
          {
            id: 's',
            name: 'Стандарт',
            heightLabel: '0,25 см',
            maxCharsPerLine: 30,
            maxLines: 3,
            scale: 1,
            previewMaxWidth: 380,
            previewFontSize: 8,
            exportFontSize: 14,
            exportLineHeight: 15,
            lineHeight: 1.0,
            fontWeight: 700,
            letterSpacing: '0',
            previewTop: '34%',
          },
        ],
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '0',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'right',
        previewTransformOrigin: 'right top',
        exportX: 535.2,
        exportCenterY: 581.3,
        exportAnchor: 'end',
      },
      'photo-top-text': {
        ...sharedTextTemplateBaseConfig,
        printSizes: photoTopTextPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
      'photo-bottom-text': {
        ...sharedTextTemplateBaseConfig,
        printSizes: photoBottomTextPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
      'photo-diagonal-text': {
        ...sharedTextTemplateBaseConfig,
        printSizes: photoDiagonalTextPrintSizes,
        previewMaxWidth: 380,
        previewTop: '34%',
        previewLeft: '50%',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        exportX: 500,
        exportCenterY: 503,
        exportAnchor: 'middle',
      },
    },
  };
})(window);

// ===== constructor-checkout-mvp-tilda-products.html =====
const baseProducts = [
      { id: 'tee-iznanka', name: 'Футболка [ИЗНАНКА]', price: 3400, priceNote: 'Швы наружу' },
      { id: 'tee-base', name: 'Футболка [БАЗОВАЯ]', price: 3400, priceNote: 'Классические швы' },
      { id: 'longsleeve-choice', name: 'Лонгслив [ИЗНАНКА]', price: 3290, priceNote: 'Швы наружу' },
      { id: 'hoodie-basic', name: 'Худи [БАЗОВОЕ]', price: 4990 },
      { id: 'sweatshirt-iznanka', name: 'Свитшот [ИЗНАНКА]', price: 4490 },
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

// ===== constructor-checkout-mvp-tilda-js-1.html =====
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
      printColorLabels = {},
      previewTextPlaceholder,
      printScale,
      textApplicationOptions,
      fontFamilies,
      motivationalPhrases,
      defaultPreviewTextRules: DEFAULT_PREVIEW_TEXT_RULES,
      templatePhotoConfigMap = {},
      templateTextConfigMap = {},
    } = constructorCheckoutTemplateConfig;
    const defaultTemplateTextConfig = templateTextConfigMap.default || {};
    const printSizes = Array.isArray(defaultTemplateTextConfig.printSizes) ? defaultTemplateTextConfig.printSizes : [];
    const fonts = Array.isArray(defaultTemplateTextConfig.fonts) ? defaultTemplateTextConfig.fonts : [];
    const extras = [
      { id: 'cassette', name: 'Аудиокассета', price: 350 },
    ];
    // количество допов
    const extrasCount = {};
    const MAX_CUSTOM_UPLOADS = 6;
    const CHECKOUT_EXPORT_ARTBOARD_WIDTH = 1000;
    const CHECKOUT_EXPORT_ARTBOARD_HEIGHT = 1250;
    const GARMENT_ARTBOARD_WIDTH = 860;
    const GARMENT_ARTBOARD_HEIGHT = 1075;
    const PHOTO_TOP_TEXT_PREVIEW_GAP = 16;
    const PHOTO_TOP_TEXT_EXPORT_GAP = 20;
    const PHOTO_TOP_TEXT_EXPORT_DESCENT_RATIO = 0.32;
    const PHOTO_BOTTOM_TEXT_PREVIEW_GAP = 16;
    const PHOTO_BOTTOM_TEXT_EXPORT_GAP = 20;
    const gooseberryEmbroideryRuntimeFontFamily = 'Gooseberry Embroidery 2';
    const gooseberryEmbroideryRuntimeFontUrl = 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/ACgLw1EMeCP1IQF49pERAfM/gooseberry%20normal_%D1%88%D1%80%D0%B8%D1%84%D1%82%202.otf?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=7xexk6z4&dl=0';
    const komPostRuntimeFontFamily = 'Kom-post Regular';
    const komPostRuntimeFontUrl = 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AJZZLwroiggSYKS099uvWpc/kom-post_%D1%88%D1%80%D0%B8%D1%84%D1%82%206.ttf?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=xkxjrwbk&dl=0';
    const externalFontOptionSources = {
      'emb-center-emb-font-2': {
        family: gooseberryEmbroideryRuntimeFontFamily,
        url: gooseberryEmbroideryRuntimeFontUrl,
        format: 'opentype',
      },
      'emb-center-print-font-6': {
        family: komPostRuntimeFontFamily,
        url: komPostRuntimeFontUrl,
        format: 'truetype',
      },
    };
    const externalFontLoadPromises = new Map();
    const LEGACY_DEFAULT_PREVIEW_TEXT_VALUES = new Set([
      'INSTITUTE OF RHYTHM',
      'CREATE YOUR RHYTHM',
    ]);
    const GARMENT_LOADING_LABELS = Object.freeze({
      base: 'Загружаем цвет',
      template: 'Загружаем шаблон',
    });
    const garmentLoadingState = {
      base: false,
      preview: false,
      previewLabel: GARMENT_LOADING_LABELS.template,
    };
    const PHOTO_DIAGONAL_TEXT_ROTATION = -24;
    const PHOTO_DIAGONAL_TEXT_X_RATIO = 0.87;
    const PHOTO_DIAGONAL_TEXT_PREVIEW_TOP_RATIO = 0.81;
    const PHOTO_DIAGONAL_TEXT_EXPORT_BASELINE_RATIO = 0.9;
    let previewDragController = null;
    let previewInspectController = null;
    let previewInspectScale = 1;
    let previewInspectOrigin = { x: 50, y: 50 };
    let previewInspectShift = { x: 0, y: 0 };
    let stepDropdownController = null;
    let checkoutCardHeight = 0;
    let lastRenderedStep = null;

    // =====================================================================
    // KONVA ENGINE (inlined) — declarative templates, layout, renderers
    // =====================================================================
    const KONVA_DEV_MODE = true; // <<< set false for production

    const KONVA_EXPORT_W = 1000;
    const KONVA_EXPORT_H = 1250;
    const KONVA_BASE_SCALE = 1.12;
    const POLAROID_FRAME_IMAGE_URL = 'https://www.dropbox.com/scl/fo/04y8ovljbyi645ppvs0xe/AAZUhi-Z6nvGh707riBYscA/rama.png?rlkey=pnn5zy5e82rhap6fbta5ks53v&st=hb62esng&raw=1';

    // --- Declarative template scene configs ---
    const KONVA_TEMPLATE_CONFIGS = {
      'emb-center': {
        hasText: true, hasPhoto: false, hasFrame: false, hasStandardUpload: true,
        textPosition: 'center',
        textDefaults: { exportX: 500, exportCenterY: 490, exportCenterYWithUpload: 780, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        // Per-printSize overrides (keyed by printSize id)
        printSizeOverrides: {
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
        },
        standardUpload: { x: 300, y: 363, width: 400, height: 350, radius: 14 },
        layerOrder: ['standardUpload', 'text'],
      },
      'emb-left': {
        hasText: true, hasPhoto: false, hasFrame: false, hasStandardUpload: true,
        textPosition: 'center',
        textDefaults: { exportX: 675, exportCenterY: 490, exportCenterYWithUpload: 780, anchor: 'end' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
        },
        standardUpload: { x: 300, y: 363, width: 400, height: 350, radius: 14 },
        layerOrder: ['standardUpload', 'text'],
      },
      'simple-photo': {
        hasText: false, hasPhoto: true, hasFrame: false,
        photoPosition: 'center',
        photoDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        printSizeOverrides: {
          l: { photoExportX: 436, photoExportY: 483, photoScale: 0.822 },
        },
        layerOrder: ['photo'],
      },
      'polaroid-photo': {
        hasText: false, hasPhoto: true, hasFrame: false, isPolaroid: true,
        photoPosition: 'center',
        photoDefaults: { exportX: 465, exportY: 489, scaleX: 0.639, scaleY: 0.671 },
        frameDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        printSizeOverrides: {
          l: { photoExportX: 450, photoExportY: 490, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 483, frameScale: 0.822 },
        },
        layerOrder: ['polaroidFrame', 'photo'],
      },
      'photo-top-text': {
        hasText: true, hasPhoto: true, hasFrame: false,
        textPosition: 'above-photo', photoPosition: 'below-text',
        photoDefaults: { exportX: 456, exportY: 503, scale: 0.8 },
        textDefaults: { exportX: 500, exportCenterY: 490, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          l: { photoExportX: 436, photoExportY: 503, photoScale: 0.822 },
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
          's:s': { photoExportY: 503 },
          'm:s': { photoExportY: 511 },
          's:l': { photoExportX: 436, photoExportY: 503, photoScale: 0.822 },
          'm:l': { photoExportX: 436, photoExportY: 511, photoScale: 0.822 },
        },
        textGap: { preview: 16, export: 20 }, textDescentRatio: 0.32,
        layerOrder: ['text', 'photo'],
      },
      'polaroid-top-text': {
        hasText: true, hasPhoto: true, hasFrame: false, isPolaroid: true,
        textPosition: 'above-photo', photoPosition: 'below-text',
        // Фото: scale как в polaroid-photo
        photoDefaults: { exportX: 465, exportY: 489, scaleX: 0.639, scaleY: 0.671 },
        // Рамка: позиция как фото в photo-top-text
        frameDefaults: { exportX: 456, exportY: 503, scale: 0.8 },
        textDefaults: { exportX: 500, exportCenterY: 490, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          l: { photoExportX: 450, photoExportY: 490, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 503, frameScale: 0.822 },
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
          's:s': { photoExportY: 501, frameExportY: 496 },
          'm:s': { photoExportY: 508, frameExportY: 504 },
          's:l': { photoExportX: 450, photoExportY: 503, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 496, frameScale: 0.822 },
          'm:l': { photoExportX: 450, photoExportY: 511, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 503, frameScale: 0.822 },
        },
        textGap: { preview: 16, export: 20 }, textDescentRatio: 0.32,
        layerOrder: ['text', 'polaroidFrame', 'photo'],
      },
      'photo-bottom-text': {
        hasText: true, hasPhoto: true, hasFrame: false,
        textPosition: 'below-photo', photoPosition: 'center',
        photoDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        textDefaults: { exportX: 500, exportCenterY: 490, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          l: { photoExportX: 436, photoExportY: 483, photoScale: 0.822 },
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
          's:s': { photoExportY: 483, exportCenterY: 601.5 },
          'm:s': { photoExportY: 483, exportCenterY: 601.5 },
          's:l': { photoExportX: 436, photoExportY: 483, photoScale: 0.822, exportCenterY: 655 },
          'm:l': { photoExportX: 436, photoExportY: 483, photoScale: 0.822, exportCenterY: 655 },
        },
        textGap: { preview: 16, export: 20 },
        layerOrder: ['photo', 'text'],
      },
      'photo-diagonal-text': {
        hasText: true, hasPhoto: true, hasFrame: false,
        textPosition: 'diagonal-photo', photoPosition: 'center',
        photoDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        textDefaults: { exportX: 500, exportCenterY: 490, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          l: { photoExportX: 436, photoExportY: 483, photoScale: 0.822 },
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
          's:s': { photoExportY: 483 },
          'm:s': { photoExportY: 483 },
          's:l': { photoExportX: 436, photoExportY: 483, photoScale: 0.822 },
          'm:l': { photoExportX: 436, photoExportY: 483, photoScale: 0.822 },
        },
        diagonalText: { rotation: -24, xRatio: 0.87, previewTopRatio: 0.81, exportBaselineRatio: 0.9 },
        layerOrder: ['photo', 'text'],
      },
      'polaroid-diagonal-text': {
        hasText: true, hasPhoto: true, hasFrame: false, isPolaroid: true,
        textPosition: 'diagonal-photo', photoPosition: 'center',
        photoDefaults: { exportX: 465, exportY: 489, scaleX: 0.639, scaleY: 0.671 },
        frameDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        textDefaults: { exportX: 500, exportCenterY: 490, anchor: 'middle' },
        textScaleMultiplier: 1.381,
        printSizeOverrides: {
          l: { photoExportX: 450, photoExportY: 490, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 483, frameScale: 0.822 },
          m: { exportCenterY: 493, textScaleMultiplier: 1.503 },
        },
        diagonalText: { rotation: -24, xRatio: 0.87, previewTopRatio: 0.81, exportBaselineRatio: 0.9 },
        layerOrder: ['polaroidFrame', 'photo', 'text'],
      },
      'polaroid-inside-text': {
        hasText: true, hasPhoto: true, hasFrame: false, isPolaroid: true,
        textPosition: 'below-photo', photoPosition: 'center',
        photoDefaults: { exportX: 465, exportY: 489, scaleX: 0.639, scaleY: 0.671 },
        frameDefaults: { exportX: 456, exportY: 483, scale: 0.8 },
        textDefaults: { exportX: 535.2, exportCenterY: 582.3, anchor: 'end' },
        textScaleMultiplier: 0.24,
        printSizeOverrides: {
          's:l': { photoExportX: 450, photoExportY: 490, photoScaleX: 0.645, photoScaleY: 0.677, frameExportX: 436, frameExportY: 483, frameScale: 0.822, exportX: 553.1, exportCenterY: 625.6, textScaleMultiplier: 0.45 },
        },
        layerOrder: ['polaroidFrame', 'photo', 'text'],
      },
    };

    // --- Image cache ---
    const konvaImageCache = new Map();
    function konvaLoadImage(src) {
      if (!src) return Promise.resolve(null);
      if (konvaImageCache.has(src)) return Promise.resolve(konvaImageCache.get(src));
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => { konvaImageCache.set(src, img); resolve(img); };
        img.onerror = () => reject(new Error('Image load failed: ' + src));
        img.src = src;
      });
    }

    // --- Layout resolver: config + state → scene description ---
    function konvaResolveScene(params) {
      const {
        templateKind, textLines = [], textColor = '#111111',
        fontFamily = 'Inter, system-ui, sans-serif',
        exportFontSize = 48, exportLineHeight = 56, exportFontScale = 1,
        fontWeight = 600, letterSpacing = 0, textTransform = 'none',
        photoExportWidth = 110, photoExportHeight = 138, photoExportTop = 430,
        photoSrc = null, photoCrop = { x: 0, y: 0, zoom: 1, grayscale: false },
        frameSrc = null, baseImageSrc = null, baseImageScale = KONVA_BASE_SCALE, baseImageX = 500, baseImageY = 625,
        hasUpload = false, isCustom = false, hideDesign = false,
        textExportOverrides = {}, printSizeId = '', photoPrintSizeId = '', printScale = 1,
      } = params;

      const config = KONVA_TEMPLATE_CONFIGS[templateKind];
      const scene = {
        artboard: { width: KONVA_EXPORT_W, height: KONVA_EXPORT_H },
        baseImage: baseImageSrc ? { src: baseImageSrc, scale: baseImageScale, x: baseImageX, y: baseImageY } : null,
        elements: [],
      };
      if (hideDesign || isCustom || !config) {
        console.log('[Konva] resolveScene: empty scene — hide=' + hideDesign, 'custom=' + isCustom, 'config=' + !!config, 'kind=' + templateKind);
        return scene;
      }

      // Apply per-printSize overrides if available
      const psOverride = (config.printSizeOverrides && config.printSizeOverrides[printSizeId]) || {};
      const comboKey = printSizeId && photoPrintSizeId ? `${printSizeId}:${photoPrintSizeId}` : '';
      const comboOverride = (comboKey && config.printSizeOverrides && config.printSizeOverrides[comboKey]) || {};
      const textScaleMul = comboOverride.textScaleMultiplier || psOverride.textScaleMultiplier || config.textScaleMultiplier || 1;
      const fontSize = exportFontSize * exportFontScale * textScaleMul;
      const lineHeight = exportLineHeight * exportFontScale * textScaleMul;
      const lineCount = Math.max(1, textLines.length);

      // Resolve photo layout
      let photoLayout = null;
      if (config.hasPhoto) {
        const pd = config.photoDefaults || {};
        const photoOverride = (config.printSizeOverrides && (config.printSizeOverrides[comboKey] || config.printSizeOverrides[photoPrintSizeId])) || psOverride;
        const photoScaleX = photoOverride.photoScaleX ?? pd.scaleX ?? photoOverride.photoScale ?? pd.scale ?? 1;
        const photoScaleY = photoOverride.photoScaleY ?? pd.scaleY ?? photoOverride.photoScale ?? pd.scale ?? 1;
        const scaledW = photoExportWidth * photoScaleX;
        const scaledH = photoExportHeight * photoScaleY;
        const px = photoOverride.photoExportX ?? pd.exportX ?? (KONVA_EXPORT_W - scaledW) / 2;
        let py = photoOverride.photoExportY ?? pd.exportY ?? photoExportTop;
        const hasFixedPhotoY = (photoOverride.photoExportY ?? pd.exportY) != null;
        if (!hasFixedPhotoY && config.photoPosition === 'below-text' && config.hasText) {
          const td = { ...textExportOverrides, ...config.textDefaults, ...psOverride };
          const textBottom = (td.exportCenterY || 500)
            + (Math.max(0, lineCount - 1) * lineHeight)
            + (fontSize * (config.textDescentRatio || 0.32));
          py = Math.round(textBottom + (config.textGap?.export || 20));
        }
        photoLayout = { x: px, y: py, width: scaledW, height: scaledH };
      }

      // Resolve text layout
      let textLayout = null;
      if (config.hasText && textLines.length > 0) {
        const td = { ...textExportOverrides, ...config.textDefaults, ...psOverride, ...comboOverride };
        if (config.textPosition === 'diagonal-photo' && config.diagonalText) {
          const dt = config.diagonalText;
          const ref = photoLayout || { x: (KONVA_EXPORT_W - photoExportWidth) / 2, y: photoExportTop, width: photoExportWidth, height: photoExportHeight };
          textLayout = { x: ref.x + ref.width * dt.xRatio, y: ref.y + ref.height * dt.exportBaselineRatio, fontSize, lineHeight, anchor: 'middle', rotation: dt.rotation, clipRect: null };
        } else if (config.textPosition === 'below-photo' && photoLayout) {
          const belowY = td.exportCenterY != null ? td.exportCenterY : photoLayout.y + photoLayout.height + (config.textGap?.export || 20) + fontSize;
          textLayout = { x: td.exportX || 500, y: belowY, fontSize, lineHeight, anchor: td.anchor || 'middle', rotation: 0, clipRect: null, growDown: true };
        } else if (config.textPosition === 'above-photo') {
          textLayout = { x: td.exportX || 500, y: td.exportCenterY || 500, fontSize, lineHeight, anchor: td.anchor || 'middle', rotation: 0, clipRect: null };
        } else {
          const hasStdUpload = config.hasStandardUpload && hasUpload;
          const centerY = hasStdUpload ? (td.exportCenterYWithUpload || 780) : (td.exportCenterY || 500);
          textLayout = { x: td.exportX || 500, y: centerY, fontSize, lineHeight, anchor: td.anchor || 'middle', rotation: 0, clipRect: null };
        }
      }

      // Build elements in layer order
      for (const layerName of (config.layerOrder || [])) {
        if (layerName === 'photo' || layerName === 'standardUpload') {
          if (layerName === 'standardUpload' && config.hasStandardUpload && hasUpload && photoSrc) {
            const su = config.standardUpload;
            scene.elements.push({ type: 'user-photo', name: 'standardUpload', x: su.x, y: su.y, width: su.width, height: su.height, src: photoSrc, crop: photoCrop, radius: su.radius || 14, fill: '#f3f4f6', stroke: '#e5e7eb', strokeWidth: 1 });
          } else if (layerName === 'photo') {
            if (photoLayout) {
              if (hasUpload && photoSrc) {
                scene.elements.push({ type: 'user-photo', name: 'photo', x: photoLayout.x, y: photoLayout.y, width: photoLayout.width, height: photoLayout.height, src: photoSrc, crop: photoCrop, radius: 0 });
              } else {
                scene.elements.push({ type: 'photo-placeholder', name: 'photoPlaceholder', x: photoLayout.x, y: photoLayout.y, width: photoLayout.width, height: photoLayout.height, polaroid: false });
              }
            }
          }
        } else if (layerName === 'polaroidFrame' && config.isPolaroid && frameSrc) {
          const fd = config.frameDefaults || config.photoDefaults || {};
          const frameOverride = (config.printSizeOverrides && (config.printSizeOverrides[comboKey] || config.printSizeOverrides[photoPrintSizeId])) || {};
          const fScale = frameOverride.frameScale ?? fd.scale ?? 1;
          const fW = photoExportWidth * fScale;
          const fH = photoExportHeight * fScale;
          const fX = frameOverride.frameExportX ?? fd.exportX ?? (KONVA_EXPORT_W - fW) / 2;
          const fY = frameOverride.frameExportY ?? fd.exportY ?? photoExportTop;
          scene.elements.push({ type: 'frame', name: 'polaroidFrame', x: fX, y: fY, width: fW, height: fH, src: frameSrc });
        } else if ((layerName === 'text' || layerName === 'insideText') && textLayout && textLines.length > 0) {
          scene.elements.push({ type: 'text', name: layerName, x: textLayout.x, y: textLayout.y, lines: textLines, fontSize: textLayout.fontSize, lineHeight: textLayout.lineHeight, fontFamily, fontWeight, fill: textColor, anchor: textLayout.anchor, letterSpacing, rotation: textLayout.rotation || 0, textTransform, clipRect: textLayout.clipRect, growDown: textLayout.growDown || false });
        }
      }
      return scene;
    }

    // --- Debug info panel for dev mode ---
    let konvaDebugPanel = null;
    function konvaEnsureDebugPanel() {
      if (konvaDebugPanel) return konvaDebugPanel;
      const panel = document.createElement('div');
      panel.id = 'konvaDebugPanel';
      panel.style.cssText = 'position:fixed;bottom:12px;right:12px;z-index:99999;background:rgba(0,0,0,.88);color:#0f0;font:12px/1.5 monospace;padding:10px 14px;border-radius:8px;pointer-events:none;min-width:220px;display:none;white-space:pre;';
      document.body.appendChild(panel);
      konvaDebugPanel = panel;
      return panel;
    }
    function konvaUpdateDebugPanel(node) {
      if (!KONVA_DEV_MODE) return;
      const panel = konvaEnsureDebugPanel();
      if (!node) { panel.style.display = 'none'; return; }
      const name = node.name() || node.getClassName() || '?';
      const x = Math.round(node.x() * 10) / 10;
      const y = Math.round(node.y() * 10) / 10;
      // Node's own scale (from Transformer resize)
      const nodeSx = Math.round((node.scaleX ? node.scaleX() : 1) * 1000) / 1000;
      const nodeSy = Math.round((node.scaleY ? node.scaleY() : 1) * 1000) / 1000;
      // Config scale multiplier (textScaleMultiplier for text, photoScale for photo)
      const selectedTemplate = typeof getSelectedTemplate === 'function' ? getSelectedTemplate() : null;
      const tplConfig = KONVA_TEMPLATE_CONFIGS[selectedTemplate?.kind];
      const isPhotoNode = name === 'photo' || name === 'photoPlaceholder';
      const isFrameNode = name === 'polaroidFrame';
      const currentPsId = (isPhotoNode || isFrameNode) ? (state.photoPrintSize || '') : (state.printSize || '');
      const comboDbg = (state.printSize && state.photoPrintSize) ? `${state.printSize}:${state.photoPrintSize}` : '';
      const psOvr = (tplConfig?.printSizeOverrides && (tplConfig.printSizeOverrides[comboDbg] || tplConfig.printSizeOverrides[currentPsId])) || {};
      const pd = tplConfig?.photoDefaults || {};
      const fd = tplConfig?.frameDefaults || {};
      let configMulX = 1, configMulY = 1;
      if (isFrameNode) {
        const fs = psOvr.frameScale ?? fd.scale ?? 1;
        configMulX = fs; configMulY = fs;
      } else if (isPhotoNode) {
        configMulX = psOvr.photoScaleX ?? pd.scaleX ?? psOvr.photoScale ?? pd.scale ?? 1;
        configMulY = psOvr.photoScaleY ?? pd.scaleY ?? psOvr.photoScale ?? pd.scale ?? 1;
      } else {
        const tm = psOvr.textScaleMultiplier || tplConfig?.textScaleMultiplier || 1;
        configMulX = tm; configMulY = tm;
      }
      // Combined scale = config multiplier × node transform scale
      const combinedSx = Math.round(configMulX * nodeSx * 1000) / 1000;
      const combinedSy = Math.round(configMulY * nodeSy * 1000) / 1000;
      const w = Math.round((node.width ? node.width() * nodeSx : 0) * 10) / 10;
      const h = Math.round((node.height ? node.height() * nodeSy : 0) * 10) / 10;
      const r = Math.round((node.rotation ? node.rotation() : 0) * 10) / 10;
      const hasCfgScale = configMulX !== 1 || configMulY !== 1;
      panel.textContent = `[${name}]\nx: ${x}  y: ${y}\nw: ${w}  h: ${h}\nscale: ${combinedSx} × ${combinedSy}` + (hasCfgScale ? `\n  (cfg: ${configMulX}×${configMulY} · node: ${nodeSx}×${nodeSy})` : '') + `\nrot: ${r}°`;
      panel.style.display = 'block';
    }

    // --- Konva scene builder: scene description → Konva nodes on a Layer ---
    async function konvaBuildSceneNodes(layer, scene, devMode) {
      if (!layer || !scene) return;

      // Base image
      if (scene.baseImage) {
        try {
          const img = await konvaLoadImage(scene.baseImage.src);
          if (img) {
            const nw = img.naturalWidth || img.width;
            const nh = img.naturalHeight || img.height;
            const fitS = Math.min(KONVA_EXPORT_W / nw, KONVA_EXPORT_H / nh);
            const dw = nw * fitS, dh = nh * fitS;
            const group = new Konva.Group({
              name: 'baseImage',
              x: scene.baseImage.x || KONVA_EXPORT_W / 2, y: scene.baseImage.y || KONVA_EXPORT_H / 2,
              scaleX: scene.baseImage.scale, scaleY: scene.baseImage.scale,
              offsetX: scene.baseImage.x || KONVA_EXPORT_W / 2, offsetY: scene.baseImage.y || KONVA_EXPORT_H / 2,
              listening: false, draggable: false,
            });
            group.add(new Konva.Image({ image: img, x: (KONVA_EXPORT_W - dw) / 2, y: (KONVA_EXPORT_H - dh) / 2, width: dw, height: dh, listening: false }));
            layer.add(group);
          }
        } catch (_) {}
      }

      // Design elements
      for (const el of scene.elements) {
        const isDraggable = devMode && el.type !== 'baseImage';
        switch (el.type) {
          case 'user-photo': await konvaBuildUserPhoto(layer, el, isDraggable); break;
          case 'photo-placeholder': konvaBuildPlaceholder(layer, el, isDraggable); break;
          case 'frame': await konvaBuildFrame(layer, el, isDraggable); break;
          case 'text': konvaBuildText(layer, el, isDraggable); break;
        }
      }
    }

    async function konvaBuildUserPhoto(layer, el, draggable) {
      let img;
      try { img = await konvaLoadImage(el.src); } catch (_) { return; }
      if (!img) return;
      const group = new Konva.Group({
        name: el.name || 'userPhoto', x: el.x, y: el.y,
        clipX: 0, clipY: 0, clipWidth: el.width, clipHeight: el.height,
        draggable,
      });
      // Hit area rect — must be listening:true so the Group can be hit/dragged
      group.add(new Konva.Rect({
        width: el.width, height: el.height,
        fill: el.fill || 'transparent',
        cornerRadius: el.radius || 0,
        listening: true, // ← this is the hit area
      }));
      const nw = img.naturalWidth || img.width, nh = img.naturalHeight || img.height;
      const coverS = Math.max(el.width / nw, el.height / nh);
      const dw = nw * coverS, dh = nh * coverS;
      const crop = el.crop || { x: 0, y: 0, zoom: 1, grayscale: false };
      const photoNode = new Konva.Image({
        image: img,
        x: el.width / 2 + (crop.x / 100) * el.width,
        y: el.height / 2 + (crop.y / 100) * el.height,
        width: dw, height: dh, offsetX: dw / 2, offsetY: dh / 2,
        scaleX: crop.zoom || 1, scaleY: crop.zoom || 1,
        listening: false,
      });
      if (crop.grayscale && Konva.Filters) {
        photoNode.filters([Konva.Filters.Grayscale]);
        photoNode.cache();
      }
      group.add(photoNode);
      if (el.stroke && el.strokeWidth) {
        group.add(new Konva.Rect({ width: el.width, height: el.height, stroke: el.stroke, strokeWidth: el.strokeWidth, cornerRadius: el.radius || 0, listening: false }));
      }
      if (draggable) konvaAttachDevInteractions(group);
      layer.add(group);
    }

    function konvaBuildPlaceholder(layer, el, draggable) {
      const group = new Konva.Group({ name: el.name || 'placeholder', x: el.x, y: el.y, draggable });
      const lines = ['ТУТ БУДЕТ', 'ВАШЕ ФОТО'];
      // Background rect — listening:true so Group is hittable for drag
      group.add(new Konva.Rect({
        width: el.width, height: el.height, fill: '#ffffff',
        stroke: '#d5dae1',
        strokeWidth: 1.2,
        dash: [10, 8],
        listening: true, // ← hit area
      }));
      const fs = Math.max(6, Math.min(el.width * 0.09, 10));
      const lh = fs * 1.22;
      const startY = el.height / 2 - lh * 0.35;
      lines.forEach((line, i) => {
        group.add(new Konva.Text({
          x: 0, y: startY + i * lh, width: el.width, text: line,
          fontSize: fs, fontFamily: 'Inter, system-ui, sans-serif', fontStyle: '700',
          fill: '#7b8593', align: 'center', letterSpacing: 0.35, listening: false,
        }));
      });
      if (draggable) konvaAttachDevInteractions(group);
      layer.add(group);
    }

    async function konvaBuildFrame(layer, el, draggable) {
      let img;
      try { img = await konvaLoadImage(el.src); } catch (_) { return; }
      if (!img) return;
      const nw = img.naturalWidth || img.width, nh = img.naturalHeight || img.height;
      const fitS = Math.min(el.width / nw, el.height / nh);
      const dw = nw * fitS, dh = nh * fitS;
      // Konva.Image is a Shape — it has its own hit area when listening:true
      const node = new Konva.Image({
        name: el.name || 'frame', image: img,
        x: el.x + (el.width - dw) / 2, y: el.y + (el.height - dh) / 2,
        width: dw, height: dh, draggable, listening: true,
      });
      if (draggable) konvaAttachDevInteractions(node);
      layer.add(node);
    }

    function konvaBuildText(layer, el, draggable) {
      if (!el.lines || !el.lines.length) return;
      const align = el.anchor === 'start' ? 'left' : el.anchor === 'end' ? 'right' : 'center';
      const hasClip = el.clipRect;

      let container = layer;
      if (hasClip) {
        const clipGroup = new Konva.Group({ clipX: el.clipRect.x, clipY: el.clipRect.y, clipWidth: el.clipRect.width, clipHeight: el.clipRect.height });
        layer.add(clipGroup);
        container = clipGroup;
      }

      const textGroup = new Konva.Group({
        name: el.name || 'text',
        x: el.x, y: el.y,
        rotation: el.rotation || 0,
        draggable,
      });

      // Measure actual text width for tight hit area
      let maxTextW = 0;
      const textNodes = [];
      const yOffset = el.growDown ? 0 : -el.fontSize * 0.84;
      el.lines.forEach((line, i) => {
        if (!line) return;
        const t = new Konva.Text({
          x: 0, y: i * el.lineHeight + yOffset,
          text: line,
          fontSize: el.fontSize, fontFamily: el.fontFamily,
          fontStyle: String(el.fontWeight || 600),
          fill: el.fill,
          letterSpacing: typeof el.letterSpacing === 'number' ? el.letterSpacing : 0,
          listening: false,
        });
        const tw = t.width();
        if (tw > maxTextW) maxTextW = tw;
        textNodes.push(t);
      });

      const totalH = el.fontSize + (el.lines.length - 1) * el.lineHeight;
      const hitW = Math.max(maxTextW + 10, 30); // tight + small padding
      const hitH = totalH + el.fontSize * 0.3;

      // Position text nodes and hit rect based on alignment
      let hitX = 0;
      if (align === 'center') hitX = -hitW / 2;
      else if (align === 'right') hitX = -hitW;

      // Hit area — tight around text
      textGroup.add(new Konva.Rect({
        x: hitX, y: el.growDown ? 0 : -el.fontSize,
        width: hitW, height: hitH,
        fill: 'transparent', listening: true,
      }));

      textNodes.forEach((t) => {
        // Offset x based on alignment
        if (align === 'center') t.x(-t.width() / 2);
        else if (align === 'right') t.x(-t.width());
        textGroup.add(t);
      });

      if (draggable) konvaAttachDevInteractions(textGroup);
      container.add(textGroup);
    }

    // --- Preview Renderer ---
    // Stage mounts in #garmentWrap (NOT #designLayer) to escape .garment CSS transforms
    let konvaPreviewStage = null;
    let konvaPreviewLayer = null;
    let konvaTransformer = null;
    let konvaPreviewLastKey = '';
    const KONVA_CONTAINER_ID = 'konvaPreviewContainer';

    function konvaGetMountTarget() {
      return document.getElementById('garmentWrap');
    }

    function konvaEnsurePreviewStage() {
      const mount = konvaGetMountTarget();
      if (!mount) return null;
      const rect = mount.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (!w || !h) return null;

      let div = mount.querySelector('#' + KONVA_CONTAINER_ID);
      if (!div) {
        div = document.createElement('div');
        div.id = KONVA_CONTAINER_ID;
        mount.appendChild(div);
      }
      div.style.position = 'absolute';
      div.style.inset = '0';
      div.style.zIndex = '15';
      div.style.pointerEvents = 'auto';

      Konva.pixelRatio = Math.max(2, window.devicePixelRatio || 1);
      // Prevent Konva from capturing keyboard events (breaks text input space/arrows)
      Konva.keyEventsEnabled = false;

      if (!konvaPreviewStage) {
        konvaPreviewStage = new Konva.Stage({ container: div, width: w, height: h });
        konvaPreviewLayer = new Konva.Layer();
        konvaPreviewStage.add(konvaPreviewLayer);

        if (KONVA_DEV_MODE) {
          // --- Transformer for resize/scale ---
          konvaTransformer = new Konva.Transformer({
            rotateEnabled: true,
            enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle-left', 'middle-right', 'top-center', 'bottom-center'],
            anchorSize: 7,
            anchorCornerRadius: 2,
            anchorStrokeWidth: 1,
            borderStrokeWidth: 1,
            padding: 2,
            ignoreStroke: true,
            boundBoxFunc: (oldBox, newBox) => {
              if (newBox.width < 1 || newBox.height < 1) return oldBox;
              return newBox;
            },
          });
          konvaPreviewLayer.add(konvaTransformer);

          // Click on stage background = deselect
          konvaPreviewStage.on('click tap', (e) => {
            if (e.target === konvaPreviewStage) {
              konvaTransformer.nodes([]);
              konvaPreviewLayer.batchDraw();
              konvaUpdateDebugPanel(null);
            }
          });

          // Arrow keys move selected element by 1px (Shift = 10px)
          document.addEventListener('keydown', (e) => {
            if (!konvaTransformer || !konvaTransformer.nodes().length) return;
            const key = e.key;
            if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return;
            // Don't intercept if focus is in an input/textarea
            const tag = document.activeElement?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            const step = e.shiftKey ? 10 : 1;
            const node = konvaTransformer.nodes()[0];
            if (!node) return;
            if (key === 'ArrowLeft')  node.x(node.x() - step);
            if (key === 'ArrowRight') node.x(node.x() + step);
            if (key === 'ArrowUp')    node.y(node.y() - step);
            if (key === 'ArrowDown')  node.y(node.y() + step);
            konvaPreviewLayer.batchDraw();
            konvaUpdateDebugPanel(node);
          });
        }
      } else {
        if (konvaPreviewStage.container() !== div) {
          try { konvaPreviewStage.container(div); } catch (_) {}
        }
        if (konvaPreviewStage.width() !== w || konvaPreviewStage.height() !== h) {
          konvaPreviewStage.width(w);
          konvaPreviewStage.height(h);
        }
      }

      konvaPreviewLayer.scaleX(w / KONVA_EXPORT_W);
      konvaPreviewLayer.scaleY(h / KONVA_EXPORT_H);
      return konvaPreviewStage;
    }

    /** Attach select + transformer behavior to a Konva node (dev mode) */
    function konvaAttachDevInteractions(node) {
      if (!KONVA_DEV_MODE || !konvaTransformer) return;
      node.on('click tap', () => {
        konvaTransformer.nodes([node]);
        konvaPreviewLayer.batchDraw();
        konvaUpdateDebugPanel(node);
      });
      node.on('dragmove transform', () => {
        konvaUpdateDebugPanel(node);
      });
      node.on('transformend dragend', () => {
        konvaUpdateDebugPanel(node);
      });
      node.on('mouseenter', () => { document.body.style.cursor = 'move'; });
      node.on('mouseleave', () => { document.body.style.cursor = ''; });
    }

    async function konvaRenderPreview(scene, sceneKey) {
      if (!scene) return;
      if (sceneKey && sceneKey === konvaPreviewLastKey) return;

      const stage = konvaEnsurePreviewStage();
      if (!stage || !konvaPreviewLayer) return;

      // Preserve transformer, destroy everything else
      const children = konvaPreviewLayer.getChildren().slice();
      children.forEach((child) => {
        if (child !== konvaTransformer) child.destroy();
      });

      await konvaBuildSceneNodes(konvaPreviewLayer, scene, KONVA_DEV_MODE);

      // Re-add transformer on top
      if (konvaTransformer) {
        konvaTransformer.nodes([]);
        konvaTransformer.moveToTop();
      }

      konvaPreviewLayer.batchDraw();
      konvaPreviewLastKey = sceneKey || '';
    }

    function konvaResizePreview() {
      if (!konvaPreviewStage) return;
      const mount = konvaGetMountTarget();
      if (!mount) return;
      const rect = mount.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (!w || !h) return;
      konvaPreviewStage.width(w);
      konvaPreviewStage.height(h);
      konvaPreviewLayer.scaleX(w / KONVA_EXPORT_W);
      konvaPreviewLayer.scaleY(h / KONVA_EXPORT_H);
      konvaPreviewLayer.batchDraw();
    }

    function konvaInvalidatePreview() { konvaPreviewLastKey = ''; }

    function konvaDestroyPreview() {
      if (konvaPreviewStage) {
        konvaPreviewStage.destroy();
        konvaPreviewStage = null;
        konvaPreviewLayer = null;
        konvaTransformer = null;
      }
      konvaPreviewLastKey = '';
      const div = document.getElementById(KONVA_CONTAINER_ID);
      if (div) div.remove();
    }

    // --- Export Renderer ---
    async function konvaExportToDataURL(scene, options = {}) {
      const { width = KONVA_EXPORT_W, height = KONVA_EXPORT_H, mimeType = 'image/jpeg', quality = 0.92 } = options;
      const tempDiv = document.createElement('div');
      tempDiv.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;pointer-events:none;';
      document.body.appendChild(tempDiv);
      try {
        const stage = new Konva.Stage({ container: tempDiv, width, height });
        const layer = new Konva.Layer({ listening: false });
        stage.add(layer);
        layer.add(new Konva.Rect({ x: 0, y: 0, width, height, fill: '#ffffff', listening: false }));
        const scX = width / KONVA_EXPORT_W, scY = height / KONVA_EXPORT_H;
        if (scX !== 1 || scY !== 1) {
          const sg = new Konva.Group({ scaleX: scX, scaleY: scY, listening: false });
          layer.add(sg);
          const tmp = new Konva.Layer({ listening: false });
          await konvaBuildSceneNodes(tmp, scene, false);
          tmp.getChildren().slice().forEach(c => { c.remove(); sg.add(c); });
          tmp.destroy();
        } else {
          await konvaBuildSceneNodes(layer, scene, false);
        }
        layer.batchDraw();
        const dataURL = stage.toDataURL({ mimeType, quality, pixelRatio: 1 });
        stage.destroy();
        return dataURL;
      } finally {
        document.body.removeChild(tempDiv);
      }
    }

    function konvaDataURLToBlob(dataUrl) {
      if (!dataUrl) return new Blob([], { type: 'application/octet-stream' });
      const parts = dataUrl.split(',');
      const mimeMatch = parts[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
      const raw = atob(parts[1]);
      const arr = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
      return new Blob([arr], { type: mime });
    }

    // --- Template preview SVGs (for template selection cards) ---
    function konvaEscapeSvg(v) {
      return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    function konvaSvgScene(content) {
      return `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
    }
    function konvaSvgText(lines, o = {}) {
      const { x = 50, y = 50, lineHeight: lh = 10, fontSize: fs = 8, anchor = 'middle', fill = '#111111', fontWeight: fw = 700, letterSpacing: ls = 0, rotation = 0 } = o;
      return `<text x="${x}" y="${y}" fill="${konvaEscapeSvg(fill)}" font-family="Inter, system-ui, sans-serif" font-size="${fs}" font-weight="${fw}" letter-spacing="${ls}" text-anchor="${anchor}" ${rotation ? `transform="rotate(${rotation} ${x} ${y})"` : ''}>${lines.map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lh}">${konvaEscapeSvg(l)}</tspan>`).join('')}</text>`;
    }
    function konvaSvgPhotoBox(o = {}) {
      const { x = 18, y = 18, width: w = 64, height: h = 64, radius = 8 } = o;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="#ffffff" stroke="#d5dae1" stroke-width="1.6" stroke-dasharray="5 4"/>${konvaSvgText(['ТУТ БУДЕТ', 'ВАШЕ ФОТО'], { x: x + w / 2, y: y + h / 2 - 6, lineHeight: 8, fontSize: 6, fill: '#7b8593', letterSpacing: 0.4 })}`;
    }
    function konvaBuildTemplatePreviewSvg(kind, mode) {
      if (mode === 'custom') {
        return konvaSvgScene(`<rect width="100" height="100" rx="18" fill="#f4f5f7"/><rect x="16" y="16" width="68" height="68" rx="18" fill="#ffffff" stroke="#d8dde5" stroke-width="1.4"/>${konvaSvgText(['ИНД', 'ДИЗАЙН'], { x: 50, y: 47, lineHeight: 11, fontSize: 9, fontWeight: 800, letterSpacing: 0.4 })}`);
      }
      const tl = ['ВАШ', 'ТЕКСТ'];
      let c = '<rect width="100" height="100" rx="18" fill="#f4f5f7"/>';
      switch (kind) {
        case 'emb-center': c += konvaSvgText(tl, { x: 50, y: 45, lineHeight: 11, fontSize: 9 }); break;
        case 'emb-left': c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 20, y: 46, lineHeight: 10, fontSize: 7.6, anchor: 'start' }); break;
        case 'simple-photo': c += konvaSvgPhotoBox(); break;
        case 'polaroid-photo': c += `<rect x="22" y="16" width="56" height="68" rx="6" fill="#ffffff" stroke="#d1d5db" stroke-width="1.2"/>`; c += konvaSvgPhotoBox({ x: 22, y: 50, width: 56, height: 34, radius: 4 }); break;
        case 'polaroid-top-text': c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 50, y: 15, lineHeight: 8, fontSize: 6.8 }); c += `<rect x="22" y="24" width="56" height="58" rx="6" fill="#ffffff" stroke="#d1d5db" stroke-width="1.2"/>`; c += konvaSvgPhotoBox({ x: 22, y: 50, width: 56, height: 32, radius: 4 }); break;
        case 'polaroid-diagonal-text': c += `<rect x="22" y="16" width="56" height="68" rx="6" fill="#ffffff" stroke="#d1d5db" stroke-width="1.2"/>`; c += konvaSvgPhotoBox({ x: 22, y: 50, width: 56, height: 34, radius: 4 }); c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 69, y: 73, lineHeight: 8, fontSize: 6.4, rotation: -18 }); break;
        case 'polaroid-inside-text': c += `<rect x="22" y="12" width="56" height="60" rx="6" fill="#ffffff" stroke="#d1d5db" stroke-width="1.2"/>`; c += konvaSvgPhotoBox({ x: 22, y: 40, width: 56, height: 32, radius: 4 }); c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 50, y: 82, lineHeight: 7, fontSize: 5.8 }); break;
        case 'photo-top-text': c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 50, y: 15, lineHeight: 8, fontSize: 6.8 }); c += konvaSvgPhotoBox({ x: 18, y: 24, width: 64, height: 56 }); break;
        case 'photo-bottom-text': c += konvaSvgPhotoBox({ x: 18, y: 14, width: 64, height: 50 }); c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 50, y: 78, lineHeight: 8, fontSize: 6.8 }); break;
        case 'photo-diagonal-text': c += konvaSvgPhotoBox({ x: 18, y: 18, width: 64, height: 56 }); c += konvaSvgText(['ВАШ ТЕКСТ'], { x: 69, y: 73, lineHeight: 8, fontSize: 6.4, rotation: -18 }); break;
        default: c += konvaSvgText(tl, { x: 50, y: 45, lineHeight: 11, fontSize: 9 });
      }
      return konvaSvgScene(c);
    }

    // --- Dynamic Konva loader ---
    let konvaReady = typeof Konva !== 'undefined';
    function isKonvaAvailable() { return konvaReady && typeof Konva !== 'undefined'; }

    function loadKonvaScript() {
      if (typeof Konva !== 'undefined') { konvaReady = true; return Promise.resolve(); }
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/konva@9/konva.min.js';
        script.onload = () => { konvaReady = true; console.log('[Konva] loaded successfully'); resolve(); };
        script.onerror = () => { console.warn('[Konva] failed to load, using legacy rendering'); resolve(); };
        document.head.appendChild(script);
      });
    }

    // --- Bridge: build Konva scene params from constructor state ---
    function buildKonvaSceneParams() {
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const textRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const textLines = getPreviewTextLines(state.textValue, selectedTemplate, selectedPrintSize);
      const photoConfig = getTemplatePhotoConfig(selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const activeUpload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      const isEmb = ['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
      const efs = getExportFontScale(state.font, selectedTemplate);
      const baseFontSize = textRules.exportFontSize || DEFAULT_PREVIEW_TEXT_RULES.exportFontSize;

      return {
        templateKind: selectedTemplate?.kind || '',
        textLines,
        textColor: state.textColor,
        fontFamily: getFontFamily(state.font),
        exportFontSize: baseFontSize,
        exportLineHeight: (textRules.exportLineHeight || DEFAULT_PREVIEW_TEXT_RULES.exportLineHeight) * getLineHeightScale(state.font, selectedTemplate),
        exportFontScale: efs,
        fontWeight: textRules.fontWeight || DEFAULT_PREVIEW_TEXT_RULES.fontWeight,
        letterSpacing: getPreviewTextLetterSpacingValue(selectedTemplate, selectedPrintSize, baseFontSize * efs),
        textTransform: textRules.textTransform || (textRules.uppercase ? 'uppercase' : 'none'),
        photoExportWidth: Number(selectedPhotoPrintSize?.exportWidth) || 110,
        photoExportHeight: Number(selectedPhotoPrintSize?.exportHeight) || 138,
        photoExportTop: selectedPhotoPrintSize?.exportTop ?? photoConfig?.exportTop ?? 430,
        photoSrc: activeUpload?.url || null,
        photoCrop: { x: state.cropPosition.x, y: state.cropPosition.y, zoom: state.cropZoom, grayscale: state.photoGrayscale },
        frameSrc: selectedTemplate?.kind?.startsWith('polaroid-') ? normalizeExportImageUrl(POLAROID_FRAME_IMAGE_URL) : null,
        baseImageSrc: normalizeExportImageUrl(getCurrentProductImage()),
        baseImageScale: getProductBaseImageScale(state.product),
        baseImageX: 500,
        baseImageY: 625,
        hasUpload: Boolean(activeUpload) && !isEmb,
        isCustom: Boolean(state.selectedCustom),
        hideDesign: state.step === 1,
        textExportOverrides: { exportX: textRules.exportX, exportCenterY: textRules.exportCenterY, exportCenterYWithUpload: textRules.exportCenterYWithUpload, anchor: textRules.exportAnchor },
        printSizeId: selectedPrintSize?.id || '',
        photoPrintSizeId: selectedPhotoPrintSize?.id || '',
        printScale: currentScale,
      };
    }
    // =====================================================================
    // END KONVA ENGINE
    // =====================================================================

    // =====================================================================
    // MAGNIFIER LENS (step 4 zoom preview)
    // =====================================================================
    let magnifierEl = null;
    let magnifierController = null;
    const MAGNIFIER_SIZE = 300;
    const MAGNIFIER_ZOOM = 8;

    function ensureMagnifierElement() {
      if (magnifierEl) return magnifierEl;
      const el = document.createElement('div');
      el.className = 'preview-magnifier';
      document.body.appendChild(el);
      magnifierEl = el;
      return el;
    }

    function destroyMagnifier() {
      if (magnifierController) {
        magnifierController.abort();
        magnifierController = null;
      }
      if (magnifierEl) {
        magnifierEl.classList.remove('active');
      }
    }

    function setupMagnifier() {
      destroyMagnifier();
      if (state.step !== 4) return;
      const garmentWrap = document.getElementById('garmentWrap');
      if (!garmentWrap) return;

      magnifierController = new AbortController();
      const signal = magnifierController.signal;
      const lens = ensureMagnifierElement();

      const updateLens = (clientX, clientY) => {
        const rect = garmentWrap.getBoundingClientRect();
        const relX = (clientX - rect.left) / rect.width;
        const relY = (clientY - rect.top) / rect.height;
        if (relX < 0 || relX > 1 || relY < 0 || relY > 1) {
          lens.classList.remove('active');
          return;
        }

        // Position lens offset from cursor (top-right)
        lens.style.left = `${clientX + 30}px`;
        lens.style.top = `${clientY - 130}px`;

        // Build composite background from base image + Konva canvas
        const baseImg = garmentWrap.querySelector('.base-img');
        const konvaCanvas = garmentWrap.querySelector('#konvaPreviewContainer canvas');
        const backgrounds = [];
        const positions = [];
        const sizes = [];

        // Konva canvas layer (on top)
        if (konvaCanvas) {
          try {
            const dataUrl = konvaCanvas.toDataURL();
            backgrounds.push(`url(${dataUrl})`);
            const cRect = konvaCanvas.getBoundingClientRect();
            const cOffX = cRect.left - rect.left;
            const cOffY = cRect.top - rect.top;
            const bgW = cRect.width * MAGNIFIER_ZOOM;
            const bgH = cRect.height * MAGNIFIER_ZOOM;
            const bgX = -(relX * rect.width - cOffX) * MAGNIFIER_ZOOM + MAGNIFIER_SIZE / 2;
            const bgY = -(relY * rect.height - cOffY) * MAGNIFIER_ZOOM + MAGNIFIER_SIZE / 2;
            positions.push(`${bgX}px ${bgY}px`);
            sizes.push(`${bgW}px ${bgH}px`);
          } catch (_) {}
        }

        // Base image layer (behind)
        if (baseImg) {
          const bRect = baseImg.getBoundingClientRect();
          const bOffX = bRect.left - rect.left;
          const bOffY = bRect.top - rect.top;
          const bgW = bRect.width * MAGNIFIER_ZOOM;
          const bgH = bRect.height * MAGNIFIER_ZOOM;
          const bgX = -(relX * rect.width - bOffX) * MAGNIFIER_ZOOM + MAGNIFIER_SIZE / 2;
          const bgY = -(relY * rect.height - bOffY) * MAGNIFIER_ZOOM + MAGNIFIER_SIZE / 2;
          backgrounds.push(`url(${baseImg.src})`);
          positions.push(`${bgX}px ${bgY}px`);
          sizes.push(`${bgW}px ${bgH}px`);
        }

        if (backgrounds.length) {
          lens.style.backgroundImage = backgrounds.join(', ');
          lens.style.backgroundPosition = positions.join(', ');
          lens.style.backgroundSize = sizes.join(', ');
          lens.classList.add('active');
        }
      };

      garmentWrap.addEventListener('mousemove', (e) => {
        // Don't show magnifier while dragging Konva elements
        if (konvaTransformer && konvaTransformer.nodes().length > 0) {
          const node = konvaTransformer.nodes()[0];
          if (node && node.isDragging && node.isDragging()) {
            lens.classList.remove('active');
            return;
          }
        }
        updateLens(e.clientX, e.clientY);
      }, { signal });

      garmentWrap.addEventListener('mouseleave', () => {
        lens.classList.remove('active');
      }, { signal });

      // Hide during drag
      garmentWrap.addEventListener('mousedown', () => {
        lens.classList.remove('active');
      }, { signal });
      garmentWrap.addEventListener('mouseup', (e) => {
        requestAnimationFrame(() => updateLens(e.clientX, e.clientY));
      }, { signal });

      // --- Mobile pinch-zoom & pan ---
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        let mobileZoom = 1;
        let mobilePan = { x: 0, y: 0 };
        let pinchStartDist = 0;
        let pinchStartZoom = 1;
        let panStart = null;
        let lastTouchCenter = null;
        const garmentEl = garmentWrap.querySelector('.garment');
        if (!garmentEl) return;

        const applyMobileTransform = () => {
          garmentEl.style.transition = 'none';
          garmentEl.style.transformOrigin = '50% 50%';
          garmentEl.style.transform = `translate(${mobilePan.x}px, ${mobilePan.y}px) scale(${mobileZoom})`;
        };

        const resetMobileTransform = () => {
          mobileZoom = 1;
          mobilePan = { x: 0, y: 0 };
          garmentEl.style.transition = 'transform .2s ease';
          garmentEl.style.transform = '';
          garmentEl.style.transformOrigin = '';
        };

        const getTouchDist = (t1, t2) => Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const getTouchCenter = (t1, t2) => ({ x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 });

        garmentWrap.addEventListener('touchstart', (e) => {
          if (e.touches.length === 2) {
            e.preventDefault();
            pinchStartDist = getTouchDist(e.touches[0], e.touches[1]);
            pinchStartZoom = mobileZoom;
            lastTouchCenter = getTouchCenter(e.touches[0], e.touches[1]);
          } else if (e.touches.length === 1 && mobileZoom > 1) {
            panStart = { x: e.touches[0].clientX - mobilePan.x, y: e.touches[0].clientY - mobilePan.y };
          }
        }, { signal, passive: false });

        garmentWrap.addEventListener('touchmove', (e) => {
          if (e.touches.length === 2) {
            e.preventDefault();
            const dist = getTouchDist(e.touches[0], e.touches[1]);
            const center = getTouchCenter(e.touches[0], e.touches[1]);
            mobileZoom = Math.max(1, Math.min(6, pinchStartZoom * (dist / pinchStartDist)));
            if (lastTouchCenter) {
              mobilePan.x += center.x - lastTouchCenter.x;
              mobilePan.y += center.y - lastTouchCenter.y;
            }
            lastTouchCenter = center;
            applyMobileTransform();
          } else if (e.touches.length === 1 && panStart && mobileZoom > 1) {
            e.preventDefault();
            mobilePan.x = e.touches[0].clientX - panStart.x;
            mobilePan.y = e.touches[0].clientY - panStart.y;
            applyMobileTransform();
          }
        }, { signal, passive: false });

        garmentWrap.addEventListener('touchend', (e) => {
          pinchStartDist = 0;
          lastTouchCenter = null;
          panStart = null;
          if (e.touches.length === 0 && mobileZoom <= 1.05) {
            resetMobileTransform();
          }
        }, { signal });

        // Double-tap to reset
        let lastTapTime = 0;
        garmentWrap.addEventListener('touchend', (e) => {
          if (e.touches.length > 0) return;
          const now = Date.now();
          if (now - lastTapTime < 300) {
            resetMobileTransform();
          }
          lastTapTime = now;
        }, { signal });
      }
    }
    // =====================================================================
    // END MAGNIFIER
    // =====================================================================

    function getTemplateCardMeta(item, mode = 'template') {
      if (mode === 'custom') return item.note || '';
      return item.uploads ? `${item.uploads} фото` : 'Без фото';
    }
    function getProductDisplayNote(item) {
      return String(item?.note || item?.priceNote || '').trim();
    }
    function getProductCardNote(item) {
      const displayNote = getProductDisplayNote(item);
      const normalizedNote = displayNote.toLowerCase();
      if (!normalizedNote) return '';
      if (normalizedNote.includes('наруж')) return '';
      if (normalizedNote.includes('классич')) return '';
      return displayNote;
    }
    function getProductPriceNote(item) {
      const priceNote = String(item?.priceNote || '').trim();
      if (!priceNote) return '';
      return priceNote === getProductDisplayNote(item) ? '' : priceNote;
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
        photoPrintSize: 's',
        textValue: previewTextPlaceholder,
        textColor: '#000000',
        font: fonts[0],
        uploads: [],
        selectedExtras: [],
        selectedCustom: null,
        stepTwoTab: 'template',
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
    function getResolvedPreviewTextValue(value = state.textValue) {
      const rawValue = String(value ?? '');
      const trimmedValue = rawValue.trim();
      if (!trimmedValue) return previewTextPlaceholder;
      const comparableValue = trimmedValue.replace(/\s+/g, ' ').toUpperCase();
      return LEGACY_DEFAULT_PREVIEW_TEXT_VALUES.has(comparableValue) ? previewTextPlaceholder : rawValue;
    }
    function shouldResetLegacyDefaultTemplate(snapshotState, snapshotExtras = {}, snapshotUploads = [], snapshotVersion = 0) {
      if (snapshotVersion >= 2) return false;
      if (!snapshotState || snapshotState.selectedCustom || snapshotState.template !== templates[0].id) return false;
      if ((snapshotUploads || []).length) return false;
      if (Object.values(snapshotExtras || {}).some((value) => (Number(value) || 0) > 0)) return false;
      if (snapshotState.fastProduction || snapshotState.isEmbroideryText) return false;
      return Number(snapshotState.step) === 1;
    }
    function normalizeTemplateId(templateId = '') {
      const legacyTemplateMap = {
      };
      const resolvedTemplateId = legacyTemplateMap[templateId] || templateId || '';
      if (!resolvedTemplateId) return null;
      return templates.some((template) => template.id === resolvedTemplateId) ? resolvedTemplateId : null;
    }
    const state = createDefaultState();
    const PERSISTENCE_DB_NAME = 'constructor-checkout-mvp-db';
    const PERSISTENCE_STORE_NAME = 'configurator';
    const PERSISTENCE_RECORD_KEY = 'latest';
    const PERSISTENCE_DEBOUNCE_MS = 120;
    const checkoutTabsOrder = ['review', 'contacts'];
    const stepTwoTabsOrder = ['template', 'custom'];
    const checkoutLabels = {
      review: 'Проверка',
      contacts: 'Контакты',
    };
    const stepTwoLabels = {
      template: 'Обычные',
      custom: 'Индивидуальные',
    };
    const $ = (selector) => document.querySelector(selector);
    const formatPrice = (value) => `${Number(value || 0).toLocaleString('ru-RU')}\u00A0₽`;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const normalizeStepTwoTab = (tab) => (stepTwoTabsOrder.includes(tab) ? tab : null);
    const getActiveStepTwoTab = () => normalizeStepTwoTab(state.stepTwoTab) || (state.selectedCustom ? 'custom' : 'template');
    const getSelectedTemplate = () => templates.find((t) => t.id === state.template) || null;
    const getSelectedProduct = () => baseProducts.find((p) => p.id === state.product) || baseProducts[0];
    const getAvailableColors = (productId = state.product) => productImages[productId] || [];
    const getColorHex = (colorName) => colorValues[colorName] || '#cccccc';
    const getPrintColorLabel = (colorValue) => printColorLabels[colorValue] || colorValue;
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
          previewScale: 1,
          exportScale: 1,
          previewMaxWidthScale: 1,
        };
      }
      return {
        id: fontOption.id || fontOption.value || fontOption.label || `font-option-${index + 1}`,
        label: fontOption.label || fontOption.name || fontOption.id || `Шрифт ${index + 1}`,
        family: fontOption.family || fontFamilies[fontOption.id] || fontFamilies[fontOption.label] || 'Inter, system-ui, sans-serif',
        note: fontOption.note || '',
        latinOnly: Boolean(fontOption.latinOnly),
        previewScale: Number(fontOption.previewScale) || 1,
        exportScale: Number(fontOption.exportScale) || 1,
        previewMaxWidthScale: Number(fontOption.previewMaxWidthScale) || 1,
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
      let fontSource = templateConfig?.fontOptionsByApplication
        ? (state.isEmbroideryText ? templateConfig.fontOptionsByApplication.embroidery : templateConfig.fontOptionsByApplication.print)
        : (templateConfig?.fontOptions || fonts);
      if ((!fontSource || !fontSource.length) && templateConfig?.fontOptionsByApplication?.print?.length) {
        fontSource = templateConfig.fontOptionsByApplication.print;
      }
      return normalizeFontOptions(fontSource);
    }
    function getDefaultFontName(template = getSelectedTemplate()) {
      const templateConfig = getTemplateTextConfig(template);
      if (templateConfig?.defaultFontByApplication) {
        return (state.isEmbroideryText
          ? templateConfig.defaultFontByApplication.embroidery
          : templateConfig.defaultFontByApplication.print)
          || templateConfig.defaultFontByApplication.print
          || templateConfig.defaultFont
          || fonts[0];
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
    function getPreviewFontScale(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.previewScale || 1;
    }
    function getExportFontScale(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.exportScale || 1;
    }
    function getLineHeightScale(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.lineHeightScale || 1;
    }
    function getPreviewFontWidthScale(fontId = state.font, template = getSelectedTemplate()) {
      return getSelectedFontOption(fontId, template)?.previewMaxWidthScale || 1;
    }
    async function ensureExternalFontOptionReady(fontId = state.font, template = getSelectedTemplate()) {
      if (typeof FontFace === 'undefined' || !document.fonts?.add) return;
      const fontSource = externalFontOptionSources[fontId];
      if (!fontSource?.family || !fontSource?.url) return;
      const cacheKey = `${fontId}:${fontSource.family}`;
      if (!externalFontLoadPromises.has(cacheKey)) {
        externalFontLoadPromises.set(cacheKey, (async () => {
          let sourceUrl = fontSource.url;
          try {
            const parsed = new URL(normalizeProductImageUrl(fontSource.url), document.baseURI || 'https://tilda.cc/');
            const hostname = parsed.hostname.toLowerCase();
            if (hostname.endsWith('dropbox.com') || hostname.endsWith('dropboxusercontent.com')) {
              parsed.searchParams.delete('dl');
              parsed.searchParams.set('raw', '1');
            }
            sourceUrl = parsed.toString();
          } catch (_) {
            sourceUrl = normalizeProductImageUrl(fontSource.url);
          }
          const fontFace = new FontFace(
            fontSource.family,
            `url("${sourceUrl}") format("${fontSource.format || 'opentype'}")`
          );
          const loadedFace = await fontFace.load();
          document.fonts.add(loadedFace);
        })().catch((error) => {
          externalFontLoadPromises.delete(cacheKey);
          throw error;
        }));
      }
      try {
        await externalFontLoadPromises.get(cacheKey);
      } catch (_) {
        // External font loading is best-effort for preview/export fidelity.
      }
    }
    async function ensureSelectedPreviewFontReady(template = getSelectedTemplate()) {
      if (!templateSupportsText(template) || !document.fonts?.load) return;
      await ensureExternalFontOptionReady(state.font, template);
      const selectedPrintSize = getSelectedPrintSize(undefined, template);
      const fontFamily = getFontFamily(state.font);
      const textRules = getPreviewTextRules(template, selectedPrintSize);
      const configuredText = getConfiguredTextValue(state.textValue, template, selectedPrintSize);
      const previewLines = getPreviewTextLines(state.textValue, template, selectedPrintSize);
      const textMetrics = getPreviewTextRenderMetrics(template, selectedPrintSize, previewLines.length);
      const fontWeight = textRules.fontWeight || 600;
      const probeText = configuredText || 'BESbswy абв 123';
      const probeSizes = [
        Math.max(16, Number(selectedPrintSize?.previewFontSize) || 16),
        Math.max(24, Math.round(Number(textMetrics?.fontSize) || 24)),
      ];
      await Promise.allSettled(
        probeSizes.map((fontSize) => document.fonts.load(`${fontWeight} ${fontSize}px ${fontFamily}`, probeText))
      );
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
    function getTemplatePhotoConfig(template = getSelectedTemplate()) {
      return templatePhotoConfigMap[template?.id || ''] || null;
    }
    function isSimplePhotoTemplate(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return template.kind === 'simple-photo' || template.kind === 'polaroid-photo';
    }
    function isPhotoTopTextTemplate(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return template.kind === 'photo-top-text' || template.kind === 'polaroid-top-text';
    }
    function isPhotoBottomTextTemplate(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return template.kind === 'photo-bottom-text' || template.kind === 'polaroid-inside-text';
    }
    function isPhotoDiagonalTextTemplate(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return template.kind === 'photo-diagonal-text' || template.kind === 'polaroid-diagonal-text';
    }
    function isPhotoTextTemplate(template = getSelectedTemplate()) {
      return isPhotoTopTextTemplate(template) || isPhotoBottomTextTemplate(template) || isPhotoDiagonalTextTemplate(template);
    }
    function templateSupportsPhotoPrintSizes(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return isSimplePhotoTemplate(template) || Boolean(getTemplatePhotoConfig(template));
    }
    function getAvailablePhotoPrintSizes(template = getSelectedTemplate()) {
      if (!templateSupportsPhotoPrintSizes(template)) return [];
      if (isSimplePhotoTemplate(template)) return getAvailablePrintSizes(template);
      return Array.isArray(getTemplatePhotoConfig(template)?.sizes) ? getTemplatePhotoConfig(template).sizes : [];
    }
    function getDefaultPhotoPrintSizeId(template = getSelectedTemplate()) {
      if (isSimplePhotoTemplate(template)) return getDefaultPrintSizeId(template);
      return getTemplatePhotoConfig(template)?.defaultPhotoPrintSize
        || getAvailablePhotoPrintSizes(template)[0]?.id
        || 's';
    }
    function getSelectedPhotoPrintSize(photoPrintSizeId = state.photoPrintSize, template = getSelectedTemplate()) {
      const availableSizes = getAvailablePhotoPrintSizes(template);
      if (!availableSizes.length) return null;
      const resolvedSizeId = isSimplePhotoTemplate(template) ? state.printSize : photoPrintSizeId;
      return availableSizes.find((item) => item.id === resolvedSizeId)
        || availableSizes.find((item) => item.id === getDefaultPhotoPrintSizeId(template))
        || availableSizes[0]
        || null;
    }
    function getPhotoPrintSizeLabel(photoPrintSize = getSelectedPhotoPrintSize()) {
      return photoPrintSize?.name || '';
    }
    function getTemplatePhotoLayout(
      template = getSelectedTemplate(),
      photoPrintSize = getSelectedPhotoPrintSize(undefined, template),
      options = {}
    ) {
      if (!templateSupportsPhotoPrintSizes(template) || !photoPrintSize) return null;
      const {
        printSize = getSelectedPrintSize(undefined, template),
        lineCount = 1,
      } = options;
      const photoConfig = getTemplatePhotoConfig(template);
      const exportWidth = Number(photoPrintSize.exportWidth) || 110;
      const exportHeight = Number(photoPrintSize.exportHeight) || 138;
      const resolvedLineCount = Math.max(1, Number(lineCount) || 1);

      const konvaConfig = KONVA_TEMPLATE_CONFIGS[template?.kind];
      const pd = konvaConfig?.photoDefaults || {};
      const comboKey = (printSize?.id && photoPrintSize?.id) ? `${printSize.id}:${photoPrintSize.id}` : '';
      const psOverride = (konvaConfig?.printSizeOverrides && (konvaConfig.printSizeOverrides[comboKey] || konvaConfig.printSizeOverrides[photoPrintSize?.id])) || {};
      const photoScaleX = psOverride.photoScaleX ?? pd.scaleX ?? psOverride.photoScale ?? pd.scale ?? 1;
      const photoScaleY = psOverride.photoScaleY ?? pd.scaleY ?? psOverride.photoScale ?? pd.scale ?? 1;
      const scaledWidth = exportWidth * photoScaleX;
      const scaledHeight = exportHeight * photoScaleY;
      const exportTop = isSimplePhotoTemplate(template)
        ? Number(photoPrintSize.exportTop)
        : Number(photoConfig?.exportTop);
      const resolvedExportTop = Number.isFinite(exportTop)
        ? exportTop
        : (isPhotoTopTextTemplate(template) ? 520 : 430);
      const defaultExportX = (CHECKOUT_EXPORT_ARTBOARD_WIDTH - scaledWidth) / 2;
      const resolvedExportX = psOverride.photoExportX ?? pd.exportX ?? defaultExportX;
      const resolvedExportY = psOverride.photoExportY ?? pd.exportY ?? resolvedExportTop;
      const hasCustomX = (psOverride.photoExportX ?? pd.exportX) != null;
      return {
        exportX: resolvedExportX,
        exportY: resolvedExportY,
        exportWidth: scaledWidth,
        exportHeight: scaledHeight,
        previewLeft: hasCustomX ? `${((resolvedExportX + scaledWidth / 2) / CHECKOUT_EXPORT_ARTBOARD_WIDTH) * 100}%` : '50%',
        previewTop: `${(resolvedExportY / CHECKOUT_EXPORT_ARTBOARD_HEIGHT) * 100}%`,
        previewWidth: `${(scaledWidth / CHECKOUT_EXPORT_ARTBOARD_WIDTH) * 100}%`,
        previewHeight: `${(scaledHeight / CHECKOUT_EXPORT_ARTBOARD_HEIGHT) * 100}%`,
      };
    }
    function getPhotoDiagonalTextLayout(
      template = getSelectedTemplate(),
      printSize = getSelectedPrintSize(undefined, template),
      lineCount = 1
    ) {
      if (!isPhotoDiagonalTextTemplate(template)) return null;
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, template);
      const photoLayout = getTemplatePhotoLayout(template, selectedPhotoPrintSize, {
        printSize,
        lineCount,
      });
      if (!photoLayout) return null;
      const exportX = Number(photoLayout.exportX || 0) + (Number(photoLayout.exportWidth || 0) * PHOTO_DIAGONAL_TEXT_X_RATIO);
      const previewTopSource = Number(photoLayout.exportY || 0) + (Number(photoLayout.exportHeight || 0) * PHOTO_DIAGONAL_TEXT_PREVIEW_TOP_RATIO);
      const exportY = Number(photoLayout.exportY || 0) + (Number(photoLayout.exportHeight || 0) * PHOTO_DIAGONAL_TEXT_EXPORT_BASELINE_RATIO);
      return {
        rotation: PHOTO_DIAGONAL_TEXT_ROTATION,
        exportX,
        exportY,
        previewLeft: `${(exportX / CHECKOUT_EXPORT_ARTBOARD_WIDTH) * 100}%`,
        previewTop: `${(previewTopSource / CHECKOUT_EXPORT_ARTBOARD_HEIGHT) * 100}%`,
      };
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
          previewLeft: printSize.previewLeft || config.previewLeft || '50%',
          previewRight: printSize.previewRight || config.previewRight || 'auto',
          previewTranslateX: printSize.previewTranslateX || config.previewTranslateX || '-50%',
          previewWidth: printSize.previewWidth || config.previewWidth || 'min(80%, var(--preview-text-max-width, 190px))',
          previewTextAlign: printSize.previewTextAlign || config.previewTextAlign || 'center',
          previewTransformOrigin: printSize.previewTransformOrigin || config.previewTransformOrigin || 'center top',
          textTransform: config.textTransform || DEFAULT_PREVIEW_TEXT_RULES.textTransform,
          dynamicPreviewTop: Boolean(config.dynamicPreviewTop),
          exportX: Number(printSize.exportX) || Number(config.exportX) || 500,
          exportCenterY: Number(printSize.exportCenterY) || Number(config.exportCenterY) || 500,
          exportCenterYWithUpload: Number(printSize.exportCenterYWithUpload) || Number(config.exportCenterYWithUpload) || 780,
          exportAnchor: printSize.exportAnchor || config.exportAnchor || 'middle',
          heightLabel: printSize.heightLabel || '',
        };
      }
      return {
        ...DEFAULT_PREVIEW_TEXT_RULES,
        previewLeft: '50%',
        previewRight: 'auto',
        previewTranslateX: '-50%',
        previewWidth: 'min(80%, var(--preview-text-max-width, 190px))',
        previewTextAlign: 'center',
        previewTransformOrigin: 'center top',
        dynamicPreviewTop: false,
        exportX: template?.kind === 'emb-left' ? 620 : 500,
        exportCenterY: template?.kind === 'emb-left' ? 430 : 485,
        exportCenterYWithUpload: 780,
        exportAnchor: 'middle',
        heightLabel: printSize?.heightLabel || '',
      };
    }
    function getGarmentPreviewFocusConfig(template = getSelectedTemplate()) {
      if (state.step !== 4) return null;
      // No zoom in Konva dev mode — keep garment same size as steps 1-2
      if (KONVA_DEV_MODE && isKonvaAvailable()) return null;
      const isCompactViewport = window.matchMedia('(max-width: 980px)').matches;

      if (isPhotoTextTemplate(template)) {
        return {
          scale: isCompactViewport ? 1.33 : 1.45,
          focusX: 0.5,
          focusY: (isPhotoBottomTextTemplate(template)
            || isPhotoDiagonalTextTemplate(template)) ? 0.46 : 0.45,
        };
      }

      const isChestTextTemplate = ['emb-center', 'emb-left'].includes(template?.kind || '');
      if (!isChestTextTemplate) return null;

      return {
        scale: isCompactViewport ? 1.33 : 1.45,
        focusX: 0.5,
        focusY: 0.42,
      };
    }
    function getProductBaseImageScale(productId = state.product) {
      if (productId === 'tee-iznanka') return 1.06;
      return 1.12;
    }
    function getGarmentPreviewFocusScale(template = getSelectedTemplate()) {
      return getGarmentPreviewFocusConfig(template)?.scale || 1;
    }
    function getPreviewTextBlockStyleConfig(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template), lineCount = 1) {
      const rules = getPreviewTextRules(template, printSize);
      const previewFontScale = getPreviewFontScale(state.font, template);
      const previewWidthScale = getPreviewFontWidthScale(state.font, template);
      const previewFocusScale = getGarmentPreviewFocusScale(template);
      const previewTextFocusScale = previewFocusScale;
      const currentScale = getCurrentPrintScale(printSize?.id, template);
      const basePreviewFontSize = Number(printSize?.previewFontSize) || 28;
      let previewTop = rules.previewTop || DEFAULT_PREVIEW_TEXT_RULES.previewTop;
      let previewLeft = rules.previewLeft || '50%';
      let previewRight = rules.previewRight || 'auto';
      let previewWidth = rules.previewWidth || 'min(80%, var(--preview-text-max-width, 190px))';
      let previewTextAlign = rules.previewTextAlign || 'center';
      let previewTransformOrigin = rules.previewTransformOrigin || 'center top';

      if (rules.dynamicPreviewTop) {
        const baseTop = Number.parseFloat(String(previewTop).replace('%', ''));
        if (Number.isFinite(baseTop)) {
          previewTop = `${Math.max(24, baseTop - (Math.max(0, lineCount - 1) * 1.1))}%`;
        }
      }

      if (isPhotoDiagonalTextTemplate(template)) {
        const diagonalLayout = getPhotoDiagonalTextLayout(template, printSize, lineCount);
        if (diagonalLayout) {
          previewTop = diagonalLayout.previewTop;
          previewLeft = diagonalLayout.previewLeft;
          previewRight = 'auto';
          previewTextAlign = 'center';
          previewTransformOrigin = 'center top';
          previewWidth = rules.previewWidth || 'min(34%, var(--preview-text-max-width, 150px))';
        }
      } else if (isPhotoBottomTextTemplate(template)) {
        const layout = getTemplatePhotoLayout(template, getSelectedPhotoPrintSize(undefined, template), {
          printSize,
          lineCount,
        });
        const previewTopPercent = Number.parseFloat(String(layout?.previewTop || '').replace('%', ''));
        const previewHeightPercent = Number.parseFloat(String(layout?.previewHeight || '').replace('%', ''));
        if (Number.isFinite(previewTopPercent) && Number.isFinite(previewHeightPercent)) {
          previewTop = `${previewTopPercent + previewHeightPercent + ((PHOTO_BOTTOM_TEXT_PREVIEW_GAP / GARMENT_ARTBOARD_HEIGHT) * 100)}%`;
        }
      }

      const previewTextScale = Math.round(currentScale * 1000) / 1000;
      const previewTranslateX = String(rules.previewTranslateX || '').trim();
      const transformParts = [];
      if (previewTranslateX && previewTranslateX !== '0' && previewTranslateX !== '0%') {
        transformParts.push(`translateX(${previewTranslateX})`);
      }
      if (isPhotoDiagonalTextTemplate(template)) {
        transformParts.push(`rotate(${PHOTO_DIAGONAL_TEXT_ROTATION}deg)`);
      }
      transformParts.push(`scale(${previewTextScale})`);

      return {
        left: previewLeft,
        right: previewRight,
        width: previewWidth,
        transform: transformParts.join(' '),
        transformOrigin: previewTransformOrigin,
        textAlign: previewTextAlign,
        maxWidth: `${Math.round(rules.previewMaxWidth * previewWidthScale * previewTextFocusScale)}px`,
        lineHeight: String((rules.lineHeight || DEFAULT_PREVIEW_TEXT_RULES.lineHeight) * getLineHeightScale(state.font, template)),
        fontWeight: String(rules.fontWeight || DEFAULT_PREVIEW_TEXT_RULES.fontWeight),
        letterSpacing: rules.letterSpacing || DEFAULT_PREVIEW_TEXT_RULES.letterSpacing,
        previewTop,
        textTransform: rules.textTransform || (rules.uppercase ? 'uppercase' : 'none'),
        fontSize: `${(Math.round(basePreviewFontSize * previewFontScale * previewTextFocusScale * 100) / 100)}px`,
      };
    }
    function getPreviewTextRenderMetrics(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template), lineCount = 1, options = {}) {
      const { hasStandardUpload = false } = options;
      const config = getTemplateTextConfig(template);
      const rules = getPreviewTextRules(template, printSize);
      const currentScale = getCurrentPrintScale(printSize?.id, template);
      if (config) {
        const exportFontScale = getExportFontScale(state.font, template);
        const fontSize = (rules.exportFontSize || DEFAULT_PREVIEW_TEXT_RULES.exportFontSize) * exportFontScale;
        const lineHeight = (rules.exportLineHeight || DEFAULT_PREVIEW_TEXT_RULES.exportLineHeight) * exportFontScale * getLineHeightScale(state.font, template);
        if (isPhotoDiagonalTextTemplate(template)) {
          const diagonalLayout = getPhotoDiagonalTextLayout(template, printSize, lineCount);
          if (diagonalLayout) {
            return {
              x: diagonalLayout.exportX,
              anchor: 'middle',
              fontSize,
              lineHeight,
              y: diagonalLayout.exportY,
              rotation: diagonalLayout.rotation,
            };
          }
        }
        if (isPhotoBottomTextTemplate(template)) {
          const layout = getTemplatePhotoLayout(template, getSelectedPhotoPrintSize(undefined, template), {
            printSize,
            lineCount,
          });
          const textTop = Number(layout?.exportY || 0)
            + Number(layout?.exportHeight || 0)
            + PHOTO_BOTTOM_TEXT_EXPORT_GAP;
          return {
            x: rules.exportX || 500,
            anchor: rules.exportAnchor || 'middle',
            fontSize,
            lineHeight,
            y: textTop + fontSize,
          };
        }
        const centerY = hasStandardUpload ? rules.exportCenterYWithUpload : rules.exportCenterY;
        return {
          x: rules.exportX || 500,
          anchor: rules.exportAnchor || 'middle',
          fontSize,
          lineHeight,
          y: centerY,
        };
      }
      return {
        x: 500,
        anchor: 'middle',
        fontSize: 48 * currentScale,
        lineHeight: 56 * currentScale,
        y: template?.kind === 'emb-left' ? 430 : (hasStandardUpload ? 780 : 485),
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
      if (!templateSupportsText(template)) return '';
      return state.isEmbroideryText ? 'Вышивка' : 'Печать';
    }
    function templateSupportsText(template = getSelectedTemplate()) {
      if (!template || isCustomSelected()) return false;
      return [
        'emb-center',
        'emb-left',
        'photo-top-text',
        'photo-bottom-text',
        'photo-diagonal-text',
        'polaroid-top-text',
        'polaroid-diagonal-text',
        'polaroid-inside-text',
      ].includes(template.kind);
    }
    function normalizeTextCustomizationState() {
      const template = getSelectedTemplate();
      const availableSizes = getAvailablePrintSizes(template);
      const availablePhotoSizes = getAvailablePhotoPrintSizes(template);
      const availableFonts = getAvailableFontOptions(template);
      if (availableSizes.length && !availableSizes.some((item) => item.id === state.printSize)) {
        state.printSize = getDefaultPrintSizeId(template);
      }
      if (!isSimplePhotoTemplate(template) && availablePhotoSizes.length && !availablePhotoSizes.some((item) => item.id === state.photoPrintSize)) {
        state.photoPrintSize = getDefaultPhotoPrintSizeId(template);
      }
      if (isSimplePhotoTemplate(template)) {
        state.photoPrintSize = availablePhotoSizes.some((item) => item.id === state.printSize)
          ? state.printSize
          : getDefaultPhotoPrintSizeId(template);
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
    const isEmbroideryAvailable = (template = getSelectedTemplate()) => templateSupportsText(template) && getTemplateTextConfig(template)?.supportsEmbroidery !== false;
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
    let pendingRestoreSnapshot = null;
    let templatePreviewHydrationToken = 0;
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
      konvaLoadImage(normalizeExportImageUrl(POLAROID_FRAME_IMAGE_URL)).catch(() => {});
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
        photoPrintSize: state.photoPrintSize,
        textValue: getResolvedPreviewTextValue(state.textValue),
        textColor: state.textColor,
        font: state.font,
        selectedExtras: [...state.selectedExtras],
        selectedCustom: state.selectedCustom,
        stepTwoTab: getActiveStepTwoTab(),
        fastProduction: state.fastProduction,
        photoGrayscale: state.photoGrayscale,
        isEmbroideryText: state.isEmbroideryText,
        cropZoom: state.cropZoom,
        cropPosition: { ...state.cropPosition },
        cropRotation: 0,
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
    function hasMeaningfulPersistedSnapshot(snapshot = null) {
      const resolvedSnapshot = snapshot || getPersistenceSnapshot();
      const snapshotState = resolvedSnapshot?.state || {};
      const defaultState = createDefaultState();
      if (Array.isArray(resolvedSnapshot?.uploads) && resolvedSnapshot.uploads.length) return true;
      if (Object.values(resolvedSnapshot?.extrasCount || {}).some((value) => (Number(value) || 0) > 0)) return true;
      const comparableKeys = [
        'step',
        'product',
        'size',
        'seam',
        'color',
        'template',
        'printSize',
        'photoPrintSize',
        'textValue',
        'textColor',
        'font',
        'selectedCustom',
        'stepTwoTab',
        'fastProduction',
        'photoGrayscale',
        'isEmbroideryText',
        'email',
        'customerName',
        'phone',
        'comment',
        'policyAccepted',
        'processingAccepted',
        'checkoutTab',
      ];
      return comparableKeys.some((key) => {
        const snapshotValue = key === 'textValue'
          ? getResolvedPreviewTextValue(snapshotState?.[key])
          : (snapshotState?.[key] ?? null);
        const defaultValue = key === 'textValue'
          ? getResolvedPreviewTextValue(defaultState?.[key])
          : (defaultState?.[key] ?? null);
        return JSON.stringify(snapshotValue) !== JSON.stringify(defaultValue);
      });
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
      nextState.template = normalizeTemplateId(nextState.template);
      nextState.stepTwoTab = normalizeStepTwoTab(nextState.stepTwoTab) || (nextState.selectedCustom ? 'custom' : 'template');
      nextState.textValue = getResolvedPreviewTextValue(nextState.textValue);
      nextState.cropRotation = 0;
      if (shouldResetLegacyDefaultTemplate(snapshot.state, snapshot.extrasCount, snapshot.uploads, Number(snapshot.version) || 0)) {
        nextState.template = null;
      }
      Object.assign(state, nextState);
      state.orderId = normalizeOrderIdValue(state.orderId);
      state.productVariants = cloneProductVariants(state.productVariants);
      Object.keys(extrasCount).forEach((key) => delete extrasCount[key]);
      Object.entries(snapshot.extrasCount || {}).forEach(([key, value]) => {
        if (!extras.some((item) => item.id === key)) return;
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
      if (snapshot && hasMeaningfulPersistedSnapshot(snapshot)) {
        pendingRestoreSnapshot = snapshot;
        persistenceHydrated = true;
        return false;
      }
      if (snapshot) {
        applyPersistedSnapshot(snapshot);
        persistenceHydrated = true;
        return true;
      }
      persistenceHydrated = true;
      return false;
    }
    async function resumePendingPersistedProgress() {
      if (!pendingRestoreSnapshot) return false;
      closeModal('restoreProgressModal');
      setShellLoading(true);
      await waitForNextPaint();
      applyPersistedSnapshot(pendingRestoreSnapshot);
      pendingRestoreSnapshot = null;
      lastDesignLayerRenderKey = '';
      try {
        await preloadInitialRenderImages();
        render();
        return true;
      } finally {
        requestAnimationFrame(() => {
          setShellLoading(false);
        });
      }
    }
    async function discardPendingPersistedProgress() {
      pendingRestoreSnapshot = null;
      closeModal('restoreProgressModal');
      setShellLoading(true);
      await waitForNextPaint();
      revokeUploadObjectUrls(state.uploads);
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
        return true;
      } finally {
        requestAnimationFrame(() => {
          setShellLoading(false);
        });
      }
    }
    function getOrderPayload() {
      normalizeTextCustomizationState();
      state.orderId = normalizeOrderIdValue(state.orderId);
      const selectedTemplate = getSelectedTemplate();
      const hasTextCustomization = templateSupportsText(selectedTemplate);
      const hasPhotoSizeCustomization = templateSupportsPhotoPrintSizes(selectedTemplate);
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const applicationType = getApplicationTypeLabel(selectedTemplate);
      const configuredTextValue = hasTextCustomization
        ? getConfiguredTextValue(state.textValue, selectedTemplate, selectedPrintSize)
        : '';
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
        hasTextCustomization,
        hasPhotoSizeCustomization,
        photoPrintSize: hasPhotoSizeCustomization ? (selectedPhotoPrintSize?.name || '') : '',
        applicationType,
        textValue: configuredTextValue,
        textColor: hasTextCustomization ? state.textColor : '',
        fontId: hasTextCustomization ? state.font : '',
        font: hasTextCustomization ? getFontDisplayName(state.font, selectedTemplate) : '',
        fontNote: hasTextCustomization ? getFontOptionNote(state.font, selectedTemplate) : '',
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
        !isCustom && payload.hasTextCustomization ? `Принт ${payload.printSize}` : '',
        !isCustom && payload.hasPhotoSizeCustomization ? `Фото ${payload.photoPrintSize}` : '',
        !isCustom && payload.hasTextCustomization && payload.printHeight ? `Высота ${payload.printHeight}` : '',
        !isCustom && payload.hasTextCustomization && payload.applicationType ? `Нанесение ${payload.applicationType}` : '',
        !isCustom && payload.hasTextCustomization && payload.textValue ? `Текст ${payload.textValue}` : '',
        !isCustom && payload.hasTextCustomization && payload.textColor ? `Цвет текста ${getPrintColorLabel(payload.textColor)}` : '',
        !isCustom && payload.hasTextCustomization && payload.font ? `Шрифт ${payload.font}` : '',
        !isCustom && payload.hasTextCustomization && payload.fontNote ? payload.fontNote : '',
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
    function splitPreviewTextDetailed(value, maxCharsPerLine = 14, maxLines = 5, options = {}) {
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
          if (lines.length < maxVisibleLines) {
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
    function splitPreviewText(value, maxCharsPerLine = 14, maxLines = 5, options = {}) {
      return splitPreviewTextDetailed(value, maxCharsPerLine, maxLines, options).lines;
    }
    function normalizeTextInputValue(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      if (isSimplePhotoTemplate(template)) return '';
      const rules = getPreviewTextRules(template, printSize);
      const maxChars = Math.max(1, Number(rules.maxCharsPerLine) || 14);
      const maxLines = Math.max(1, Number(rules.maxLines) || 5);
      // Split by newlines, limit each line to maxChars, limit total lines
      const lines = String(value || '')
        .replace(/\r\n?/g, '\n')
        .split('\n')
        .slice(0, maxLines)
        .map((line) => line.slice(0, maxChars));
      return lines.join('\n');
    }
    function getPreviewTextBreakdown(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      const rules = getPreviewTextRules(template, printSize);
      return splitPreviewTextDetailed(getResolvedPreviewTextValue(value), rules.maxCharsPerLine, rules.maxLines, {
        uppercase: rules.uppercase,
      });
    }
    function getPreviewTextLines(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      return getPreviewTextBreakdown(value, template, printSize).lines;
    }
    function getConfiguredTextValue(value = state.textValue, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      if (isSimplePhotoTemplate(template)) return '';
      return getPreviewTextLines(value, template, printSize)
        .join('\n')
        .trim();
    }
    function syncStepFourTextInputHeight(textInput, template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template)) {
      if (!textInput) return;
      const styles = window.getComputedStyle(textInput);
      const lineHeight = Number.parseFloat(styles.lineHeight) || 20;
      const paddingTop = Number.parseFloat(styles.paddingTop) || 0;
      const paddingBottom = Number.parseFloat(styles.paddingBottom) || 0;
      const borderTop = Number.parseFloat(styles.borderTopWidth) || 0;
      const borderBottom = Number.parseFloat(styles.borderBottomWidth) || 0;
      const verticalInsets = paddingTop + paddingBottom + borderTop + borderBottom;
      const rules = getPreviewTextRules(template, printSize);
      const minHeight = Math.ceil(lineHeight + verticalInsets);
      const maxHeight = Math.ceil((lineHeight * Math.max(1, Number(rules.maxLines) || 1)) + verticalInsets);

      textInput.style.height = 'auto';
      textInput.style.height = `${Math.min(maxHeight, Math.max(minHeight, textInput.scrollHeight))}px`;
    }
    function getPreviewTextLetterSpacingValue(template = getSelectedTemplate(), printSize = getSelectedPrintSize(undefined, template), fontSize = 16) {
      const rules = getPreviewTextRules(template, printSize);
      const rawValue = String(rules.letterSpacing || '').trim();
      if (!rawValue) return 0;
      const parsed = Number.parseFloat(rawValue);
      if (!Number.isFinite(parsed)) return 0;
      if (/em$/i.test(rawValue)) return parsed * Math.max(1, Number(fontSize) || 16);
      return parsed;
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
        fontWeight = 600,
        letterSpacing = 0,
        rotation = 0,
      } = options;
      return `
        <text
          x="${x}"
          y="${y}"
          fill="${escapeSvg(fill)}"
          font-family="${escapeSvg(fontFamily)}"
          font-size="${fontSize}"
          font-weight="${escapeSvg(fontWeight)}"
          letter-spacing="${escapeSvg(letterSpacing)}"
          text-anchor="${anchor}"
          ${rotation ? `transform="rotate(${rotation} ${x} ${y})"` : ''}
        >
          ${lines.map((line, index) => `
            <tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeSvg(line)}</tspan>
          `).join('')}
        </text>
      `;
    }
    function renderPreviewSvgScene(options = {}) {
      const {
        width = 100,
        height = 100,
        content = '',
      } = options;
      return `
        <svg
          viewBox="0 0 ${width} ${height}"
          preserveAspectRatio="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${content}
        </svg>
      `;
    }
    function renderTemplatePreviewText(lines = [], options = {}) {
      if (!lines.length) return '';
      const {
        x = 50,
        y = 50,
        lineHeight = 10,
        fontSize = 8,
        anchor = 'middle',
        fill = '#111111',
        rotation = 0,
        fontWeight = 700,
        letterSpacing = 0,
      } = options;
      return renderSvgTextBlock(lines, {
        x,
        y,
        lineHeight,
        fontSize,
        fill,
        fontFamily: 'Inter, system-ui, sans-serif',
        anchor,
        fontWeight,
        letterSpacing,
        rotation,
      });
    }
    function renderTemplatePreviewPhotoBox(options = {}) {
      const {
        x = 18,
        y = 18,
        width = 64,
        height = 64,
        radius = 8,
        fill = '#ffffff',
        stroke = '#d5dae1',
        dashed = true,
        labelLines = ['ТУТ БУДЕТ', 'ВАШЕ ФОТО'],
      } = options;
      return `
        <rect
          x="${x}"
          y="${y}"
          width="${width}"
          height="${height}"
          rx="${radius}"
          fill="${fill}"
          stroke="${stroke}"
          stroke-width="1.6"
          ${dashed ? 'stroke-dasharray="5 4"' : ''}
        />
        ${renderTemplatePreviewText(labelLines, {
          x: x + (width / 2),
          y: y + (height / 2) - 6,
          lineHeight: 8,
          fontSize: 6,
          anchor: 'middle',
          fill: '#7b8593',
          fontWeight: 700,
          letterSpacing: 0.4,
        })}
      `;
    }
    function buildTemplatePreviewSvgMarkup(template, mode = 'template') {
      if (!template) return '';
      return konvaBuildTemplatePreviewSvg(template.kind, mode);
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
        photoPrintSize: state.photoPrintSize,
        textValue: state.textValue,
        textColor: state.textColor,
        font: state.font,
        uploadUrls: state.uploads.map((upload) => upload?.url || ''),
        cropZoom: state.cropZoom,
        cropPosition: state.cropPosition,
        cropRotation: 0,
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
        payload.hasTextCustomization ? `Размер принта: ${payload.printSize}` : '',
        payload.hasPhotoSizeCustomization ? `Размер фото: ${payload.photoPrintSize}` : '',
        payload.hasTextCustomization && payload.printHeight ? `Высота букв: ${payload.printHeight}` : '',
        payload.hasTextCustomization && payload.applicationType ? `Нанесение: ${payload.applicationType}` : '',
        payload.hasTextCustomization ? `Текст: ${payload.textValue || '—'}` : '',
        payload.hasTextCustomization && payload.textColor ? `Цвет текста: ${getPrintColorLabel(payload.textColor)}` : '',
        payload.hasTextCustomization && payload.font ? `Шрифт: ${payload.font}` : '',
        payload.hasTextCustomization && payload.fontNote ? `Примечание к шрифту: ${payload.fontNote}` : '',
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
    function setStepTwoTab(nextTab) {
      const resolvedTab = normalizeStepTwoTab(nextTab) || 'template';
      if (state.stepTwoTab === resolvedTab) return;
      state.stepTwoTab = resolvedTab;
      renderPreservingStepContentScroll();
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
      if (stepId === 4) {
        const template = getSelectedTemplate();
        if (isSimplePhotoTemplate(template)) return Boolean(getSelectedPhotoPrintSize(undefined, template));
        return Boolean(getConfiguredTextValue());
      }
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
    function goToCheckoutStep() {
      closeModal('designerModal');
      mobileStepNavScrollPending = true;
      state.step = 6;
      state.checkoutTab = 'review';
      render();
    }
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
      const checkoutTrigger = e.target.closest('[data-go-checkout]');
      if (checkoutTrigger) {
        goToCheckoutStep();
        return;
      }
      const resumeProgressTrigger = e.target.closest('[data-resume-progress]');
      if (resumeProgressTrigger) {
        void resumePendingPersistedProgress();
        return;
      }
      const discardProgressTrigger = e.target.closest('[data-discard-progress]');
      if (discardProgressTrigger) {
        void discardPendingPersistedProgress();
        return;
      }
      const target = e.target.closest('[data-close]');
      if (target) closeModal(target.dataset.close);
      if (e.target.classList.contains('modal') && e.target.id !== 'restoreProgressModal') e.target.classList.remove('open');
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
        editorImage.style.transform = `translate(${state.cropPosition.x}%, ${state.cropPosition.y}%) scale(${state.cropZoom})`;
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
      const tx = state.cropPosition.x;
      const ty = state.cropPosition.y;
      const zoom = state.cropZoom;
      document.querySelectorAll('#designLayer .crop-image').forEach((img) => {
        img.style.filter = filter;
        img.style.setProperty('--crop-offset-x', `${tx}%`);
        img.style.setProperty('--crop-offset-y', `${ty}%`);
        img.style.setProperty('--crop-scale', String(zoom));
      });
      lastDesignLayerRenderKey = getDesignLayerRenderState().key;
      schedulePersistenceSave();
    }
    function isPreviewInspectEnabled() {
      // Disable inspect/zoom when Konva dev mode is active (would block drag)
      if (KONVA_DEV_MODE && isKonvaAvailable()) return false;
      return state.step === 4 && !isCustomSelected();
    }
    function isDesktopPreviewInspectEnabled() {
      return isPreviewInspectEnabled() && window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 769px)').matches;
    }
    function isMobilePreviewInspectEnabled() {
      return isPreviewInspectEnabled() && window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;
    }
    function ensurePreviewGestureHintElement() {
      const garmentWrap = document.getElementById('garmentWrap');
      if (!garmentWrap) return null;
      let hint = garmentWrap.querySelector('.preview-gesture-hint');
      if (hint) return hint;
      hint = document.createElement('div');
      hint.className = 'preview-gesture-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.25 3.75H3.75V9.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.75 3.75H20.25V9.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.25 20.25H3.75V14.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.75 20.25H20.25V14.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.25 8.25L3.75 3.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M15.75 8.25L20.25 3.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M8.25 15.75L3.75 20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M15.75 15.75L20.25 20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `;
      garmentWrap.appendChild(hint);
      return hint;
    }
    function syncPreviewInspectState() {
      const garment = document.getElementById('garment');
      if (!garment) return;
      garment.style.setProperty('--preview-inspect-scale', String(Math.round(previewInspectScale * 1000) / 1000));
      garment.style.setProperty('--preview-inspect-origin-x', `${Math.round(previewInspectOrigin.x * 1000) / 1000}%`);
      garment.style.setProperty('--preview-inspect-origin-y', `${Math.round(previewInspectOrigin.y * 1000) / 1000}%`);
      garment.style.setProperty('--preview-inspect-shift-x', `${Math.round(previewInspectShift.x * 1000) / 1000}px`);
      garment.style.setProperty('--preview-inspect-shift-y', `${Math.round(previewInspectShift.y * 1000) / 1000}px`);
      garment.classList.toggle('is-inspecting', previewInspectScale > 1.001);
    }
    function resetPreviewInspectState() {
      previewInspectScale = 1;
      previewInspectOrigin = { x: 50, y: 50 };
      previewInspectShift = { x: 0, y: 0 };
      syncPreviewInspectState();
    }
    function updatePreviewInspectOriginFromPoint(clientX, clientY, element) {
      if (!(element instanceof HTMLElement)) return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      previewInspectOrigin = {
        x: clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
        y: clamp(((clientY - rect.top) / rect.height) * 100, 0, 100),
      };
    }
    function clampPreviewInspectShift(element) {
      const garmentWrap = element instanceof HTMLElement ? element : document.getElementById('garmentWrap');
      if (!(garmentWrap instanceof HTMLElement) || previewInspectScale <= 1.001) {
        previewInspectShift = { x: 0, y: 0 };
        return;
      }
      const rect = garmentWrap.getBoundingClientRect();
      const maxX = Math.max(0, ((previewInspectScale - 1) * rect.width) / 2);
      const maxY = Math.max(0, ((previewInspectScale - 1) * rect.height) / 2);
      previewInspectShift = {
        x: clamp(previewInspectShift.x, -maxX, maxX),
        y: clamp(previewInspectShift.y, -maxY, maxY),
      };
    }
    function bindPreviewInspectInteractions() {
      if (previewInspectController) {
        previewInspectController.abort();
        previewInspectController = null;
      }
      if (!isPreviewInspectEnabled()) {
        resetPreviewInspectState();
        return;
      }
      const garmentWrap = document.getElementById('garmentWrap');
      if (!garmentWrap) return;
      previewInspectController = new AbortController();
      const signal = previewInspectController.signal;

      if (isDesktopPreviewInspectEnabled()) {
        garmentWrap.addEventListener('mouseenter', (e) => {
          updatePreviewInspectOriginFromPoint(e.clientX, e.clientY, garmentWrap);
          previewInspectScale = 1.32;
          previewInspectShift = { x: 0, y: 0 };
          syncPreviewInspectState();
        }, { signal });
        garmentWrap.addEventListener('mousemove', (e) => {
          updatePreviewInspectOriginFromPoint(e.clientX, e.clientY, garmentWrap);
          previewInspectScale = 1.32;
          previewInspectShift = { x: 0, y: 0 };
          syncPreviewInspectState();
        }, { signal });
        garmentWrap.addEventListener('mouseleave', () => {
          resetPreviewInspectState();
        }, { signal });
      }

      if (isMobilePreviewInspectEnabled()) {
        let pinchInfo = null;
        let panInfo = null;
        const activePointers = new Map();
        let lastTouchStartAt = 0;
        const getGesturePoints = () => Array.from(activePointers.values()).slice(0, 2);
        const getPointerDistance = (firstPoint, secondPoint) => Math.hypot(
          secondPoint.x - firstPoint.x,
          secondPoint.y - firstPoint.y
        );
        const startPinchGesture = () => {
          const [firstPoint, secondPoint] = getGesturePoints();
          if (!firstPoint || !secondPoint) return;
          pinchInfo = {
            startDistance: Math.max(1, getPointerDistance(firstPoint, secondPoint)),
            startScale: previewInspectScale,
            startMidX: (firstPoint.x + secondPoint.x) / 2,
            startMidY: (firstPoint.y + secondPoint.y) / 2,
            startShiftX: previewInspectShift.x,
            startShiftY: previewInspectShift.y,
          };
          panInfo = null;
          garmentWrap.classList.add('dragging-photo');
        };
        const stopPinchGesture = () => {
          pinchInfo = null;
        };
        const startPanGesture = (point) => {
          if (previewInspectScale <= 1.001) {
            panInfo = null;
            garmentWrap.classList.remove('dragging-photo');
            return;
          }
          panInfo = {
            startX: point.x,
            startY: point.y,
            startShiftX: previewInspectShift.x,
            startShiftY: previewInspectShift.y,
          };
          garmentWrap.classList.add('dragging-photo');
        };

        garmentWrap.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'mouse' || e.target.closest('input, button, label')) return;
          activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          try { garmentWrap.setPointerCapture(e.pointerId); } catch (_) {}
          if (activePointers.size >= 2) {
            e.preventDefault();
            startPinchGesture();
            return;
          }
          if (previewInspectScale > 1.001 && (e.timeStamp - lastTouchStartAt) < 280) {
            resetPreviewInspectState();
          }
          startPanGesture({ x: e.clientX, y: e.clientY });
          lastTouchStartAt = e.timeStamp;
        }, { signal });

        garmentWrap.addEventListener('pointermove', (e) => {
          if (!activePointers.has(e.pointerId)) return;
          activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          if (!pinchInfo || activePointers.size < 2) return;
          e.preventDefault();
          const [firstPoint, secondPoint] = getGesturePoints();
          if (!firstPoint || !secondPoint) return;
          const nextDistance = Math.max(1, getPointerDistance(firstPoint, secondPoint));
          const midX = (firstPoint.x + secondPoint.x) / 2;
          const midY = (firstPoint.y + secondPoint.y) / 2;
          updatePreviewInspectOriginFromPoint(midX, midY, garmentWrap);
          previewInspectScale = clamp(pinchInfo.startScale * (nextDistance / pinchInfo.startDistance), 1, 2.6);
          previewInspectShift = {
            x: pinchInfo.startShiftX + (midX - pinchInfo.startMidX),
            y: pinchInfo.startShiftY + (midY - pinchInfo.startMidY),
          };
          clampPreviewInspectShift(garmentWrap);
          syncPreviewInspectState();
          return;
        }, { signal });

        garmentWrap.addEventListener('pointermove', (e) => {
          if (!activePointers.has(e.pointerId) || pinchInfo || !panInfo) return;
          if (previewInspectScale <= 1.001) return;
          e.preventDefault();
          previewInspectShift = {
            x: panInfo.startShiftX + (e.clientX - panInfo.startX),
            y: panInfo.startShiftY + (e.clientY - panInfo.startY),
          };
          clampPreviewInspectShift(garmentWrap);
          syncPreviewInspectState();
        }, { signal });

        const stopPreviewInspect = (e) => {
          activePointers.delete(e.pointerId);
          if (e?.pointerId != null) {
            try { garmentWrap.releasePointerCapture(e.pointerId); } catch (_) {}
          }
          if (activePointers.size >= 2) {
            startPinchGesture();
            return;
          }
          if (activePointers.size === 1) {
            const [remainingPoint] = getGesturePoints();
            if (remainingPoint) {
              startPanGesture(remainingPoint);
              stopPinchGesture();
              return;
            }
          }
          stopPinchGesture();
          panInfo = null;
          garmentWrap.classList.remove('dragging-photo');
        };
        garmentWrap.addEventListener('pointerup', stopPreviewInspect, { signal });
        garmentWrap.addEventListener('pointercancel', stopPreviewInspect, { signal });
      }
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
      return 'portrait';
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

// ===== constructor-checkout-mvp-tilda-js-1-preview.html =====
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
      clonedWrap.querySelectorAll('#checkoutPreviewFlat, .garment-drop-overlay, .preview-gesture-hint').forEach((node) => node.remove());
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
      const centerX = (width / 2) + ((state.cropPosition.x / 100) * width);
      const centerY = (height / 2) + ((state.cropPosition.y / 100) * height);
      ctx.clearRect(0, 0, width, height);
      ctx.filter = state.photoGrayscale ? 'grayscale(1)' : 'none';
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(zoom, zoom);
      ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
      ctx.restore();
      return canvas.toDataURL('image/png');
    }
    async function createCheckoutCompositePreviewUrl(options = {}) {
      const { embedAssets = false } = options;
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const baseImageUrl = getCurrentProductImage();
      const baseImageHref = embedAssets ? await fetchImageAsDataUrl(baseImageUrl) : baseImageUrl;
      const hasStandardUpload = Boolean(state.uploads[state.activeUploadIndex] || state.uploads[0])
        && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
      const standardPhotoX = 300;
      const standardPhotoY = 363;
      const standardPhotoWidth = 400;
      const standardPhotoHeight = 350;
      const fontFamily = getFontFamily(state.font);
      const textLines = getPreviewTextLines(state.textValue, selectedTemplate, selectedPrintSize);
      const textRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const templatePhotoLayout = getTemplatePhotoLayout(selectedTemplate, selectedPhotoPrintSize, {
        printSize: selectedPrintSize,
        lineCount: textLines.length,
      });
      const standardUploadPreviewUrl = hasStandardUpload
        ? await createTemplatePhotoDataUrl(
          templatePhotoLayout?.exportWidth || standardPhotoWidth,
          templatePhotoLayout?.exportHeight || standardPhotoHeight
        )
        : '';
      const baseScale = getProductBaseImageScale(getSelectedProduct()?.id);
      const baseX = 500;
      const baseY = 625;
      const baseGroup = `
        <g transform="translate(${baseX} ${baseY}) scale(${baseScale}) translate(-${baseX} -${baseY})">
          <image href="${escapeSvg(baseImageHref)}" x="0" y="0" width="1000" height="1250" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;
      let designMarkup = '';
      if (state.selectedCustom) {
        designMarkup = '';
      } else if (selectedTemplate) {
        if ((isPhotoTextTemplate(selectedTemplate) || templatePhotoLayout) && templatePhotoLayout) {
          const hasText = isPhotoTextTemplate(selectedTemplate);
          const textMetrics = hasText ? getPreviewTextRenderMetrics(selectedTemplate, selectedPrintSize, textLines.length, {
            hasStandardUpload: false,
          }) : null;
          const textMarkup = (hasText && textMetrics) ? renderSvgTextBlock(textLines, {
            x: textMetrics.x,
            y: textMetrics.y,
            lineHeight: textMetrics.lineHeight,
            fontSize: textMetrics.fontSize,
            fill: state.textColor,
            fontFamily,
            anchor: textMetrics.anchor,
            fontWeight: textRules.fontWeight,
            letterSpacing: textRules.letterSpacing,
            rotation: textMetrics.rotation,
          }) : '';
          const photoMarkup = standardUploadPreviewUrl ? `
            <image
              href="${escapeSvg(standardUploadPreviewUrl)}"
              x="${templatePhotoLayout.exportX}"
              y="${templatePhotoLayout.exportY}"
              width="${templatePhotoLayout.exportWidth}"
              height="${templatePhotoLayout.exportHeight}"
              preserveAspectRatio="xMidYMid slice"
            />
          ` : '';
          // Polaroid frame overlay
          let frameMarkup = '';
          const konvaConfig = KONVA_TEMPLATE_CONFIGS[selectedTemplate?.kind];
          if (konvaConfig?.isPolaroid) {
            const polaroidFrameHref = await fetchImageAsDataUrl(POLAROID_FRAME_IMAGE_URL);
            if (polaroidFrameHref) {
              const fd = konvaConfig.frameDefaults || konvaConfig.photoDefaults || {};
              const photoPsId = selectedPhotoPrintSize?.id || '';
              const cKey = (selectedPrintSize?.id && photoPsId) ? `${selectedPrintSize.id}:${photoPsId}` : '';
              const fOvr = (konvaConfig.printSizeOverrides && (konvaConfig.printSizeOverrides[cKey] || konvaConfig.printSizeOverrides[photoPsId])) || {};
              const fScale = fOvr.frameScale ?? fd.scale ?? 1;
              const fW = (Number(selectedPhotoPrintSize?.exportWidth) || 110) * fScale;
              const fH = (Number(selectedPhotoPrintSize?.exportHeight) || 138) * fScale;
              const fX = fOvr.frameExportX ?? fd.exportX ?? (1000 - fW) / 2;
              const fY = fOvr.frameExportY ?? fd.exportY ?? 430;
              frameMarkup = `
                <image
                  href="${escapeSvg(polaroidFrameHref)}"
                  x="${fX}" y="${fY}" width="${fW}" height="${fH}"
                  preserveAspectRatio="xMidYMid meet"
                />
              `;
            }
          }
          const isPhotoFirst = isPhotoBottomTextTemplate(selectedTemplate)
            || isPhotoDiagonalTextTemplate(selectedTemplate)
            || !hasText;
          designMarkup = isPhotoFirst
            ? `${photoMarkup}${frameMarkup}${textMarkup}`
            : `${textMarkup}${frameMarkup}${photoMarkup}`;
        } else {
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
            x: textMetrics.x,
            y: textMetrics.y,
            lineHeight: textMetrics.lineHeight,
            fontSize: textMetrics.fontSize,
            fill: state.textColor,
            fontFamily,
            anchor: textMetrics.anchor,
            fontWeight: textRules.fontWeight,
            letterSpacing: textRules.letterSpacing,
          });
          designMarkup = `${uploadMarkup}${designMarkup}`;
        }
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
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const fontFamily = getFontFamily(state.font);
      const textLines = getPreviewTextLines(state.textValue, selectedTemplate, selectedPrintSize);
      const textRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const templatePhotoLayout = getTemplatePhotoLayout(selectedTemplate, selectedPhotoPrintSize, {
        printSize: selectedPrintSize,
        lineCount: textLines.length,
      });
      const domMetrics = getCheckoutPreviewDomMetrics();
      const hasStandardUpload = Boolean(state.uploads[state.activeUploadIndex] || state.uploads[0])
        && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
      const designLayer = document.getElementById('designLayer');
      const canUseDomPreview = Boolean(domMetrics && designLayer && designLayer.style.display !== 'none');
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
      if (canUseDomPreview) {
        const domRendered = await renderStandardPreviewCanvasFromDom(ctx, domMetrics);
        if (domRendered) {
          ctx.restore();
          return true;
        }
      }
      if (templatePhotoLayout) {
        const hasText = isPhotoTextTemplate(selectedTemplate);
        // Draw photo
        if (hasStandardUpload) {
          await drawCurrentUploadToCanvas(
            ctx,
            templatePhotoLayout.exportX,
            templatePhotoLayout.exportY,
            templatePhotoLayout.exportWidth,
            templatePhotoLayout.exportHeight
          );
        } else {
          drawCanvasPhotoPlaceholder(
            ctx,
            templatePhotoLayout.exportX,
            templatePhotoLayout.exportY,
            templatePhotoLayout.exportWidth,
            templatePhotoLayout.exportHeight,
            { radius: 14 }
          );
        }
        // Draw polaroid frame if applicable
        const konvaConfig = KONVA_TEMPLATE_CONFIGS[selectedTemplate?.kind];
        if (konvaConfig?.isPolaroid) {
          const fd = konvaConfig.frameDefaults || konvaConfig.photoDefaults || {};
          const photoPsId = selectedPhotoPrintSize?.id || '';
          const cKey = (selectedPrintSize?.id && photoPsId) ? `${selectedPrintSize.id}:${photoPsId}` : '';
          const fOvr = (konvaConfig.printSizeOverrides && (konvaConfig.printSizeOverrides[cKey] || konvaConfig.printSizeOverrides[photoPsId])) || {};
          const fScale = fOvr.frameScale ?? fd.scale ?? 1;
          const fW = (Number(selectedPhotoPrintSize?.exportWidth) || 110) * fScale;
          const fH = (Number(selectedPhotoPrintSize?.exportHeight) || 138) * fScale;
          const fX = fOvr.frameExportX ?? fd.exportX ?? (1000 - fW) / 2;
          const fY = fOvr.frameExportY ?? fd.exportY ?? 430;
          const polaroidFrameSource = await fetchImageAsDataUrl(POLAROID_FRAME_IMAGE_URL);
          if (polaroidFrameSource) {
            await drawCanvasContainImage(ctx, polaroidFrameSource, fX, fY, fW, fH);
          }
        }
        // Draw text
        if (hasText) {
          const textMetrics = getPreviewTextRenderMetrics(selectedTemplate, selectedPrintSize, textLines.length, {
            hasStandardUpload: false,
          });
          drawCanvasTextBlock(ctx, textLines, {
            x: textMetrics.x,
            y: textMetrics.y,
            lineHeight: textMetrics.lineHeight,
            fontSize: textMetrics.fontSize,
            fill: state.textColor,
            fontFamily,
            anchor: textMetrics.anchor,
            fontWeight: textRules.fontWeight,
            letterSpacing: getPreviewTextLetterSpacingValue(selectedTemplate, selectedPrintSize, textMetrics.fontSize),
            rotation: textMetrics.rotation,
          });
        }
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
        x: textMetrics.x,
        y: textMetrics.y,
        lineHeight: textMetrics.lineHeight,
        fontSize: textMetrics.fontSize,
        fill: state.textColor,
        fontFamily,
        anchor: textMetrics.anchor,
        fontWeight: textRules.fontWeight,
        letterSpacing: getPreviewTextLetterSpacingValue(selectedTemplate, selectedPrintSize, textMetrics.fontSize),
      });
      ctx.restore();
      return true;
    }
    async function createCheckoutCompositePreviewUiSourceUrl() {
      const selectedTemplate = getSelectedTemplate();
      if (document.fonts?.ready) {
        try { await document.fonts.ready; } catch (_) {}
      }
      try { await ensureSelectedPreviewFontReady(selectedTemplate); } catch (_) {}
      await waitForCurrentBaseImageReady().catch(() => {});

      // --- Primary: Konva export for UI preview ---
      if (isKonvaAvailable()) {
        try {
          const sceneParams = buildKonvaSceneParams();
          const baseImageDataUrl = sceneParams.baseImageSrc
            ? await fetchImageAsDataUrl(sceneParams.baseImageSrc)
            : null;
          const frameDataUrl = sceneParams.frameSrc
            ? await fetchImageAsDataUrl(sceneParams.frameSrc)
            : null;
          const exportParams = {
            ...sceneParams,
            baseImageSrc: baseImageDataUrl || sceneParams.baseImageSrc,
            frameSrc: frameDataUrl || sceneParams.frameSrc,
          };
          const scene = konvaResolveScene(exportParams);
          const dataUrl = await konvaExportToDataURL(scene, {
            mimeType: 'image/png',
            quality: 0.92,
          });
          if (dataUrl) return dataUrl;
        } catch (error) {
          console.warn('Konva UI source URL export failed, falling back.', error);
        }
      }

      // --- Legacy fallback ---
      const isIosSafari = isLikelyIosWebkit();
      const preferCanvasPreview = templateSupportsText(selectedTemplate)
        || isSimplePhotoTemplate(selectedTemplate);
      return withLiveCheckoutPreviewScene(async () => {
        let canvasPreview = null;
        if (preferCanvasPreview || isIosSafari) {
          canvasPreview = await createCheckoutCompositePreviewFileFromCanvas('image/png');
          if (canvasPreview.dataUrl) return canvasPreview.dataUrl;
        }
        if (!isIosSafari) {
          let domPreviewSourceUrl = '';
          try {
            domPreviewSourceUrl = await createCheckoutCompositePreviewFromDomUrl();
          } catch (error) {
            console.warn('Не удалось собрать checkout preview из live DOM, использую fallback export.', error);
          }
          if (domPreviewSourceUrl) return domPreviewSourceUrl;
        }
        let embeddedPreviewSourceUrl = '';
        try {
          embeddedPreviewSourceUrl = await createCheckoutCompositePreviewUrl({ embedAssets: true });
        } catch (error) {
          console.warn('Failed to build checkout preview in SVG fallback.', error);
        }
        return embeddedPreviewSourceUrl || canvasPreview?.dataUrl || '';
      });
    }
    async function getCheckoutCompositePreviewUrl(options = {}) {
      const { embedAssets = false } = options;
      if (embedAssets) {
        return createCheckoutCompositePreviewUrl({ embedAssets: true });
      }
      const selectedTemplate = getSelectedTemplate();
      const cacheKey = getCheckoutPreviewCacheKey();
      if (checkoutPreviewCacheKey === cacheKey && checkoutPreviewCacheUrl) {
        return checkoutPreviewCacheUrl;
      }
      let previewUrl = '';
      const hasPreviewableDesign = templateSupportsText(selectedTemplate)
        || templateSupportsPhotoPrintSizes(selectedTemplate)
        || isSimplePhotoTemplate(selectedTemplate);
      if (hasPreviewableDesign) {
        previewUrl = await createCheckoutCompositePreviewUiSourceUrl();
      }
      if (!previewUrl) {
        previewUrl = await createCheckoutCompositePreviewUrl();
      }
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
      // --- Primary path: Konva export ---
      if (isKonvaAvailable()) {
        const selectedTemplate = getSelectedTemplate();
        if (document.fonts?.ready) {
          try { await document.fonts.ready; } catch (_) {}
        }
        try { await ensureSelectedPreviewFontReady(selectedTemplate); } catch (_) {}
        await waitForCurrentBaseImageReady().catch(() => {});

        try {
          const sceneParams = buildKonvaSceneParams();
          const baseImageDataUrl = sceneParams.baseImageSrc
            ? await fetchImageAsDataUrl(sceneParams.baseImageSrc)
            : null;
          const frameDataUrl = sceneParams.frameSrc
            ? await fetchImageAsDataUrl(sceneParams.frameSrc)
            : null;

          const exportParams = {
            ...sceneParams,
            baseImageSrc: baseImageDataUrl || sceneParams.baseImageSrc,
            frameSrc: frameDataUrl || sceneParams.frameSrc,
          };
          const scene = konvaResolveScene(exportParams);
          const extension = type === 'image/png' ? 'png' : 'jpg';
          const dataUrl = await konvaExportToDataURL(scene, {
            width: 1200,
            height: 1500,
            mimeType: type,
            quality,
          });
          if (dataUrl) {
            const blob = konvaDataURLToBlob(dataUrl);
            const file = blob
              ? new File([blob], buildCheckoutCompositeFileName(extension), { type })
              : null;
            return { dataUrl, file, kind: 'konva-export' };
          }
        } catch (error) {
          console.warn('Konva export failed, falling back to legacy.', error);
        }
      }

      // --- Legacy fallback ---
      return withLiveCheckoutPreviewScene(async () => {
        const selectedTemplate = getSelectedTemplate();
        if (document.fonts?.ready) {
          try { await document.fonts.ready; } catch (_) {}
        }
        try { await ensureSelectedPreviewFontReady(selectedTemplate); } catch (_) {}
        await waitForCurrentBaseImageReady();

        const canvasPreview = await createCheckoutCompositePreviewFileFromCanvas(type, quality);
        if (canvasPreview.file) {
          return { ...canvasPreview, kind: 'raster-canvas-fallback' };
        }
        const embeddedPreviewSourceUrl = await createCheckoutCompositePreviewUrl({ embedAssets: true }).catch(() => '');
        const embeddedPreview = await createCheckoutCompositePreviewFileFromSourceUrl(embeddedPreviewSourceUrl, type, quality);
        return { ...embeddedPreview, kind: 'raster-embedded-svg-fallback' };
      });
    }
    function resetCheckoutCompositePreview() {
      checkoutPreviewRenderToken += 1;
      const flatPreview = document.getElementById('checkoutPreviewFlat');
      const baseImage = document.getElementById('baseImage');
      const designLayer = document.getElementById('designLayer');
      setGarmentPreviewLoading(false);
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
      setGarmentPreviewLoading(true, GARMENT_LOADING_LABELS.template);
      try {
        if (document.fonts?.ready) {
          try {
            await document.fonts.ready;
          } catch (_) {}
        }
        try {
          await ensureSelectedPreviewFontReady(getSelectedTemplate());
        } catch (_) {}
        await waitForCurrentBaseImageReady().catch(() => {});
        const previewUrl = await getCheckoutCompositePreviewUrl();
        if (renderToken !== checkoutPreviewRenderToken) return;
        flatPreview.src = previewUrl;
      } catch (error) {
        if (renderToken !== checkoutPreviewRenderToken) return;
        console.warn('Не удалось собрать checkout preview.', error);
        flatPreview.style.display = 'none';
        baseImage.style.visibility = '';
        designLayer.style.display = '';
      } finally {
        if (renderToken === checkoutPreviewRenderToken) {
          setGarmentPreviewLoading(false);
        }
      }
    }
    function shouldUseCheckoutCompositePreviewInUi(template = getSelectedTemplate()) {
      if (!template || state.selectedCustom) return false;
      if (state.step === 1 || state.step === 3 || state.step === 4) return false;
      const hasPreviewableDesign = templateSupportsText(template)
        || templateSupportsPhotoPrintSizes(template)
        || isSimplePhotoTemplate(template);
      if (!hasPreviewableDesign) return false;
      if (isLikelyIosWebkit()) return true;
      return false;
    }
    function syncCheckoutCompositePreviewInUi() {
      if (!shouldUseCheckoutCompositePreviewInUi()) {
        resetCheckoutCompositePreview();
        return;
      }
      void renderCheckoutCompositePreview().catch(() => {
        resetCheckoutCompositePreview();
      });
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
        cropRotation: 0,
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

// ===== constructor-checkout-mvp-tilda-js-2-steps.html =====
    function renderStepPanel() {
      const stepDef = steps.find((item) => item.id === state.step);
      const panelPriceLabel = state.step === 6
        ? `Сумма заказа: ${formatPrice(getTotalPrice())}`
        : formatPrice(getTotalPrice());
      $('#stepPanel').innerHTML = `
        <div class="panel-head">
          <div class="panel-head-row">
            <div class="panel-step">Этап ${state.step}</div>
            <div class="panel-price">${panelPriceLabel}</div>
          </div>
          <div class="panel-title">${stepDef.title}</div>
        </div>
        <div id="stepContent"></div>
      `;
      renderStepContent();
    }

    function renderStepContent() {
      const container = $('#stepContent');
      const selectedProduct = getSelectedProduct();
      const selectedColor = getSelectedColor();
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
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
        const stepTwoTab = getActiveStepTwoTab();
        const mobileTemplateCards = (stepTwoTab === 'custom' ? customTemplates : templates).map((item) => renderTemplateChoiceCard(item, {
          active: stepTwoTab === 'custom' ? state.selectedCustom === item.id : (state.template === item.id && !state.selectedCustom),
          mode: stepTwoTab === 'custom' ? 'custom' : 'template',
          dataAttr: stepTwoTab === 'custom'
            ? `data-custom="${escapeAttr(item.id)}"`
            : `data-template="${escapeAttr(item.id)}"`,
        })).join('');
        const stepTwoTabs = stepTwoTabsOrder.map((tab) => `
          <button
            type="button"
            class="checkout-tab${stepTwoTab === tab ? ' active' : ''}"
            data-step-two-tab="${escapeAttr(tab)}"
          >
            ${escapeHtml(stepTwoLabels[tab] || tab)}
          </button>
        `).join('');

        container.innerHTML = `
          <div class="section">
            <div class="checkout-tabs template-step-tabs">
              ${stepTwoTabs}
            </div>

            <div class="template-choice-mobile-group">
              <div class="template-choice-list template-choice-mobile-list" data-preserve-scroll-key="mobile-templates-${escapeAttr(stepTwoTab)}">
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
        hydrateTemplatePreviewIcons(container);
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
        const selectedTemplate = getSelectedTemplate();
        const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
        const availablePrintSizes = getAvailablePrintSizes(selectedTemplate);
        const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
        const availablePhotoPrintSizes = getAvailablePhotoPrintSizes(selectedTemplate);
        const renderSizeChoiceButtons = (sizes, activeId, dataAttrName) => `
          <div class="chip-row customization-choice-row">
            ${sizes.map((sizeOption) => `
              <button class="chip-btn size-choice-btn ${activeId === sizeOption.id ? 'active' : ''}" data-${dataAttrName}="${escapeAttr(sizeOption.id)}" type="button">
                <span class="size-choice-label">${sizeOption.name}</span>
                ${sizeOption.heightLabel ? `<span class="size-choice-meta">${sizeOption.heightLabel}</span>` : ''}
              </button>
            `).join('')}
          </div>
        `;
        if (isSimplePhotoTemplate(selectedTemplate)) {
          container.innerHTML = `
            <div class="section">
              <div>
                <div class="field-title">Выберите размер нанесения</div>
                ${renderSizeChoiceButtons(availablePhotoPrintSizes, selectedPhotoPrintSize?.id, 'photo-print-size')}
              </div>
            </div>
          `;
          return;
        }
        state.textValue = normalizeTextInputValue(state.textValue, selectedTemplate, selectedPrintSize);
        const embroideryAvailable = isEmbroideryAvailable();
        const embroiderySymbols = getEmbroiderySymbolsCount();
        const embroideryPrice = getEmbroideryTotal();
        const availableFonts = getAvailableFontOptions();
        const textBreakdown = getPreviewTextBreakdown();
        const textRules = getPreviewTextRules();

        container.innerHTML = `
          <div class="section">
            <div>
              <div class="field-title">Текст</div>
              <textarea class="text-input text-input--multiline" id="textValueInput" rows="1">${escapeHtml(state.textValue)}</textarea>
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
                ${printColors.map((c) => {
                  const colorName = getPrintColorLabel(c);
                  return `
                  <button class="swatch ${state.textColor === c ? 'active' : ''}" data-text-color="${escapeAttr(c)}" title="${escapeAttr(colorName)}" aria-label="${escapeAttr(colorName)}" type="button"><span style="background:${escapeAttr(c)}"></span></button>
                `;
                }).join('')}
              </div>
            </div>

            <div>
              <div class="field-title">Выберите шрифт</div>
              <div class="font-choice-grid">
                ${availableFonts.map((fontOption) => `
                  <button class="font-btn font-option-btn font-choice-btn ${state.font === fontOption.id ? 'active' : ''}" data-font-value="${escapeAttr(fontOption.id)}" style="font-family:${escapeAttr(getFontFamily(fontOption.id))};" type="button">
                    <span class="font-option-head">
                      <span class="font-option-title">${fontOption.label}</span>
                      ${fontOption.note ? `
                        <span class="font-option-info" data-font-note-trigger title="${escapeAttr(fontOption.note)}" aria-label="${escapeAttr(fontOption.note)}">
                          ?
                          <span class="font-option-tooltip" role="tooltip">${fontOption.note}</span>
                        </span>
                      ` : ''}
                    </span>
                  </button>
                `).join('')}
              </div>
              <div class="font-warning" id="fontWarning" ${(isFontLatinOnly(state.font) && textContainsCyrillic(state.textValue)) ? '' : 'hidden'}>Этот шрифт работает только с латиницей.</div>
            </div>

            <div>
              <div class="field-title">Выберите размер нанесения</div>
              ${renderSizeChoiceButtons(availablePrintSizes, state.printSize, 'print-size')}
            </div>

            ${templateSupportsPhotoPrintSizes(selectedTemplate) ? `
              <div>
                <div class="field-title">Выберите размер фото</div>
                ${renderSizeChoiceButtons(availablePhotoPrintSizes, selectedPhotoPrintSize?.id, 'photo-print-size')}
              </div>
            ` : ''}
          </div>
        `;
        ensureSelectedPreviewFontReady(selectedTemplate).catch(() => {});
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
                      <div class="extra-card-price">${formatPrice(e.price)}</div>
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
                ${templateSupportsText(selectedTemplate) ? rowHtml('Размер принта', selectedPrintSize.name) : ''}
                ${templateSupportsPhotoPrintSizes(selectedTemplate) ? rowHtml('Размер фото', getPhotoPrintSizeLabel(selectedPhotoPrintSize)) : ''}
                ${!isCustomSelected() && selectedPrintSize.heightLabel ? rowHtml('Высота букв', selectedPrintSize.heightLabel) : ''}
                ${!isCustomSelected() && templateSupportsText(selectedTemplate) ? rowHtml('Нанесение', getApplicationTypeLabel(selectedTemplate) || 'Печать') : ''}
                ${rowHtml('Файлы', (isCustomSelected() ? state.uploads.length : (state.uploads[0] ? 1 : 0)) ? `${isCustomSelected() ? state.uploads.length : 1} фото` : 'Не загружены')}
                ${rowHtml('Доп. элементы', selectedExtrasNames)}
                ${isEmbroideryAvailable(selectedTemplate) ? rowHtml('Надпись вышивкой', state.isEmbroideryText ? `Да, ${getEmbroiderySymbolsCount()} симв.` : 'Нет') : ''}
              </div>
            </div>

            <div class="info-card production-card">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
                <div class="subhead" style="font-size:22px; margin:0;">Производство</div>
                <div style="font-size:14px; color:#6b7280;">${state.fastProduction ? 'Ускоренное' : 'Стандартное'}</div>
              </div>
              <div class="stack" style="margin-top:16px;">
                <button class="toggle-card ${state.fastProduction ? 'active' : ''}" id="fastProductionBtn" type="button">
                  <div style="text-align:left;">
                    <div style="font-weight:600;">Ускоренное производство</div>
                    <div class="subtext">Добавим заказ в приоритет</div>
                  </div>
                  <div class="production-card-price">+ ${formatPrice(500)}</div>
                </button>

                <button class="toggle-card" id="manager24Btn" type="button">
                  <div style="text-align:left;">
                    <div style="font-weight:600;">Сделать за 24 часа</div>
                    <div class="subtext">Связаться с менеджером для подтверждения</div>
                  </div>
                  <div class="production-card-price">+ ${formatPrice(800)}</div>
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
      if (previewInspectController) {
        previewInspectController.abort();
        previewInspectController = null;
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
        container.querySelectorAll('[data-step-two-tab]').forEach((btn) => {
          btn.onclick = () => setStepTwoTab(btn.dataset.stepTwoTab);
        });
        container.querySelectorAll('[data-template]').forEach((btn) => {
          btn.onclick = () => {
            state.stepTwoTab = 'template';
            state.template = btn.dataset.template;
            state.selectedCustom = null;
            normalizeTextCustomizationState();
            renderPreservingStepContentScroll();
          };
        });
        container.querySelectorAll('[data-custom]').forEach((btn) => {
          btn.onclick = () => {
            state.stepTwoTab = 'custom';
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
            renderVisualizer();
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
          const currentPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
          syncStepFourTextInputHeight(textInput, selectedTemplate, currentPrintSize);
          textInput.oninput = (e) => {
            const template = getSelectedTemplate();
            const printSize = getSelectedPrintSize(undefined, template);
            const rawValue = e.target.value;
            const normalizedValue = normalizeTextInputValue(rawValue, template, printSize);
            state.textValue = normalizedValue;
            // Preserve trailing space while user is typing so spacebar works
            const trailingSpace = rawValue.length > 0 && rawValue[rawValue.length - 1] === ' ' && !normalizedValue.endsWith(' ')
              ? normalizedValue + ' '
              : normalizedValue;
            if (e.target.value !== trailingSpace) {
              const cursorPos = e.target.selectionStart;
              e.target.value = trailingSpace;
              e.target.setSelectionRange(cursorPos, cursorPos);
            }
            syncStepFourTextInputHeight(e.target, template, printSize);
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
            state.font = availableFonts.some((fontOption) => fontOption.id === btn.dataset.fontValue) ? btn.dataset.fontValue : (availableFonts[0]?.id || '');
            updateStepFourControls();
          };
        });
        container.querySelectorAll('[data-font-note-trigger]').forEach((noteTrigger) => {
          noteTrigger.onclick = (event) => {
            event.preventDefault();
            event.stopPropagation();
          };
          noteTrigger.onmousedown = (event) => {
            event.preventDefault();
            event.stopPropagation();
          };
        });
        container.querySelectorAll('[data-print-size]').forEach((btn) => {
          btn.onclick = () => {
            state.printSize = btn.dataset.printSize;
            updateStepFourControls();
          };
        });
        container.querySelectorAll('[data-photo-print-size]').forEach((btn) => {
          btn.onclick = () => {
            state.photoPrintSize = btn.dataset.photoPrintSize;
            if (isSimplePhotoTemplate(selectedTemplate)) {
              state.printSize = btn.dataset.photoPrintSize;
            }
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
        bindPreviewInspectInteractions();
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

// ===== constructor-checkout-mvp-tilda-js-2.html =====
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
        rows.push(rowHtml('Цвет швов', state.seam));}
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
            class="template-choice-icon-slot is-loading"
            data-template-icon-slot="${escapeAttr(iconSlotId)}"
            data-template-id="${escapeAttr(template.id)}"
            data-template-mode="${escapeAttr(mode)}"
          >
            <span class="template-choice-icon-loader" aria-hidden="true">
              <span class="template-choice-spinner"></span>
            </span>
            <span class="template-choice-icon-art" data-template-icon-art>
              <span class="template-choice-icon-placeholder">SVG</span>
            </span>
          </div>
        </div>
      `;
    }
    function hydrateTemplatePreviewIcons(root = document.getElementById('stepContent')) {
      if (!(root instanceof Element)) return;
      const slots = Array.from(root.querySelectorAll('[data-template-icon-slot]'));
      if (!slots.length) return;
      const hydrationToken = ++templatePreviewHydrationToken;
      slots.forEach((slot) => {
        slot.classList.add('is-loading');
        slot.classList.remove('is-ready');
      });
      requestAnimationFrame(() => {
        if (hydrationToken !== templatePreviewHydrationToken) return;
        slots.forEach((slot) => {
          const templateId = slot.getAttribute('data-template-id') || '';
          const mode = slot.getAttribute('data-template-mode') || 'template';
          const template = mode === 'custom'
            ? customTemplates.find((item) => item.id === templateId)
            : templates.find((item) => item.id === templateId);
          const art = slot.querySelector('[data-template-icon-art]');
          if (!art) return;
          art.innerHTML = buildTemplatePreviewSvgMarkup(template, mode) || `<span class="template-choice-icon-placeholder">SVG</span>`;
        });
        requestAnimationFrame(() => {
          if (hydrationToken !== templatePreviewHydrationToken) return;
          slots.forEach((slot) => {
            slot.classList.remove('is-loading');
            slot.classList.add('is-ready');
          });
        });
      });
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
    function getCanvasTextLinesFromElement(element, textTransform = '', maxLines = 5) {
      if (!(element instanceof HTMLElement)) return [];
      const rawLines = [''];
      const appendText = (value = '') => {
        rawLines[rawLines.length - 1] += String(value || '');
      };
      const visitNode = (node) => {
        if (!node) return;
        if (node.nodeType === Node.TEXT_NODE) {
          appendText(node.textContent || '');
          return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        if (node.nodeName === 'BR') {
          rawLines.push('');
          return;
        }
        Array.from(node.childNodes || []).forEach(visitNode);
      };
      Array.from(element.childNodes || []).forEach(visitNode);
      return rawLines
        .map((line) => normalizeCanvasTextValue(line, textTransform))
        .slice(0, Math.max(1, Number(maxLines) || 1));
    }

    function measureCanvasTextWidth(ctx, text, letterSpacing = 0) {
      if (!ctx || !text) return 0;
      return ctx.measureText(String(text)).width + (Math.max(0, String(text).length - 1) * letterSpacing);
    }

    function splitCanvasTextByWidth(ctx, text, maxWidth, maxLines = 5, letterSpacing = 0) {
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
        rotation = 0,
      } = options;
      ctx.save();
      ctx.fillStyle = fill;
      ctx.font = getCanvasFont(fontSize, fontFamily, fontWeight);
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = anchor === 'start' ? 'left' : anchor === 'end' ? 'right' : 'center';
      if (rotation) {
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        lines.forEach((line, index) => {
          drawCanvasLetterSpacedText(ctx, String(line || ''), 0, index * lineHeight, letterSpacing);
        });
      } else {
        lines.forEach((line, index) => {
          drawCanvasLetterSpacedText(ctx, String(line || ''), x, y + (index * lineHeight), letterSpacing);
        });
      }
      ctx.restore();
    }

    function drawCanvasTextElementInBox(ctx, element, box, domMetrics) {
      if (!ctx || !(element instanceof HTMLElement) || !box || !domMetrics) return false;
      const style = window.getComputedStyle(element);
      const fontSize = parseCssPixelValue(style.fontSize, 12) * domMetrics.scaleX;
      const fallbackLineHeight = parseCssPixelValue(style.fontSize, 12) * 1.15;
      const lineHeight = parseCssPixelValue(style.lineHeight, fallbackLineHeight) * domMetrics.scaleY;
      const fontWeight = Number.parseInt(style.fontWeight, 10) || 600;
      const letterSpacing = parseCssPixelValue(style.letterSpacing, 0) * domMetrics.scaleX;
      const maxLines = Math.max(1, Number.parseInt(style.getPropertyValue('-webkit-line-clamp'), 10) || 5);
      const fontFamily = style.fontFamily || getFontFamily(state.font);
      const paddingLeft = parseCssPixelValue(style.paddingLeft, 0) * domMetrics.scaleX;
      const paddingRight = parseCssPixelValue(style.paddingRight, 0) * domMetrics.scaleX;
      const paddingTop = parseCssPixelValue(style.paddingTop, 0) * domMetrics.scaleY;
      const paddingBottom = parseCssPixelValue(style.paddingBottom, 0) * domMetrics.scaleY;
      const contentBox = {
        x: box.x + paddingLeft,
        y: box.y + paddingTop,
        width: Math.max(1, box.width - paddingLeft - paddingRight),
        height: Math.max(1, box.height - paddingTop - paddingBottom),
      };
      let lines = getCanvasTextLinesFromElement(element, style.textTransform, maxLines);
      if (!lines.some((line) => line.length > 0)) {
        const text = normalizeCanvasTextValue(element.textContent || '', style.textTransform);
        if (!text) return false;
        ctx.save();
        ctx.font = getCanvasFont(fontSize, fontFamily, fontWeight);
        lines = splitCanvasTextByWidth(ctx, text, contentBox.width, maxLines, letterSpacing);
        ctx.restore();
      }
      if (!lines.length) return false;
      ctx.save();
      ctx.font = getCanvasFont(fontSize, fontFamily, fontWeight);
      ctx.restore();
      const anchor = style.textAlign === 'left' ? 'start' : style.textAlign === 'right' ? 'end' : 'middle';
      drawCanvasTextBlock(ctx, lines, {
        x: anchor === 'start' ? contentBox.x : anchor === 'end' ? contentBox.x + contentBox.width : contentBox.x + (contentBox.width / 2),
        y: contentBox.y + fontSize,
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
    function drawCanvasPhotoPlaceholder(ctx, x, y, width, height, options = {}) {
      if (!ctx || !width || !height) return false;
      const {
        radius = 0,
      } = options;
      const lines = ['ТУТ БУДЕТ', 'ВАШЕ ФОТО'];
      ctx.save();
      buildRoundedRectPath(ctx, x, y, width, height, radius);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = '#d5dae1';
      ctx.setLineDash([10, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#7b8593';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const fontSize = Math.max(6, Math.min(width * 0.09, 10));
      const lineHeight = fontSize * 1.22;
      ctx.font = getCanvasFont(fontSize, 'Inter, system-ui, sans-serif', 700);
      const startY = y + (height / 2) - (lineHeight * 0.35);
      lines.forEach((line, index) => {
        drawCanvasLetterSpacedText(ctx, line, x + (width / 2), startY + (index * lineHeight), 0.35);
      });
      ctx.restore();
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
      const baseScale = getProductBaseImageScale(state.product);
      const baseX = 500;
      const baseY = 625;
      let rendered = false;
      ctx.save();
      ctx.translate(baseX, baseY);
      ctx.scale(baseScale, baseScale);
      rendered = await drawCanvasContainImage(ctx, resolvedSource, -baseX, -baseY, 1000, 1250);
      if (!rendered && fallbackSource && fallbackSource !== resolvedSource) {
        rendered = await drawCanvasContainImage(ctx, fallbackSource, -baseX, -baseY, 1000, 1250);
      }
      ctx.restore();
      return rendered;
    }

    async function renderStandardPreviewCanvasFromDom(ctx, domMetrics) {
      if (!ctx || !domMetrics) return false;
      const designLayer = document.getElementById('designLayer');
      const imageBox = designLayer?.querySelector('.image-box');
      const textBlock = designLayer?.querySelector('.emb-block');
      let rendered = false;

      if (imageBox instanceof HTMLElement) {
        const imageBoxStyle = window.getComputedStyle(imageBox);
        await withCanvasElementTransform(ctx, imageBox, domMetrics, async ({ width, height }) => {
          const radius = parseCssPixelValue(imageBoxStyle.borderRadius, 0) * domMetrics.scaleX;
          const strokeWidth = parseCssPixelValue(imageBoxStyle.borderWidth, 0) * domMetrics.scaleX;
          await drawCurrentUploadToCanvas(ctx, 0, 0, width, height, {
            radius,
            fill: imageBoxStyle.backgroundColor || '#f3f4f6',
            stroke: imageBoxStyle.borderColor || '',
            strokeWidth,
          });
          rendered = true;
        });
      }

      if (textBlock instanceof HTMLElement) {
        await withCanvasElementTransform(ctx, textBlock, domMetrics, async ({ width, height }) => {
          drawCanvasTextElementInBox(ctx, textBlock, {
            x: 0,
            y: 0,
            width,
            height,
          }, domMetrics);
        });
        rendered = true;
      }

      return rendered;
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

    function syncGarmentLoadingOverlay() {
      const garment = document.getElementById('garment');
      const overlay = document.getElementById('garmentLoadingOverlay');
      const overlayText = overlay?.querySelector('.garment-loading-text');
      const isLoading = garmentLoadingState.base || garmentLoadingState.preview;
      if (garment) {
        garment.classList.toggle('is-base-loading', isLoading);
      }
      if (overlay) {
        overlay.setAttribute('aria-hidden', isLoading ? 'false' : 'true');
      }
      if (overlayText) {
        overlayText.textContent = garmentLoadingState.preview
          ? garmentLoadingState.previewLabel
          : GARMENT_LOADING_LABELS.base;
      }
    }

    function setGarmentBaseImageLoading(isLoading) {
      garmentLoadingState.base = Boolean(isLoading);
      syncGarmentLoadingOverlay();
    }

    function setGarmentPreviewLoading(isLoading, label = GARMENT_LOADING_LABELS.template) {
      garmentLoadingState.preview = Boolean(isLoading);
      if (label) {
        garmentLoadingState.previewLabel = label;
      }
      syncGarmentLoadingOverlay();
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
        const cardNote = getProductCardNote(item);
        const escapedDisplayNote = cardNote ? escapeHtml(cardNote) : '';
        return `
          <button class="option-btn product-choice-card ${state.product === item.id ? 'active' : ''}" data-product="${item.id}" type="button">
            <div class="product-choice-visual">
              ${previewUrl ? `<img data-product-preview-img="${item.id}" data-current-src="${previewUrl}" src="${previewUrl}" alt="${escapeAttr(item.name)}">` : ''}
            </div>
            <div class="product-choice-copy">
              <div class="product-choice-title">${item.name}</div>
              <div class="product-choice-price">${formatPrice(item.price)}${escapedDisplayNote ? ` <span class="option-price-note">[${escapedDisplayNote}]</span>` : ''}</div>
            </div>
          </button>
        `;
      }).join('');
    }

    function getStepOneDesktopProductCardsHtml() {
      return baseProducts.map((item) => {
        const cardNote = getProductCardNote(item);
        const escapedDisplayNote = cardNote ? escapeHtml(cardNote) : '';
        return `
          <button class="option-btn ${state.product === item.id ? 'active' : ''}" data-product="${item.id}">
            <div class="option-title">${item.name}</div>
            <div class="option-price">${formatPrice(item.price)}${escapedDisplayNote ? ` <span class="option-price-note">[${escapedDisplayNote}]</span>` : ''}</div>
          </button>
        `;
      }).join('');
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
      const container = document.getElementById('stepContent');
      if (!container || state.step !== 4) {
        render();
        return;
      }
      normalizeTextCustomizationState();
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const availableFonts = getAvailableFontOptions(selectedTemplate);
      state.textValue = normalizeTextInputValue(state.textValue, selectedTemplate, selectedPrintSize);
      const textBreakdown = getPreviewTextBreakdown(state.textValue, selectedTemplate, selectedPrintSize);
      const textRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const renderedFontIds = Array.from(container.querySelectorAll('[data-font-value]')).map((btn) => btn.dataset.fontValue);
      const expectedFontIds = availableFonts.map((fontOption) => fontOption.id);
      if (renderedFontIds.length && renderedFontIds.join('|') !== expectedFontIds.join('|')) {
        renderPreservingStepContentScroll();
        return;
      }

      const textInput = container.querySelector('#textValueInput');
      const isTextInputFocused = textInput && document.activeElement === textInput;
      if (textInput && textInput.value !== state.textValue && !isTextInputFocused) {
        textInput.value = state.textValue;
      }
      if (textInput) syncStepFourTextInputHeight(textInput, selectedTemplate, selectedPrintSize);

      container.querySelectorAll('[data-text-color]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.textColor === state.textColor);
      });
      container.querySelectorAll('[data-font-value]').forEach((btn) => {
        btn.classList.toggle('active', (availableFonts.some((fontOption) => fontOption.id === btn.dataset.fontValue) ? btn.dataset.fontValue : availableFonts[0]?.id) === state.font);
      });
      container.querySelectorAll('[data-print-size]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.printSize === state.printSize);
      });
      container.querySelectorAll('[data-photo-print-size]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.photoPrintSize === selectedPhotoPrintSize?.id);
      });
      container.querySelectorAll('[data-application-type]').forEach((btn) => {
        const isEmbroidery = btn.dataset.applicationType === 'embroidery';
        btn.classList.toggle('active', Boolean(state.isEmbroideryText) === isEmbroidery);
      });

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

      ensureSelectedPreviewFontReady(selectedTemplate).then(() => {
        renderVisualizer();
      }).catch(() => {});
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

      const previewFocusConfig = getGarmentPreviewFocusConfig();
      if (!previewFocusConfig) return;

      const width = previewFocusConfig.scale * 100;
      const height = previewFocusConfig.scale * 100;
      const left = previewFocusConfig.focusX * 100 * (1 - previewFocusConfig.scale);
      const top = previewFocusConfig.focusY * 100 * (1 - previewFocusConfig.scale);

      garment.style.inset = 'auto';
      garment.style.left = `${left}%`;
      garment.style.top = `${top}%`;
      garment.style.width = `${width}%`;
      garment.style.height = `${height}%`;
      garment.style.willChange = 'left, top, width, height';
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
      const hideDesign = state.step === 1;
      const filter = state.photoGrayscale ? 'grayscale(1)' : 'grayscale(0)';
      const previewText = getResolvedPreviewTextValue(state.textValue);
      const previewTextLines = getPreviewTextLines(previewText, selectedTemplate, selectedPrintSize);
      const previewTextRules = getPreviewTextRules(selectedTemplate, selectedPrintSize);
      const previewTextHtml = previewTextLines.map((line) => escapeHtml(line)).join('<br>');
      const previewTextStyle = getPreviewTextBlockStyleConfig(selectedTemplate, selectedPrintSize, previewTextLines.length);
      const selectedPhotoPrintSize = getSelectedPhotoPrintSize(undefined, selectedTemplate);
      const templatePhotoLayout = getTemplatePhotoLayout(selectedTemplate, selectedPhotoPrintSize, {
        printSize: selectedPrintSize,
        lineCount: previewTextLines.length,
      });
      const previewFontFamily = escapeAttr(getFontFamily(state.font));
      const activeUpload = state.uploads[state.activeUploadIndex] || state.uploads[0];
      const uploadImageHtml = activeUpload
        ? `<img class="crop-image" src="${activeUpload.url}" alt="preview" style="filter:${filter}; --crop-offset-x:${state.cropPosition.x}%; --crop-offset-y:${state.cropPosition.y}%; --crop-scale:${state.cropZoom};">`
        : '';
      const standardPhotoPlaceholderHtml = `<div class="photo-placeholder">ТУТ БУДЕТ<br>ВАШЕ ФОТО</div>`;

      let html = '';

      if (!hideDesign && state.selectedCustom) {
        html = '';
      } else if (!hideDesign && isPhotoTextTemplate(selectedTemplate) && templatePhotoLayout) {
        const textBlockHtml = `
          <div class="emb-block" style="--print-scale:${currentScale}; --text-color:${state.textColor}; --preview-text-max-width:${previewTextStyle.maxWidth}; --preview-text-line-height:${previewTextStyle.lineHeight}; --preview-text-font-weight:${previewTextStyle.fontWeight}; --preview-text-letter-spacing:${previewTextStyle.letterSpacing}; --preview-text-top:${previewTextStyle.previewTop}; --preview-text-transform:${previewTextStyle.textTransform}; left:${previewTextStyle.left}; right:${previewTextStyle.right}; width:${previewTextStyle.width}; max-width:${previewTextStyle.maxWidth}; transform:${previewTextStyle.transform}; transform-origin:${previewTextStyle.transformOrigin}; text-align:${previewTextStyle.textAlign}; top:${previewTextStyle.previewTop}; line-height:${previewTextStyle.lineHeight}; font-weight:${previewTextStyle.fontWeight}; letter-spacing:${previewTextStyle.letterSpacing}; text-transform:${previewTextStyle.textTransform}; font-size:${previewTextStyle.fontSize}; font-family:${previewFontFamily}; -webkit-line-clamp:${previewTextRules.maxLines};">
            ${previewTextHtml}
          </div>
        `;
        const photoBlockHtml = `
          <div
            class="image-box"
            style="left:${templatePhotoLayout.previewLeft}; top:${templatePhotoLayout.previewTop}; width:${templatePhotoLayout.previewWidth}; height:${templatePhotoLayout.previewHeight}; border:none; border-radius:0; background:transparent;"
          >
            ${uploadImageHtml || standardPhotoPlaceholderHtml}
          </div>
        `;
        const isPhotoFirst = isPhotoBottomTextTemplate(selectedTemplate)
          || isPhotoDiagonalTextTemplate(selectedTemplate);
        html = isPhotoFirst
          ? `${photoBlockHtml}${textBlockHtml}`
          : `${textBlockHtml}${photoBlockHtml}`;
      } else if (!hideDesign && templatePhotoLayout) {
        html = `
          <div
            class="image-box"
            style="left:${templatePhotoLayout.previewLeft}; top:${templatePhotoLayout.previewTop}; width:${templatePhotoLayout.previewWidth}; height:${templatePhotoLayout.previewHeight}; border:none; border-radius:0; background:transparent;"
          >
            ${uploadImageHtml || standardPhotoPlaceholderHtml}
          </div>
        `;
      } else if (!hideDesign) {
        const hasUpload = Boolean(state.uploads[0]) && !['emb-center', 'emb-left'].includes(selectedTemplate?.kind);
        html = `
          ${hasUpload ? `<div class="image-box">${uploadImageHtml}</div>` : ''}
          <div class="emb-block ${hasUpload ? 'with-upload' : ''}" style="--print-scale:${currentScale}; --text-color:${state.textColor}; --preview-text-max-width:${previewTextStyle.maxWidth}; --preview-text-line-height:${previewTextStyle.lineHeight}; --preview-text-font-weight:${previewTextStyle.fontWeight}; --preview-text-letter-spacing:${previewTextStyle.letterSpacing}; --preview-text-top:${previewTextStyle.previewTop}; --preview-text-transform:${previewTextStyle.textTransform}; left:${previewTextStyle.left}; right:${previewTextStyle.right}; width:${previewTextStyle.width}; max-width:${previewTextStyle.maxWidth}; transform:${previewTextStyle.transform}; transform-origin:${previewTextStyle.transformOrigin}; text-align:${previewTextStyle.textAlign}; top:${previewTextStyle.previewTop}; line-height:${previewTextStyle.lineHeight}; font-weight:${previewTextStyle.fontWeight}; letter-spacing:${previewTextStyle.letterSpacing}; text-transform:${previewTextStyle.textTransform}; font-size:${previewTextStyle.fontSize}; font-family:${previewFontFamily}; -webkit-line-clamp:${previewTextRules.maxLines};">
            ${previewTextHtml}
          </div>
        `;
      }

      const key = JSON.stringify({
        step: state.step,
        hideDesign,
        selectedCustom: Boolean(state.selectedCustom),
        kind: selectedTemplate?.kind || '',
        uploadUrl: activeUpload?.url || '',
        textValue: state.textValue || '',
        textColor: state.textColor,
        font: state.font,
        printSize: state.printSize,
        photoPrintSize: state.photoPrintSize,
        previewTextStyle,
        photoGrayscale: state.photoGrayscale,
        cropPosition: state.cropPosition,
        cropZoom: state.cropZoom,
        cropRotation: 0,
      });

      return {
        html,
        key,
        currentScale,
      };
    }

    function renderVisualizer() {
      const selectedProduct = getSelectedProduct();
      const selectedTemplate = getSelectedTemplate();
      const selectedPrintSize = getSelectedPrintSize(undefined, selectedTemplate);
      const currentScale = getCurrentPrintScale(selectedPrintSize?.id, selectedTemplate);
      const productBaseImageScale = getProductBaseImageScale(selectedProduct?.id);

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
      garment.style.setProperty('--base-image-scale', String(productBaseImageScale));

      // --- Konva preview rendering ---
      // Konva Stage lives in #garmentWrap (outside .garment) so CSS transforms don't block events
      const designLayer = document.getElementById('designLayer');
      if (isKonvaAvailable()) {
        // Hide legacy design layer — Konva draws the design overlay
        if (designLayer) designLayer.style.display = 'none';

        const sceneParams = buildKonvaSceneParams();
        const overlayParams = { ...sceneParams, baseImageSrc: null };
        const scene = konvaResolveScene(overlayParams);
        const sceneKey = JSON.stringify({
          step: state.step,
          kind: selectedTemplate?.kind || '',
          custom: Boolean(state.selectedCustom),
          uploadUrl: (state.uploads[state.activeUploadIndex] || state.uploads[0])?.url || '',
          textValue: state.textValue,
          textColor: state.textColor,
          font: state.font,
          printSize: state.printSize,
          photoPrintSize: state.photoPrintSize,
          cropPosition: state.cropPosition,
          cropZoom: state.cropZoom,
          photoGrayscale: state.photoGrayscale,
        });
        konvaRenderPreview(scene, sceneKey).catch((err) => {
          console.warn('Konva preview render failed, falling back to legacy.', err);
          konvaDestroyPreview();
          if (designLayer) designLayer.style.display = '';
          renderLegacyDesignLayer();
        });
      } else {
        // No Konva — use legacy DOM rendering
        konvaDestroyPreview();
        if (designLayer) designLayer.style.display = '';
        renderLegacyDesignLayer();
      }

      resetCheckoutCompositePreview();
      syncGarmentScale();
      setupMagnifier();
      const hasActiveUpload = state.uploads.length > 0;
      const allowPreviewEditing = state.step === 3 && hasActiveUpload && !isCustomSelected();
      const allowPreviewUploadHint = state.step === 3 && !hasActiveUpload && !isCustomSelected();
      const allowPreviewInspect = isPreviewInspectEnabled();
      const garmentWrap = $('#garmentWrap');
      const gestureHint = ensurePreviewGestureHintElement();
      garmentWrap.classList.toggle('editable', allowPreviewEditing);
      garmentWrap.classList.toggle('upload-hint', allowPreviewUploadHint);
      garmentWrap.classList.toggle('dragging-photo', false);
      garmentWrap.classList.toggle('preview-inspect-enabled', allowPreviewInspect);
      garmentWrap.classList.toggle('preview-hover-zoom', allowPreviewInspect && isDesktopPreviewInspectEnabled());
      garmentWrap.classList.toggle('preview-touch-zoom', allowPreviewInspect && isMobilePreviewInspectEnabled());
      garmentWrap.classList.toggle('show-gesture-hint', allowPreviewInspect && isMobilePreviewInspectEnabled());
      if (gestureHint) {
        gestureHint.hidden = !(allowPreviewInspect && isMobilePreviewInspectEnabled());
      }
      if (!allowPreviewInspect) {
        resetPreviewInspectState();
      } else {
        syncPreviewInspectState();
      }
    }

    /** Legacy fallback: render design layer via DOM/HTML (old path). */
    function renderLegacyDesignLayer() {
      const { html, key } = getDesignLayerRenderState();
      if (lastDesignLayerRenderKey !== key) {
        $('#designLayer').innerHTML = html;
        lastDesignLayerRenderKey = key;
      }
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
      syncCheckoutCompositePreviewInUi();
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
    window.addEventListener('resize', () => {
      if (isKonvaAvailable()) konvaResizePreview();
    });
    window.addEventListener('beforeunload', () => {
      if (!persistenceHydrated) return;
      const snapshot = getPersistenceSnapshot();
      persistenceWriteChain = persistenceWriteChain.then(() => writePersistedSnapshot(snapshot));
      // No confirmation dialog — save silently
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
        // Load Konva library dynamically before first render
        await loadKonvaScript();
        await restorePersistedState();
        await preloadInitialRenderImages();
        render();
        scheduleFullCatalogImagePreload();
      } finally {
        requestAnimationFrame(() => {
          setShellLoading(false);
          // Auto-restore without modal — no "unsaved progress" popup
          if (pendingRestoreSnapshot) {
            applyPersistedSnapshot(pendingRestoreSnapshot);
            pendingRestoreSnapshot = null;
            render();
          }
        });
      }
    }

    initializeConfigurator();

    console.assert(typeof nextStep === 'function', 'nextStep should be defined');
    console.assert(Array.isArray(steps) && steps.length === 6, 'steps should contain 6 items');
    console.assert(typeof getTotalPrice() === 'number', 'total price should be numeric');
