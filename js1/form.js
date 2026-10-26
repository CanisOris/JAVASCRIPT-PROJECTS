const form = document.getElementById('form-contact');
const fullname = document.getElementById('full-name');
const fullnameError = document.getElementById('full-name-error');
const email = document.getElementById('Email');
const emailError = document.getElementById('EmailError');
const form_status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
    const nameValid = fullname.value.trim() !== '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email.value.trim());

    fullnameError.classList.toggle('hidden', nameValid);
    emailError.classList.toggle('hidden', emailValid);

    if (!nameValid || !emailValid) {
        event.preventDefault();
    }
});