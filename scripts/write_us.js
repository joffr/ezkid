var write_us_button = document.querySelector(".write_us_button");
var write_us = document.querySelector(".write_us");
var close_write_us = document.querySelector(".close_write_us");
var isWriteUsHide = true;
write_us_button.addEventListener('click', function () {
    if (isWriteUsHide) {
        write_us.classList.remove("write_us_hide");
        isWriteUsHide = false;
    } else {
        write_us.classList.add("write_us_hide");
        isWriteUsHide = true;
    }
});
close_write_us.addEventListener('click', function () {
    write_us.classList.add("write_us_hide");
    isWriteUsHide = true;
});