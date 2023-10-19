"use strict";

$(function () {
  function hideElements() {
    var screenWidth = window.innerWidth;
    var logo_menu = document.getElementById('menu_hamburger');
    var menu = document.getElementById('menu');
    var logo = document.getElementById('logo');
    var header__right = document.getElementById('header__right-block');
    var header__left = document.getElementById('header__left-block');
    if (screenWidth <= 1200) {
      logo.style.display = 'block';
      logo_menu.style.display = 'block';
      menu.style.display = 'none';
      header__right.style.display = 'none';
      header__left.style.display = 'none';
    } else {
      logo_menu.style.display = 'none';
      logo.style.display = 'none';
      menu.style.display = 'flex';
      header__right.style.display = 'flex';
      header__left.style.display = 'flex';
    }
  }
  window.addEventListener('load', hideElements);
  window.addEventListener('resize', hideElements);
});