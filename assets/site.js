(() => {
  'use strict';

  // Chat loads only when a visitor asks for it, so the site needs no consent banner.
  const launcher = document.querySelector('[data-chat]');
  const token = document.querySelector('meta[name="bullfrog:chatwoot-token"]')?.content ?? '';
  const baseUrl = 'https://app.chatwoot.com';
  let loading = false;

  function loadChat(open) {
    if (loading) return;
    loading = true;
    // Chatwoot's own bubble replaces the launcher once the widget is up.
    window.addEventListener('chatwoot:ready', () => {
      if (open) window.$chatwoot?.toggle('open');
      launcher.hidden = true;
    }, { once: true });
    const script = document.createElement('script');
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => window.chatwootSDK?.run({ websiteToken: token, baseUrl });
    script.onerror = () => { loading = false; };
    document.head.append(script);
  }

  if (launcher && token) {
    launcher.hidden = false;
    launcher.addEventListener('click', () => loadChat(true));
    // A conversation the visitor started follows them between pages.
    if (/(?:^|;\s*)cw_conversation=/.test(document.cookie)) loadChat(false);
  }

  // Remove what the retired Mixpanel integration and consent banner stored.
  try {
    window.localStorage.removeItem('bullfrog-consent');
    for (const storage of [window.localStorage, window.sessionStorage]) {
      const keys = Array.from({ length: storage.length }, (_, i) => storage.key(i));
      for (const key of keys) {
        if (/^(mp_|__mp)/.test(key ?? '')) storage.removeItem(key);
      }
    }
  } catch {
    // Some browsers deny access to storage.
  }
  const host = window.location.hostname.split('.');
  const domains = ['', ...host.map((_, i) => host.slice(i).join('.'))];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(mp_|__mp)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
  try {
    window.indexedDB?.deleteDatabase('mixpanelBrowserDb');
  } catch {
    // Recording storage may be unavailable.
  }

  const menus = [...document.querySelectorAll('.compare-menu, .mobile-menu')];
  document.addEventListener('click', event => {
    for (const menu of menus) {
      if (!menu.contains(event.target) || event.target.closest('a')) menu.open = false;
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    for (const menu of menus) {
      if (!menu.open) continue;
      menu.open = false;
      if (menu.contains(document.activeElement)) menu.querySelector('summary').focus();
    }
  });
})();

// One-shot visual enhancement. Independent of chat and storage.
(() => {
  if (typeof IntersectionObserver !== 'function' || typeof Element.prototype.animate !== 'function') return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches) return;
  const animations = new Set();
  function play(element, keyframes, options) {
    const animation = element.animate(keyframes, options);
    animations.add(animation);
    animation.finished.catch(() => {}).finally(() => animations.delete(animation));
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const requests = entry.target.matches('.requests-body');
      if (!entry.isIntersecting || preference.matches || entry.intersectionRatio < (requests ? .1 : .6)) continue;
      observer.unobserve(entry.target);
      if (requests) {
        // Only animation effects hide waiting rows; cancellation/failure leaves static HTML visible.
        entry.target.querySelectorAll('.request').forEach((row, index) => {
          play(row, [
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 500, delay: index * 1000, fill: 'backwards', easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
      } else {
        play(entry.target.querySelector('.step-number'), [
          { transform: 'scale(.88)' }, { transform: 'scale(1)' },
        ], { duration: 450, easing: 'cubic-bezier(.2,.8,.2,1)' });
      }
    }
  }, { threshold: [.1, .6] });
  document.querySelectorAll('.requests-body,.step').forEach(element => observer.observe(element));
  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const animation of animations) animation.cancel();
  });
})();
