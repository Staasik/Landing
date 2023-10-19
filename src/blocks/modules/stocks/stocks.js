$(function() {
    const stocksItems = document.querySelectorAll('.stocks__item');
    const stocksDots = document.querySelectorAll('.stocks__dot');
    
    // Обработчик клика на точку пагинации
    stocksDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stocksItems.forEach((item, i) => {
                item.style.display = i === index ? 'flex' : 'none';
            });

            stocksDots.forEach((dot, i) => {
                const useElement = dot.querySelector('use');
                dot.classList.toggle('active', i === index);
                useElement.setAttribute('xlink:href', i === index ? './img/sprites/sprite.svg#advantages_dot_active' : './img/sprites/sprite.svg#advantages_dot');
            });
        });
    });

    // Проверка ширины экрана 
    function checkScreenWidth() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 1000) {
            stocksItems.forEach((item, index) => {
                item.style.display = index === 0 ? 'flex' : 'none';
            });
        } else {
            stocksItems.forEach(item => {
                item.style.display = 'flex';
            });
        }
    }

    window.addEventListener('load', () => {checkScreenWidth();});
    window.addEventListener('resize', checkScreenWidth);
})