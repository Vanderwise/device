var writeUsButton = document.querySelector(".writeus-button");
var modalForm = document.querySelector(".modal-write");
var fio = modalForm.querySelector("[name=user-name]");
var formClose = document.querySelector(".write-close");
var form = modalForm.querySelector("form");
var email = modalForm.querySelector("[name=user-email]");

         
writeUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalForm.classList.add("form-show");
    fio.focus();
});
formClose.addEventListener("click", function() {
    modalForm.classList.remove("form-show");
});
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!fio.value || !email.value) {
        console.log("Нужно ввести имя");
    }
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalForm.classList.contains("form-show")) {
            modalForm.classList.remove("form-show");
        }
    }
}); 

           