"use strict";

$(function () {
  var stocksItems = document.querySelectorAll('.stocks__item');
  var stocksDots = document.querySelectorAll('.stocks__dot');

  // Обработчик клика на точку пагинации
  stocksDots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      stocksItems.forEach(function (item, i) {
        item.style.display = i === index ? 'flex' : 'none';
      });
      stocksDots.forEach(function (dot, i) {
        var useElement = dot.querySelector('use');
        dot.classList.toggle('active', i === index);
        useElement.setAttribute('xlink:href', i === index ? './img/sprites/sprite.svg#advantages_dot_active' : './img/sprites/sprite.svg#advantages_dot');
      });
    });
  });

  // Проверка ширины экрана 
  function checkScreenWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 1000) {
      stocksItems.forEach(function (item, index) {
        item.style.display = index === 0 ? 'flex' : 'none';
      });
    } else {
      stocksItems.forEach(function (item) {
        item.style.display = 'flex';
      });
    }
  }
  window.addEventListener('load', function () {
    checkScreenWidth();
  });
  window.addEventListener('resize', checkScreenWidth);
});