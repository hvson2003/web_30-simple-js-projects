const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
    const name = document.getElementById('contact-name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Fullname is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)*$/)) {
        nameError.innerHTML = 'Write your fullname';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    const phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no is should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const required = 30;
    var left = required - message.lenth;
    
    if (left > 0) {
        messageError.innerHTML = left + ' more characer required';
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix  error to submit";
        setTimeout(function(){ submitError.style.display = 'none'; }, 3000);
        return false;
    }
}