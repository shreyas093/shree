const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
 

form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();
});
function setError(element, message) {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}
function setSuccess(element) {
    const input = element.parentElement;
    const successDisplay = input.querySelector('success');

    successDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    function validateInputs() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    if (fnameValue === '') {
        setError(fname, 'Firstname is required');
    } else {
        setSuccess(fname);
    }


    if (lnameValue === '') {
        setError(lname, 'Lastname is required');
    } else {
        setSuccess(lname);
    }



    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (pass1Value === '') {
        setError(pass1, 'Password is required');
    } else if (pass1Value.length < 8) {
        setError(pass1, 'Password must be at least 8 character.');
    } else {
        setSuccess(pass1);
    }

    if (pass2Value === '') {
        setError(pass2, 'Please confirm your password');
    } else if (pass2Value !== pass1Value) {
        setError(pass2, "Passwords doesn't match");
    } else {
        setSuccess(pass2);
    };

}