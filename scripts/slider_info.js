var delivery_button = document.querySelector(".delivery_button");
var guarantee_button = document.querySelector(".guarantee_button");
var credit_button = document.querySelector(".credit_button");
var delivery_info = document.querySelector(".delivery_info");
var guarantee_info = document.querySelector(".guarantee_info");
var credits_info = document.querySelector(".credits_info");
delivery_button.addEventListener('click', function () {
    delivery_info.classList.remove("hide");
    guarantee_info.classList.add("hide");
    credits_info.classList.add("hide");
    delivery_button.classList.add("chosen_button");
    guarantee_button.classList.remove("chosen_button");
    credit_button.classList.remove("chosen_button");
});
guarantee_button.addEventListener('click', function () {
    delivery_info.classList.add("hide");
    guarantee_info.classList.remove("hide");
    credits_info.classList.add("hide");
    delivery_button.classList.remove("chosen_button");
    guarantee_button.classList.add("chosen_button");
    credit_button.classList.remove("chosen_button");
});
credit_button.addEventListener('click', function () {
    delivery_info.classList.add("hide");
    guarantee_info.classList.add("hide");
    credits_info.classList.remove("hide");
    delivery_button.classList.remove("chosen_button");
    guarantee_button.classList.remove("chosen_button");
    credit_button.classList.add("chosen_button");
});