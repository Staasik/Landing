$(function () {
  // Функция для изменения изображения в зависимости от ширины экрана
  function updateImage() {
    const bannerImage = document.getElementById('bannerImage');
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1000) {
      bannerImage.src = './img/content/banner_768х583.png';
    } else {
      bannerImage.src = './img/content/banner_1920х800.png';
    }
  }
  window.addEventListener('load', updateImage);
  window.addEventListener('resize', updateImage);
})