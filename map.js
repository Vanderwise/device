var map = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var close = document.querySelector(".map-close");

map.addEventListener("click", function () {
    modalMap.classList.add("map-show");
});
close.addEventListener("click", function () {
    modalMap.classList.remove("map-show");
});
window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("map-show");
});           