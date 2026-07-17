(function () {
  var key = 'yuxuan-portfolio-language';
  var body = document.body;
  var emailToastTimer;
  var iconMap = [
    ['.navset a[href*="#work"]', 'folder-open'],
    ['.navset a[href*="#explore"]', 'compass'],
    ['.navset a[href="about.html"]', 'circle-user-round'],
    ['.navset a[href^="mailto:"]', 'mail'],
    ['.action-list a[href="#work"]', 'arrow-down'],
    ['.action-list a[href*="github.com"]', 'github'],
    ['.action-list a[href^="mailto:"]', 'mail'],
    ['.action-list a[href$="aisleway.html"], .action-list a[href$="about.html#contact"]', 'arrow-up-right'],
    ['.exploration-link', 'arrow-up-right'],
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
  function showEmailToast(copied) {
    var toast = document.querySelector('[data-email-toast]');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'email-toast';
      toast.setAttribute('data-email-toast', '');
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      body.appendChild(toast);
    }
    toast.textContent = copied
      ? (body.dataset.uiLang === 'en' ? 'Email copied' : '邮箱已复制')
      : 'tricloride808@gmail.com';
    toast.classList.remove('is-visible');
    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
    clearTimeout(emailToastTimer);
    emailToastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2600);
  }
  function copyWithTextarea(text) {
    var input = document.createElement('textarea');
    var copied = false;
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    body.appendChild(input);
    input.select();
    try { copied = document.execCommand('copy'); } catch (_) {}
    body.removeChild(input);
    return copied;
  }
  function copyEmail(email) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(
        function () { showEmailToast(true); },
        function () { showEmailToast(copyWithTextarea(email)); }
      );
      return;
    }
    showEmailToast(copyWithTextarea(email));
  }
  document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(body.dataset.uiLang === 'zh' ? 'en' : 'zh'); });
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var email = link.getAttribute('href').slice(7).split('?')[0];
      copyEmail(decodeURIComponent(email));
    });
  });
  try { setLanguage(localStorage.getItem(key) || 'zh'); } catch (_) { setLanguage('zh'); }
})();
