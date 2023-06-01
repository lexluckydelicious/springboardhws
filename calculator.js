// Put some default values in the inputs

let num = 0;
let amount = 0;
let years = 0;
let rate = 0;
let values = {};
let monthly = '';
let divide = 0; 
let answer = 0;
// Get the inputs from the DOM.

function setupInitialValues() {
  
   amount = document.getElementById("loan-amount").value;
   years =  document.getElementById("loan-years").value;
   rate =  document.getElementById("loan-rate").value;
return;
}


// Get the current values from the UI
function updateValues() {
  values = {
    principle: parseInt(amount),
    term: parseInt(years),
    interest: parseInt(rate)
  };

  return;
}


// Given an object of values (a value has amount, years and rate ),
// Call a function to calculate the current monthly payment
// calculate the monthly payment.  The output should be a string
function calculateMonthlyPayment() {
    divide = (values.principle*values.interest)/(1-((1+values.interest)^(-1*values.term*12)));
    monthly = divide.toString();
    return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
// that always has 2 decimal places.

function updateMonthly() {
  let display = document.getElementById('monthly-payment');
  num = parseFloat(monthly);
  answer = num.toFixed(2); 
  strAnswer = answer.toString();
  return strAnswer;
}

function uiDisplay() {
  let display = document.getElementById("monthly-payment");
  display.innerHTML = strAnswer;
  return;
}

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      setupInitialValues();
      updateValues();
      calculateMonthlyPayment();
      updateMonthly();
      uiDisplay();
    });
  }
});