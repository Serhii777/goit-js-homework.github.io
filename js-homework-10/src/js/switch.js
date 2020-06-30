const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightTheme = Object.keys(Theme)[0];
const darkTheme = Object.keys(Theme)[1];

const switchRef = document.querySelector('.js-switch-input');
if (switchRef) {
  initTheme();
}

switchRef.addEventListener('input', event => {
  if (event.target.checked) {
    switchDarkTheme();
  } else {
    switchLightTheme();
  }
});

function switchDarkTheme() {
  document.body.classList.add(`${Theme.DARK}`);
  localStorage.setItem(`${darkTheme}`, `${Theme.DARK}`);

  document.body.classList.remove(`${Theme.LIGHT}`);
  localStorage.removeItem(`${lightTheme}`);
}

function switchLightTheme() {
  document.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem(`${lightTheme}`, `${Theme.LIGHT}`);

  document.body.classList.remove(`${Theme.DARK}`);
  localStorage.removeItem(`${darkTheme}`);
}

function initTheme() {
  if (localStorage.getItem(`${darkTheme}`) === `${Theme.DARK}`) {
    document.body.classList.add(`${Theme.DARK}`);
    switchRef.checked = true;
  }
}
