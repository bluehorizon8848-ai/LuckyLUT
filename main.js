// ===== i18n Content =====
const I18N = {
  zh: {
    'nav.features': '功能',
    'nav.process': '流程',
    'nav.faq': 'FAQ',
    'hero.tagline': '在微信里，快速拍出有风格的照片',
    'hero.title': '创意 LUT 相机',
    'hero.desc': '拍照或导入一张图，立即套用 LUT 风格。15 种预置风格 + 胶片模拟，轻量、直接、好上手。',
    'hero.cta': '立即扫码体验',
    'hero.note': '15 种预置 LUT（10 单色 + 5 胶片模拟）。支持导入 .cube 文件，最多 20 个 LUT。本地处理，安全快捷。',
    'hero.cardLabel': '实拍样片展示',
    'value.tag': '核心优势',
    'value.title': '为什么选择它',
    'value.fast.title': '极简流程',
    'value.fast.desc': '拍摄 → 选色 → 保存，三步即成。无需学习专业调色，打开即拍即出片。',
    'value.pro.title': '专业兼容',
    'value.pro.desc': '支持 33grid .cube 格式，兼容主流调色包。导入第三方 LUT 即可使用。',
    'value.privacy.title': '隐私安全',
    'value.privacy.desc': '所有图片处理均在本地完成，不上传服务器。你的照片，只属于你。',
    'features.tag': '功能特性',
    'features.title': '15 种预置风格',
    'features.subtitle': '10 种单色风格 + 5 种胶片模拟，覆盖日常创作所需',
    'features.mono': '经典黑白单色，纯粹质感',
    'features.yellow': '暖调明黄，阳光氛围',
    'features.blue': '冷调深蓝，清冽通透',
    'features.red': '浓郁红调，复古热烈',
    'features.orange': '柔和浅橙，日系清新',
    'features.green': '荧光绿调，前卫跳脱',
    'features.burnt': '焦橙暗调，秋日电影感',
    'features.purple': '霓虹紫光，迷幻夜色',
    'features.pink': '炽热粉红，活力张扬',
    'features.sky': '天空蓝调，清爽明亮',
    'features.chrome': '胶片铬色，经典还原',
    'features.classic': '经典胶片，柔和对比',
    'features.vivid': '鲜艳胶片，饱和增强',
    'features.filmbw': '胶片黑白，银盐质感',
    'features.warm': '暖调胶片，温柔色谱',
    'process.tag': '使用流程',
    'process.title': '三步开启',
    'process.s1.title': '扫码进入',
    'process.s1.desc': '微信扫一扫，直接打开小程序',
    'process.s2.title': '拍摄或导入',
    'process.s2.desc': '拍照或从相册选择一张照片',
    'process.s3.title': '选色出片',
    'process.s3.desc': '套用 LUT 风格并保存到相册',
    'ext.tag': '扩展能力',
    'ext.title': '扩展无限可能',
    'ext.desc': '支持导入第三方胶片风格 LUT 及相机厂家 33grid .cube 格式文件',
    'ext.d1': '33grid 标准 .cube',
    'ext.d2': '本地存储，即调即用',
    'ext.d3': '最多 20 个 LUT',
    'faq.title': '常见问题',
    'cta.title': '开始创作你的风格',
    'cta.desc': '微信扫码，即刻体验 15 种预置 LUT 风格',
    'footer.copyright': '© 2026 创意 LUT 相机',
    'footer.privacy': '隐私政策',
    'footer.terms': '用户协议',
    'footer.contact': '联系我们',
    'qr.title': '立即扫码体验',
    'qr.subtitle': '微信扫一扫，开启创意摄影',
    'qr.close': '关闭'
  },
  en: {
    'nav.features': 'Features',
    'nav.process': 'How It Works',
    'nav.faq': 'FAQ',
    'hero.tagline': 'Stylized Photos in WeChat, Instantly',
    'hero.title': 'Creative LUT Camera',
    'hero.desc': 'Snap or import a photo, apply LUT styles instantly. 15 presets + film simulation — minimal, direct, easy.',
    'hero.cta': 'Scan to Try',
    'hero.note': '15 preset LUTs (10 monochrome + 5 film simulation). Supports .cube import, up to 20 LUTs. All processing is local.',
    'hero.cardLabel': 'Sample Effect Preview',
    'value.tag': 'KEY ADVANTAGES',
    'value.title': 'Why Choose It',
    'value.fast.title': 'Minimal Flow',
    'value.fast.desc': 'Shoot → Select → Save. Three steps only. No learning curve required.',
    'value.pro.title': 'Pro Compatible',
    'value.pro.desc': 'Supports 33grid .cube format. Compatible with professional grading packs.',
    'value.privacy.title': 'Privacy First',
    'value.privacy.desc': 'All image processing is local. No uploads. Your photos stay yours.',
    'features.tag': 'FEATURES',
    'features.title': '15 Preset Styles',
    'features.subtitle': '10 monochrome styles + 5 film simulations for everyday creative needs',
    'features.mono': 'Classic monochrome, pure texture',
    'features.yellow': 'Warm yellow, sunny vibes',
    'features.blue': 'Cool blue, crisp and clear',
    'features.red': 'Rich red, vintage warmth',
    'features.orange': 'Soft orange, Japanese style',
    'features.green': 'Acid green, bold and edgy',
    'features.burnt': 'Burnt orange, autumn cinema',
    'features.purple': 'Electric purple, neon nights',
    'features.pink': 'Hot pink, vibrant energy',
    'features.sky': 'Sky blue, fresh and bright',
    'features.chrome': 'Film chrome, classic rendition',
    'features.classic': 'Classic film, soft contrast',
    'features.vivid': 'Vivid film, saturation boost',
    'features.filmbw': 'Film BW, silver halide look',
    'features.warm': 'Warm film, gentle palette',
    'process.tag': 'HOW IT WORKS',
    'process.title': 'Get Started in 3 Steps',
    'process.s1.title': 'Scan QR Code',
    'process.s1.desc': 'Open WeChat and scan to launch the mini-program',
    'process.s2.title': 'Shoot or Import',
    'process.s2.desc': 'Take a photo or pick one from your gallery',
    'process.s3.title': 'Apply & Save',
    'process.s3.desc': 'Choose a LUT style and save to your album',
    'ext.tag': 'EXTENSIBILITY',
    'ext.title': 'Unlimited Possibilities',
    'ext.desc': 'Import 3rd-party film LUTs and manufacturer 33grid .cube format files',
    'ext.d1': 'Standard 33grid .cube',
    'ext.d2': 'Local storage, instant use',
    'ext.d3': 'Up to 20 LUTs',
    'faq.title': 'Frequently Asked Questions',
    'cta.title': 'Start Creating Your Style',
    'cta.desc': 'Scan with WeChat to experience 15 preset LUT styles',
    'footer.copyright': '© 2026 Creative LUT Camera',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact Us',
    'qr.title': 'Scan to Try',
    'qr.subtitle': 'Open WeChat, scan to start',
    'qr.close': 'Close'
  }
};

const FAQ_DATA = {
  zh: [
    { q: '是否免费？', a: '目前完全免费使用，包括所有 15 种预置 LUT 风格和胶片模拟。后续可能推出额外风格扩展包。' },
    { q: '支持什么格式的 LUT？', a: '支持标准的 33grid .cube 文件格式，这是业界最通用的 LUT 分发格式，兼容主流调色软件导出的文件。' },
    { q: '支持哪些图片来源？', a: '支持实时拍照和从相册导入两种方式。拍照后即时套用 LUT，也可以对历史照片进行风格化处理。' },
    { q: '数据安全吗？', a: '所有图片处理均在本地设备上完成，我们不会上传任何照片到服务器。你的照片只属于你。' },
    { q: '为什么有时导出的是 PNG？', a: '默认优先导出 JPG 格式以获得最佳体积和兼容性。在部分环境下会自动回退为 PNG，不影响正常分享使用。' },
    { q: '保存失败怎么办？', a: '请检查是否已授权小程序访问相册权限。在微信设置中找到"创意 LUT 相机"并开启相册权限即可。' }
  ],
  en: [
    { q: 'Is it free?', a: 'Currently free to use, including all 15 preset LUT styles and film simulations. Additional style packs may be available later.' },
    { q: 'What LUT format is supported?', a: 'Standard 33grid .cube files — the most widely used LUT distribution format, compatible with major color grading tools.' },
    { q: 'What photo sources work?', a: 'Both real-time camera capture and gallery import. Apply LUT effects instantly after shooting, or restyle old photos.' },
    { q: 'Is my data safe?', a: 'All processing happens locally on your device. We never upload any photos to servers. Your photos stay yours.' },
    { q: 'Why does it sometimes export PNG?', a: 'JPG is the default format for best size and compatibility. In some environments, it falls back to PNG, which works fine for sharing.' },
    { q: 'What if saving fails?', a: 'Please check that the mini-program has photo album permission. Go to WeChat Settings → find "Creative LUT Camera" → enable album access.' }
  ]
};

// ===== State =====
let currentLang = 'zh';

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageToggle();
  initQRModal();
  initFAQ();
  initScrollReveal();
});

// ===== Navbar Scroll =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ===== Language Toggle =====
function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage();
  });
}

function applyLanguage() {
  const dict = I18N[currentLang];
  
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update lang toggle active state
  document.getElementById('lang-en').className = currentLang === 'en' ? 'active' : '';
  document.getElementById('lang-zh').className = currentLang === 'zh' ? 'active' : '';

  // Update HTML lang attribute
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

  // Re-render FAQ
  renderFAQ();
}

// ===== QR Modal =====
function initQRModal() {
  const modal = document.getElementById('qr-modal');
  const openBtns = [document.getElementById('btn-scan'), document.getElementById('btn-scan-bottom')];
  const closeBtn = document.getElementById('btn-close-qr');

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => modal.classList.add('open'));
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
}

// ===== FAQ =====
function initFAQ() {
  renderFAQ();
}

function renderFAQ() {
  const list = document.getElementById('faq-list');
  const items = FAQ_DATA[currentLang];
  
  list.innerHTML = items.map((item, i) => `
    <div class="faq-item reveal visible" id="faq-item-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-item-${index}`);
  const isOpen = item.classList.contains('open');
  
  // Close all others
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  
  // Toggle current
  if (!isOpen) {
    item.classList.add('open');
  }
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
