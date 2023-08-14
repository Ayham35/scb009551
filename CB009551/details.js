document.addEventListener("DOMContentLoaded", () =>{
    const sumtable = document.getElementById('guesttable');
    sumtable.innerHTML = localStorage.getItem('sumtable');
})

const form = document.getElementById('form');
const errorElement = document.getElementById('error');

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var cemailError = document.getElementById('cemail-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('fullname').value;

    if (name.length == 0) {
        nameError.innerHTML = '*Name is required';
        return false;
    }

    nameError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = '*Phone number required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Invalid number';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid number';
        return false;
    }
    phoneError.innerHTML = '';
    return true;

}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'E-mail is required';
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "E-mail Invalid";
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validateCemail() {
    var cemail = document.getElementById('cemail').value;
    var email = document.getElementById('email').value;

    if (cemail.length == 0) {
        cemailError.innerHTML = 'Please confirm your E-mail';
        return false;
    }    

    if(!cemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        cemailError.innerHTML = "E-mail Invalid";
        return false;
    }

    if (cemail != email) {
        cemailError.innerHTML = 'Email does not match';
        return false;
    }

    cemailError.innerHTML = '';
    return true;
}

// local storage

const fullnameInput = document.getElementById('fullname');

fullnameInput.addEventListener("change", function() {
    localStorage.setItem("selectedName", fullnameInput.value);
})

const storedFullname = localStorage.getItem("selectedName");
if (storedFullname) {
    fullnameInput.value = storedFullname;
}

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener("change", function() {
    localStorage.setItem("selectedPhone", phoneInput.value);
})

const storedPhone = localStorage.getItem("selectedEmail");
if (storedPhone) {
    phoneInput.value = storedPhone;
}



const emailInput = document.getElementById('email');

emailInput.addEventListener("change", function() {
        localStorage.setItem("selectedEmail", emailInput.value);
})

const storedEmail = localStorage.getItem("selectedEmail");
if (storedEmail) {
    emailInput.value = storedEmail;
}


const cemailInput = document.getElementById('cemail');

cemailInput.addEventListener("change", function() {
        localStorage.setItem("selectedCemail", cemailInput.value);
})

const storedCemail = localStorage.getItem("selectedEmail");
if (storedCemail) {
    cemailInput.value = storedCemail;
}


const genderSelect = document.getElementById("gender");


genderSelect.addEventListener("change", function () {
 
    const selectedGender = genderSelect.value;
    localStorage.setItem("selectedGender", selectedGender);
});


const storedGender = localStorage.getItem("selectedGender");
if (storedGender) {
    genderSelect.value = storedGender;
}



function validateForm() {
    var NameValid = validateName();
    var PhoneValid = validatePhone();
    var EmailValid = validateEmail();
    var CemailValid = validateCemail();

    if (NameValid && PhoneValid && EmailValid && CemailValid) {
        return true; 
    } 
    else {
        submitError.innerHTML = "Please fill in all the required fields correctly."
        return false; 
    }
}


const summaryDateCell = document.getElementById('summary-date');
summaryDateCell.textContent = localStorage.getItem('selectedDate');