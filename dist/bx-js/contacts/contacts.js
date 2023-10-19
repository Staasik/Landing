"use strict";

$(function () {
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