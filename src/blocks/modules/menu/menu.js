$(function() {
    const phoneMenu = document.getElementById("phoneMenu");
    const defaultMenu = document.getElementById("defaultMenu");
    const menuHamburger = document.getElementById("menu_hamburger");
    const menuClose = document.getElementById("menu_close");
    menuClose.addEventListener("click", function () {
        phoneMenu.style.display = "none";
        defaultMenu.style.display = "flex";
    });
    menuHamburger.addEventListener("click", function () {
        phoneMenu.style.display = "flex";
        defaultMenu.style.display = "none";
    });    
})