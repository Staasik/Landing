"use strict";

$(function () {
  var phoneMenu = document.getElementById("phoneMenu");
  var defaultMenu = document.getElementById("defaultMenu");
  var menuHamburger = document.getElementById("menu_hamburger");
  var menuClose = document.getElementById("menu_close");
  menuClose.addEventListener("click", function () {
    phoneMenu.style.display = "none";
    defaultMenu.style.display = "flex";
  });
  menuHamburger.addEventListener("click", function () {
    phoneMenu.style.display = "flex";
    defaultMenu.style.display = "none";
  });
});