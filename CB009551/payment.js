document.addEventListener("DOMContentLoaded", () =>{
    const sumtable = document.getElementById('guesttable');
    sumtable.innerHTML = localStorage.getItem('sumtable');
})


var ccnumError = document.getElementById('ccnum-error');
var dateError = document.getElementById('date-error');
var submitError = document.getElementById('submit-error');
var cvvError = document.getElementById('cvv-error');
var cnameError = document.getElementById('cname-error');
// SORT OUT THE NAMES RETARD

function validateCcnum() {
    var ccnum = document.getElementById('ccnum').value;

    if (ccnum.length != 16) {
        ccnumError.innerHTML = 'Please enter a valid credit card number'; 
        return false;
    }
    ccnumError.innerHTML = '';
    return true;
}


function validateExpirationDate() {
    var currentYear = new Date().getFullYear() % 100; 
    var monthInput = document.getElementById("month");
    var yearInput = document.getElementById("year");
    var dateError = document.getElementById("date-error");

    var enteredMonth = parseInt(monthInput.value, 10);
    var enteredYear = parseInt(yearInput.value, 10);

    dateError.innerHTML = "";

    if (isNaN(enteredMonth) || isNaN(enteredYear)) {
        dateError.innerHTML = "Please enter valid month and year.";
        return false;
    }

    if (enteredMonth < 1 || enteredMonth > 12) {
        dateError.innerHTML = "Month must be between 01 and 12.";
        return false;
    }

    if (enteredYear < currentYear || enteredYear > currentYear + 10) {
        dateError.innerHTML = "Year must be between " + currentYear + " and " + (currentYear + 10) + ".";
        return false;
    }

    // Additional validation for cards expiring in the current year
    if (enteredYear === currentYear && enteredMonth < new Date().getMonth() + 1) {
        dateError.innerHTML = "Card has already expired.";
        return false;
    }

    dateError.innerHTML = '';
    return true;


}







function validateCvv() {
    var cvv = document.getElementById('cvv').value;

    if (cvv.length != 3) {
        cvvError.innerHTML = 'Please enter a valid ccv number';
        return false;
    }
    cvvError.innerHTML = '';
    return true;
}

function validateCname() { 
    var cname = document.getElementById('cname').value;

    if (cname.length == 0) {
        cnameError.innerHTML = 'Please enter your credit card name';
        return false;
    }
    cnameError.innerHTML = '';
    return true;
}



function ValidateForm1() {
    var ccnumValid = validateCcnum();
    var expirationValid = validateExpirationDate();
    var cvvValid = validateCvv();
    var cnameValid = validateCname();

    if (ccnumValid && expirationValid && cvvValid && cnameValid) {
        // All fields are valid, allow form submission
        submitError.innerHTML = "";
        return true; // Form will be submitted
    } else {
        // At least one field is invalid, prevent form submission
        submitError.innerHTML = "Please fill in all the required fields correctly."
        return false; // Form submission will be blocked
    }
}






