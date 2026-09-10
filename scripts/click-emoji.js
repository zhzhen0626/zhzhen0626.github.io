(() => {
  const emojis = ['✨', '🤖', '⭐', '🎾', '🚀', '🐉', '🍀'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.addEventListener('click', (event) => {
    if (event.detail === 0 || event.button !== 0) return;
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;

    const active = document.querySelectorAll('.click-emoji');
    if (active.length >= 16) active[0].remove();

    const emoji = document.createElement('span');
    emoji.className = 'click-emoji';
    emoji.setAttribute('aria-hidden', 'true');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${event.clientX}px`;
    emoji.style.top = `${event.clientY}px`;
    document.body.appendChild(emoji);

    const animation = emoji.animate(
      reducedMotion.matches
        ? [{ opacity: 1 }, { opacity: 0 }]
        : [
            { opacity: 1, transform: 'translate(-50%, -50%) scale(0.7)' },
            { opacity: 1, transform: 'translate(-50%, -100%) scale(1.1)', offset: 0.2 },
            { opacity: 0, transform: 'translate(-50%, -250%) scale(0.9)' },
          ],
      { duration: reducedMotion.matches ? 250 : 850, easing: 'ease-out' },
    );
    animation.onfinish = () => emoji.remove();
    animation.oncancel = () => emoji.remove();
  });
})();
