$(function () {
    const getButton = document.getElementById("get_button");
    const phoneModal = document.getElementById("phoneModal");
    const modalClose = document.getElementById("modal_close");
    getButton.addEventListener("click", function () {
        phoneModal.style.display = "flex";
    });
    modalClose.addEventListener("click", function () {
        phoneModal.style.display = "none";
    });
})