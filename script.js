const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();

    if (currentBg === getComputedStyle(root).getPropertyValue('--bg-color-light').trim()) {
        root.style.setProperty('--bg-color', getComputedStyle(root).getPropertyValue('--bg-color-dark'));
        root.style.setProperty('--text-color', getComputedStyle(root).getPropertyValue('--text-color-dark'));
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        root.style.setProperty('--bg-color', getComputedStyle(root).getPropertyValue('--bg-color-light'));
        root.style.setProperty('--text-color', getComputedStyle(root).getPropertyValue('--text-color-light'));
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
});
