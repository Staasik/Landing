"use strict";

$(function () {
  var advantagesItems = document.querySelectorAll('.advantages__item');
  var paginationDots = document.querySelectorAll('.advantages__dot');
  var pagination = document.querySelector('.advantages__pagination');

  // Обработчик клика на точку пагинации
  paginationDots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      advantagesItems.forEach(function (item, i) {
        item.style.display = i === index ? 'flex' : 'none';
      });
      paginationDots.forEach(function (dot, i) {
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
      advantagesItems.forEach(function (item, index) {
        item.style.display = index === 0 ? 'flex' : 'none';
      });
      document.querySelector('.advantages__pagination').style.display = 'flex';
    } else {
      document.querySelector('.advantages__pagination').style.display = 'none';
      advantagesItems.forEach(function (item) {
        item.style.display = 'flex';
      });
    }
  }
  window.addEventListener('load', function () {
    checkScreenWidth();
  });
  window.addEventListener('resize', checkScreenWidth);
});