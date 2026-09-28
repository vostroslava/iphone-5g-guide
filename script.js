const tabs = document.querySelectorAll('[data-tab]');
for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const active = tab.dataset.tab;
    for (const item of tabs) {
      const selected = item.dataset.tab === active;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    }
    document.getElementById('panel-mac').hidden = active !== 'mac';
    document.getElementById('panel-win').hidden = active !== 'win';
  });
}

document.querySelector('[data-copy]').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const source = document.getElementById(button.dataset.copy);
  try {
    await navigator.clipboard.writeText(source.textContent.trim());
    button.textContent = 'Скопировано ✓';
    setTimeout(() => { button.textContent = 'Скопировать запрос'; }, 2200);
  } catch {
    button.textContent = 'Выделите текст и скопируйте';
  }
});
