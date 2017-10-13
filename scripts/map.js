var modal_map = document.querySelector(".modal_map");
var close_map = document.querySelector(".close_map");
var map = document.querySelector(".map_img");
var isMapHide = true;
map.addEventListener('click', function () {
    if (isMapHide) {
        modal_map.classList.remove("map_hide");
        isMapHide = false;
    } else {
        modal_map.classList.add("map_hide");
        isMapHide = true;
    }
});
close_map.addEventListener('click', function () {
    modal_map.classList.add("map_hide");
    isMapHide = true;
})