var map = document.querySelector(".contacts-map");
var modalmap = document.querySelector(".modal-map");
var close = document.querySelector(".map-close");
            
var writeus = document.querySelector(".writeus-button");
var modalform = document.querySelector(".modal-write");
var fio = modalform.querySelector("[name=user-name]");
var formclose = document.querySelector(".write-close");
var form = modalform.querySelector("form");
var email = modalform.querySelector("[name=user-email]");


map.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalmap.classList.add("map-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalmap.classList.remove("map-show");
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalmap.classList.contains("map-show")) {
            evt.preventDefault();
            modalmap.classList.remove("map-show");
        }
    }
});           
            
writeus.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalform.classList.add("form-show");
    fio.focus();
});
formclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalform.classList.remove("form-show");
});
form.addEventListener("submit", function(evt) {
    if (!fio.value || !email.value) {
        evt.preventDefault();
        console.log("Нужно ввести имя");
    }
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalform.classList.contains("form-show")) {
            evt.preventDefault();
            modalform.classList.remove("form-show");
        }
    }
}); 
           