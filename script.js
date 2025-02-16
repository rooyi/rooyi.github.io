const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    if (root.style.getPropertyValue('--bg-color') === 'var(--bg-color-light)') {
        root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        root.style.setProperty('--bg-color', 'var(--bg-color-light)');
        root.style.setProperty('--text-color', 'var(--text-color-light)');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
});

document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");
  
      // Remove active class from all buttons and contents
      document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
  
      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
  