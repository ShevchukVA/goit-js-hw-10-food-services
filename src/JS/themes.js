const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  inputCheckbox: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
};

refs.inputCheckbox.addEventListener('change', handleInputCheckbox);
document.addEventListener('DOMContentLoaded', handleSavedThemes);

function handleInputCheckbox(event) {
  if (event.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function handleSavedThemes() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    refs.inputCheckbox.checked = true;
  }
  refs.body.classList.add(savedTheme);
  if (savedTheme === null) {
    refs.body.classList.replace(savedTheme, Theme.LIGHT);
  }
}
