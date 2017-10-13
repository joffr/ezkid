var user = document.querySelector(".user");
var modal = document.querySelector(".modal");
var close_modal = document.querySelector(".close_modal");
var isModalHide = true;
user.addEventListener('click', function () {
    if (isModalHide) {
        modal.classList.remove("modal_hide");
        isModalHide = false;
    } else {
        modal.classList.add("modal_hide");
        isModalHide = true;
    }
});
close_modal.addEventListener('click', function () {
    modal.classList.add("modal_hide");
    isModalHide = true;
});