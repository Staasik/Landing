"use strict";

$(function () {
  // Функция для изменения изображения в зависимости от ширины экрана
  function hideImageOnLargeScreen() {
    var bannerImage = document.getElementById('banner2Image');
    var screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      bannerImage.style.display = 'none';
    } else {
      bannerImage.style.display = 'block';
    }
  }
  window.addEventListener('load', hideImageOnLargeScreen);
  window.addEventListener('resize', hideImageOnLargeScreen);
});