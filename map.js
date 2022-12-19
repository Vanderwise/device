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
    if (evt.keyCode === 27) {
       if(modalMap.classList.contains("map-show")) {
        modalMap.classList.remove("map-show")
       };
    }
});
