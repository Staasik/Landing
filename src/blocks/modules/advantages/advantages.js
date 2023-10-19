$(function () {
    const advantagesItems = document.querySelectorAll('.advantages__item');
    const paginationDots = document.querySelectorAll('.advantages__dot');
    const pagination = document.querySelector('.advantages__pagination')

    // Обработчик клика на точку пагинации
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            advantagesItems.forEach((item, i) => {
                item.style.display = i === index ? 'flex' : 'none';
            });

            paginationDots.forEach((dot, i) => {
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
            advantagesItems.forEach((item, index) => {
                item.style.display = index === 0 ? 'flex' : 'none';
            });

            document.querySelector('.advantages__pagination').style.display = 'flex';
        } else {
            document.querySelector('.advantages__pagination').style.display = 'none';
            advantagesItems.forEach(item => {
                item.style.display = 'flex';
            });
        }
    }

    window.addEventListener('load', () => {
        checkScreenWidth();
    });
    window.addEventListener('resize', checkScreenWidth);
})