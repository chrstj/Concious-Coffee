const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === false) {
        firstNameError.style.display = "block";
    } 

    if (checkLength(lastName.value, 0) === false) {
        lastNameError.style.display = "block";
    } 

    if (validateEmail(email.value) === false) {
        emailError.style.display = "block";
    } 

    if (checkLength(password.value, 6) === false) {
        passwordError.style.display = "block";
    } 
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}