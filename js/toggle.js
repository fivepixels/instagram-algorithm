// Grab HTML Elements
const nameSpan = document.querySelector('.nav-bar__name li');
const navList = document.querySelector('.nav-bar__list');
const toggleBtn = document.querySelector('.nav-bar__toggle-btn i');
const toggleBtnDiv = document.querySelector('.nav-bar__toggle-btn');

// Set Variable
const maxWidth = 650;

// seemBool = [width, click];
let seemBool = false;
let nowWindowWidth = window.innerWidth;

// Set Keywords
const NONE_DISPLAY_KEY = 'none-display';

// Set Function
const display = {
  show: (tag) => {
    tag.classList.remove(NONE_DISPLAY_KEY);
  },

  hide: (tag) => {
    tag.classList.add(NONE_DISPLAY_KEY);
  }
}

function handleClickToggleBtn() {
  if (seemBool === true) {
    seemBool = false;
  } else if (seemBool === false) {
    seemBool = true;
  }
  showOrHide();
}

function handleResizeWindow() {
  nowWindowWidth = window.innerWidth;

  if (nowWindowWidth <= maxWidth) {
    seemBool = false
    nameSpan.innerText = 'Novelier - Instagram Algorithm';
    display.show(toggleBtnDiv);
  } else {
    nameSpan.innerText = 'Novelier';
    display.hide(toggleBtnDiv);
    seemBool = true
  }
  showOrHide();
}

function showOrHide() {
  if (seemBool === true) {
    display.show(navList);
  } else {
    display.hide(navList);
  }
}

handleResizeWindow();
showOrHide();

toggleBtn.addEventListener('click', handleClickToggleBtn);
window.addEventListener('resize', handleResizeWindow);
