const colorThemeContainer = document.querySelector('fieldset');
const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

const setTheme = function () {
  const activeTheme = localStorage.getItem('theme');
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  //fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemeContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('input')) {
    storeTheme(e.target.id);
    document.documentElement.className = e.target.id;
  }
});

document.onload = setTheme();
