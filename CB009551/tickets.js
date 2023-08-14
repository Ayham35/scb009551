

const dateInput = document.getElementById("ticketdate");

dateInput.addEventListener("change", function () {
    localStorage.setItem("selectedDate", dateInput.value);
});

const storedDate = localStorage.getItem("selectedDate");
if (storedDate) {
    dateInput.value = storedDate;
}


const summaryDateCell = document.getElementById('summary-date');

dateInput.addEventListener('change', function () {
    const selectedDate = this.value; 
    summaryDateCell.textContent = selectedDate; 
})




// TIME 


// Time update and storing
const time = document.getElementById("time");
const selectedTime = document.getElementById("summary-time"); 
const selectedDuration = document.getElementById("summary-duration"); 
const peakHours = [4, 5, 6, 9, 10, 11]; 

time.addEventListener("change", selectedduration);

function selectedduration() {
  localStorage.removeItem('peakHoursCount')
  localStorage.removeItem('normalHoursCount')
  const selectElement = document.getElementById("time");
  const selectedOptions = Array.from(selectElement.options).filter(option => option.selected);

  localStorage.setItem("Duration", selectedOptions.map(option => option.value).join(','));

  let peakHoursCount = 0;
  let normalHoursCount = 0;
  const totalHoursCount = selectedOptions.length;

  const selectedTimeTexts = selectedOptions.map(option => option.innerText);
  
  selectedTimeTexts.forEach(selectedTimeText => {
    const isSelectedPeak = peakHours.includes(Number(selectedOptions.find(option => option.innerText === selectedTimeText).value));
    if (isSelectedPeak) {
      peakHoursCount++;
      localStorage.setItem('peakHoursCount' , peakHoursCount);
    } else {
      normalHoursCount++;
      localStorage.setItem('normalHoursCount' , normalHoursCount);
    }
  });

  selectedTime.innerText = `${selectedTimeTexts.join(', ')}`; 
  selectedDuration.innerText = `${totalHoursCount} hrs (${normalHoursCount} Normal : ${peakHoursCount} Peak)`; 
  localStorage.setItem('timecell', `${selectedTimeTexts.join(', ')}`);
  localStorage.setItem('durationcell', `${totalHoursCount} hrs (${normalHoursCount} Normal : ${peakHoursCount} Peak)`)

  calculateCharge(); 
}


// GUESTS


const guest = document.getElementsByClassName("guest");
console.log(guest[0].querySelector('#guestbtn'));
var guest_arr = Array.from(guest);

let arr = new Array(guest_arr.length).fill('0');

for (const el of guest_arr) {
    console.log(guest_arr.indexOf(el))
    const numID = el.querySelector("#number");
    
    el.querySelectorAll("#guestbtn-")[0].addEventListener("click", function () {
        numID.textContent = parseInt(numID.textContent) - 1;
        arr[guest_arr.indexOf(el)] = numID.textContent;
        localStorage.setItem("guestArr", JSON.stringify(arr));
        console.log(arr);
        calculateCharge(); 
    });

    el.querySelectorAll("#guestbtn")[0].addEventListener("click", function () {
        numID.textContent = parseInt(numID.textContent) + 1;
        arr[guest_arr.indexOf(el)] = numID.textContent;
        localStorage.setItem("guestArr", JSON.stringify(arr));
        console.log(arr);
        calculateCharge(); 
    });
}




function calculateCharge(){

  // SL ADULT
  const arr = localStorage.getItem("guestArr");///////////////////////////////////////////////////////////////////
  const slAdult = arr[2];
  const normalHoursCount = localStorage.getItem('normalHoursCount');
  const peakHoursCount = localStorage.getItem('peakHoursCount');
  const SLadultCharge = document.getElementById('SLadultCharge');


  const chargesladult = slAdult * ((4 * normalHoursCount) + (6 * peakHoursCount));
  SLadultCharge.innerText = `$${chargesladult}`; 
  localStorage.setItem('sladult', `$${chargesladult}`);
  
  // F0REIGN ADULT

  const ForeignadultCharge = document.getElementById('FadultCharge');

  const foreignAdult = arr[6];

  const chargeForeignAdult = foreignAdult * ((10 * normalHoursCount) + (13 * peakHoursCount));
  ForeignadultCharge.innerText = `$${chargeForeignAdult}`; 

  localStorage.setItem('foreignadult', `$${chargeForeignAdult}`);


  // SL CHILD

  const SLchildCharge = document.getElementById('SLchildCharge');
  const slChild = arr[10];


  const chargeSlChild = slChild * ((2 * normalHoursCount) + (3 * peakHoursCount));
  SLchildCharge.innerText = `$${chargeSlChild}`; 
  localStorage.setItem('slchild', `$${chargeSlChild}`);

  // F0REIGN CHILD

  const ForeignchildCharge = document.getElementById('FchildCharge');

  const foreignChild = arr[14];
  // console.log(foreignChild);

  const chargeForeignChild = foreignChild * ((5 * normalHoursCount) + (8 * peakHoursCount));
  // console.log(chargeForeignChild);
  ForeignchildCharge.innerText = `$${chargeForeignChild}`; 
  localStorage.setItem('foreignchild', `$${chargeForeignChild}`);

  // INFANT 

  const infant = arr[18];
  console.log(infant);

  const chargeInfant = infant * ((0 * normalHoursCount) + (0 * peakHoursCount));
  localStorage.setItem('infant', `$${chargeInfant}`);

  
  
  // Total payable

  const totalPayable = chargesladult + chargeForeignAdult + chargeSlChild + chargeForeignChild + chargeInfant;
  document.getElementById('totalPayable').innerText = `$${totalPayable}`;
  localStorage.setItem('payable', `$${totalPayable}`);


}


const submitbtn = document.getElementById('formsubmit');
const sumtable = document.getElementById('guesttable')

submitbtn.addEventListener("click", ()=>{
  localStorage.setItem('sumtable', sumtable.innerHTML)
})



const ticketForm = document.getElementById("ticketform");
const submitBtn = document.getElementsByClassName("continue");

ticketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
        ticketForm.submit();
    }
});

function validateForm() {
    let isValid = true;

    // Validate date
    const dateInput = document.getElementById("ticketdate");
    if (!dateInput.value) {
        isValid = false;
        dateInput.classList.add("error");
    }

    // Validate time
    const timeSelect = document.getElementById("time");
    if (timeSelect.selectedOptions.length === 0) {
        isValid = false;
        timeSelect.classList.add("error");
    }

    return isValid;
}


