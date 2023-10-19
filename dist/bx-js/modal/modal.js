"use strict";

$(function () {
  var getButton = document.getElementById("get_button");
  var phoneModal = document.getElementById("phoneModal");
  var modalClose = document.getElementById("modal_close");
  getButton.addEventListener("click", function () {
    phoneModal.style.display = "flex";
  });
  modalClose.addEventListener("click", function () {
    phoneModal.style.display = "none";
  });
});