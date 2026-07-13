(function () {
  var key = 'yuxuan-portfolio-language';
  var body = document.body;
  var iconMap = [
    ['.navset a[href*="#work"]', 'folder-open'],
    ['.navset a[href="about.html"]', 'circle-user-round'],
    ['.navset a[href^="mailto:"]', 'mail'],
    ['.action-list a[href="#work"]', 'arrow-down'],
    ['.action-list a[href*="github.com"]', 'github'],
    ['.action-list a[href^="mailto:"]', 'mail'],
    ['.action-list a[href$="aisleway.html"], .action-list a[href$="about.html#contact"]', 'arrow-up-right'],
    ['.link-row a[href*="github.com"]', 'github'],
    ['.link-row a[href$="report.html"]', 'file-text'],
    ['.link-row a', 'arrow-up-right'],
    ['.footer a[href="index.html"]', 'arrow-left']
  ];
  function renderIcons() {
    iconMap.forEach(function (entry) {
      document.querySelectorAll(entry[0]).forEach(function (element) {
        if (element.querySelector('.ui-icon')) return;
        var icon = document.createElement('i');
        icon.className = 'ui-icon';
        icon.setAttribute('data-lucide', entry[1]);
        icon.setAttribute('aria-hidden', 'true');
        element.appendChild(icon);
      });
    });
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 } });
  }
  function setLanguage(lang) {
    body.dataset.uiLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
      button.innerHTML = '<i class="ui-icon" data-lucide="languages" aria-hidden="true"></i><span class="language-label">' + (lang === 'zh' ? '中文 / EN' : 'EN / 中文') + '</span>';
      button.setAttribute('aria-label', lang === 'zh' ? '切换至英文' : 'Switch to Chinese');
    });
    renderIcons();
    try { localStorage.setItem(key, lang); } catch (_) {}
  }
  document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(body.dataset.uiLang === 'zh' ? 'en' : 'zh'); });
  });
  try { setLanguage(localStorage.getItem(key) || 'zh'); } catch (_) { setLanguage('zh'); }
})();
