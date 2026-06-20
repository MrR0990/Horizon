(function () {
  'use strict';

  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier = score >= 9 ? 'high' : score >= 7 ? 'good' : score >= 5 ? 'mid' : 'low';
      el.innerHTML = el.innerHTML.replace(scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>');
    });
  }

  function markSemanticElements() {
    document.querySelectorAll('.main-content p').forEach(function (p) {
      var text = p.textContent.trim();
      if (/^(Tags|标签)\s*:/.test(text)) { p.classList.add('tag-line'); return; }
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) { p.classList.add('source-line'); }
    });
  }

  function setupThemeToggle() {
    var saved = null;
    try { saved = localStorage.getItem('horizon-theme'); } catch (e) {}
    var theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    var toggle = document.createElement('div');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle theme');

    var btnDark = document.createElement('button');
    btnDark.textContent = '🌙';
    btnDark.type = 'button';
    btnDark.title = 'Dark';

    var btnLight = document.createElement('button');
    btnLight.textContent = '☀️';
    btnLight.type = 'button';
    btnLight.title = 'Light';

    toggle.appendChild(btnDark);
    toggle.appendChild(btnLight);
    document.body.insertBefore(toggle, document.body.firstChild);

    function applyTheme(t) {
      theme = t;
      document.documentElement.setAttribute('data-theme', t);
      btnDark.classList.toggle('active', t === 'dark');
      btnLight.classList.toggle('active', t === 'light');
      try { localStorage.setItem('horizon-theme', t); } catch (e) {}
    }

    btnDark.addEventListener('click', function () { applyTheme('dark'); });
    btnLight.addEventListener('click', function () { applyTheme('light'); });
    applyTheme(theme);
  }

  function setupLanguageToggle() {
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN'; btnEn.type = 'button';
    var btnZh = document.createElement('button');
    btnZh.textContent = '中'; btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);
    document.body.insertBefore(toggle, document.body.firstChild);

    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) {}
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      btnEn.classList.toggle('active', lang === 'en');
      btnZh.classList.toggle('active', lang === 'zh');
    }

    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      enSection.classList.toggle('hidden', lang !== 'en');
      zhSection.classList.toggle('hidden', lang === 'en');
    }

    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, '')))
        target = path.replace(/-zh(\.html)?$/, '-en$1');
      else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, '')))
        target = path.replace(/-en(\.html)?$/, '-zh$1');
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) {}
      if (zhSection && enSection) showSection(lang);
      else switchArticleLang(lang);
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });
    updateButtons(currentLang);
    if (zhSection && enSection) showSection(currentLang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    setupThemeToggle();
    setupLanguageToggle();
  });
})();
