export default function initOverflowDebug() {
  const HIGHLIGHT = 'overflow-debug-highlight';
  // inject styles
  const style = document.createElement('style');
  style.id = 'overflow-debug-styles';
  style.textContent = `
    .${HIGHLIGHT} { outline: 3px solid rgba(255,0,0,0.9) !important; }
    .overflow-debug-btn { position: fixed; top: 12px; left: 12px; z-index: 99999; background: rgba(0,0,0,0.7); color: #fff; padding: 6px 10px; border-radius: 8px; font-size: 13px; cursor: pointer; box-shadow: 0 6px 18px rgba(0,0,0,0.35); }
  `;
  document.head.appendChild(style);

  function scan() {
    document.querySelectorAll('.' + HIGHLIGHT).forEach(el => el.classList.remove(HIGHLIGHT));
    const vw = document.documentElement.clientWidth;
    const all = Array.from(document.body.querySelectorAll('*'));
    all.forEach(el => {
      if (!(el instanceof HTMLElement)) return;
      // ignore the debug button and styles
      if (el.id === 'overflow-debug-styles' || el.classList.contains('overflow-debug-btn')) return;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0) return;
      // check horizontal overflow beyond viewport
      if (rect.right > vw + 1 || rect.left < -1) {
        el.classList.add(HIGHLIGHT);
      }
    });
  }

  const observer = new MutationObserver(() => {
    // small debounce
    clearTimeout(observer._t);
    observer._t = setTimeout(scan, 120);
  });
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
  window.addEventListener('resize', scan);

  // add toggle button
  const btn = document.createElement('button');
  btn.className = 'overflow-debug-btn';
  btn.textContent = 'Hide overflow highlights';
  let visible = true;
  btn.onclick = () => {
    visible = !visible;
    if (visible) {
      document.querySelectorAll('.' + HIGHLIGHT).forEach(e => e.style.outline = '3px solid rgba(255,0,0,0.9)');
      btn.textContent = 'Hide overflow highlights';
    } else {
      document.querySelectorAll('.' + HIGHLIGHT).forEach(e => e.style.outline = '');
      btn.textContent = 'Show overflow highlights';
    }
  };
  document.documentElement.appendChild(btn);

  // initial scan
  // run after a short delay to allow initial layout
  setTimeout(scan, 60);

  // return cleanup
  return function cleanup() {
    observer.disconnect();
    window.removeEventListener('resize', scan);
    style.remove();
    btn.remove();
  };
}
