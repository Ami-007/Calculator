// Defining my variables and selecting from HTML 

const modeShift = document.querySelector("#toggle")
const allClear = document.querySelector("#allClear")
const deleteKey = document.querySelector("#delete")
const answerKey = document.querySelector("#answer")
const equalKey = document.querySelector("#equals")
const decimalKey = document.querySelector("#decimal")
const numberKeys = document.querySelectorAll(".calculator-grid__buttons__number")
const operatorKeys = document.querySelectorAll(".calculator-grid__buttons__operation")
let screenResult = document.querySelector("#output")

const maxLength = (numberLength) => currentNumber.length < numberLength;
const updateDisplay = (values) => screenResult.innerHTML = values;

let currentNumber = "";
let operatorValue = "";
let previousNumber = "";
let storedValue = 0;
let calculatedNumber = 0;



numberKeys.forEach((button) => {
  button.addEventListener("click", (numbers) => {
    if (maxLength(25)) {
      (!currentNumber) ? currentNumber = numbers.target.innerHTML : currentNumber += numbers.target.innerHTML;
      updateDisplay(currentNumber);
      console.log(currentNumber);
    }
  })
});


operatorKeys.forEach((button) => {
  button.addEventListener("click", (numbers) => {
    if (maxLength(25)) {
      !currentNumber ? currentNumber = numbers.target.innerHTML : currentNumber += numbers.target.innerHTML;
      updateDisplay(currentNumber);
      console.log(currentNumber);
    }
  })
});

function calculate(currentNumber, previousNumber, operatorValue) {
  if (operator == "+") {
    return previousNumber + currentNumber;
  } else if (operatorValue == "-") {
    return previousNumber - currentNumber;
  } else if (operatorValue == "*") {
    return previousNumber * currentNumber;
  } else if (operatorValue == "÷") {
    return previousNumber / currentNumber;
  }
}
