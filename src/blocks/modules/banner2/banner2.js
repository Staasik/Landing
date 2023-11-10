$(function () {
    // Функция для изменения изображения в зависимости от ширины экрана
    function hideImageOnLargeScreen() {
        const bannerImage = document.getElementById('banner2Image');
        const screenWidth = window.innerWidth;
        if (screenWidth > 1000) {
            bannerImage.style.display = 'none';
        } else {
            bannerImage.style.display = 'block';
        }
    }
    window.addEventListener('load', hideImageOnLargeScreen);
    window.addEventListener('resize', hideImageOnLargeScreen);

    // Инициализация маски для телефона
    var phoneMask = IMask(document.getElementById('phoneInput1'), {
        mask: '+{7}(000)000-00-00'
    });
    var phoneMask = IMask(document.getElementById('phoneInput2'), {
        mask: '+{7}(000)000-00-00'
    });
    var phoneMask = IMask(document.getElementById('phoneInput3'), {
        mask: '+{7}(000)000-00-00'
    });
    var phoneMask = IMask(document.getElementById('phoneInput'), {
        mask: '+{7}(000)000-00-00'
    });
})
