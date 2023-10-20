$(function () {
  function hideElements() {
    const screenWidth = window.innerWidth;
    const logo_menu = document.getElementById('menu_hamburger');
    const menu = document.getElementById('menu');ъ
    const header__right = document.getElementById('header__right-block');
    const header__left = document.getElementById('header__left-block');
    var header_logo = document.getElementById('header_logo');

    if (screenWidth <= 1200) {
      logo_menu.style.display = 'block';
      menu.style.display = 'none';
      header__right.style.display = 'none';
      header__left.style.display = 'none';
      header_logo.style.display = 'block';
    } else {
      logo_menu.style.display = 'none';
      menu.style.display = 'flex';
      header__right.style.display = 'flex';
      header__left.style.display = 'flex';
      header_logo.style.display = 'none';
    }
  }
  window.addEventListener('load', hideElements);
  window.addEventListener('resize', hideElements);
})