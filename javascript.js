const form = document.querySelector(".form-signup");
form.noValidate = true;

form.addEventListener('submit', validateForm);

function validateForm(e) {
    const formArg = e.target;
    if(form.checkValidity()) {

    }
    else {
        e.preventDefault();
    }
}