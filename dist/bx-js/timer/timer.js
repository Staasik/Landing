"use strict";

$(function () {
  var endDate = new Date('2023-11-31 23:59:59').getTime(); // Дата окончания акции

  // Функция для обновления таймера
  function updateTimer() {
    var now = new Date().getTime();
    var timeRemaining = endDate - now;
    if (timeRemaining <= 0) {
      document.getElementById('countdown').style.display = 'none';
      document.querySelector(".timer__left-block-text").textContent = "Акция закончилась";
      return;
    }
    var padZero = function padZero(num) {
      return num < 10 ? "0".concat(num) : num;
    };
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
  }

  // Функция для обновления SVG изображения
  function updateSVGImage() {
    var svgImage1 = document.getElementById('svgImage1');
    var svgImage2 = document.getElementById('svgImage2');
    if (window.innerWidth <= 1400) {
      svgImage1.style.display = 'none';
      svgImage2.style.display = 'block';
    } else {
      svgImage1.style.display = 'block';
      svgImage2.style.display = 'none';
    }
  }
  setInterval(updateTimer, 1000);
  updateTimer();
  updateSVGImage();
  window.addEventListener('resize', updateSVGImage);
});