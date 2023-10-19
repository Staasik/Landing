$(function() {
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
})