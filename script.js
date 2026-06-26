const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

import { playhtml } from "https://unpkg.com/playhtml";

// Assign each visitor a cursor color in the blue/gray range, persisted across visits.
function getCursorColor() {
  const stored = localStorage.getItem('cursor-color');
  if (stored) return stored;

  // 50/50 chance of a blue or a gray; pick a random shade within that band.
  const isBlue = Math.random() < 0.5;
  const hue = 210 + Math.floor(Math.random() * 20);      // 210–230 (blue)
  const saturation = isBlue ? 55 + Math.floor(Math.random() * 25) // 55–80%
                            : 5 + Math.floor(Math.random() * 10);  // 5–15% (gray)
  const lightness = 45 + Math.floor(Math.random() * 20);  // 45–65%
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  localStorage.setItem('cursor-color', color);
  return color;
}

playhtml.init({
  cursors: {
    enabled: true,
    room: "domain",
    playerIdentity: {
      publicKey: crypto.randomUUID(),
      playerStyle: { colorPalette: [getCursorColor()] }
    }
  }
});

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
