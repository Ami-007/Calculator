// Defining my variables and selecting from HTML 

const modeShift = document.querySelector("#toggle")
const allClear = document.querySelector("#allClear")
const deleteKey = document.querySelector("#delete")
const answerKey = document.querySelector("#answer")
const equalsKey = document.querySelector("#equals")
const decimalKey = document.querySelector("#decimal")
const numberKeys = document.querySelectorAll(".calculator-grid__buttons__number")
const operatorKeys = document.querySelectorAll(".calculator-grid__buttons__operation")
let screenResult = document.querySelector("#output")


let currentNumber = "";
let previousNumber = "";
let operatorValue = "";
let calculatedNumber = 0;


const maxLength = (numberLength) => currentNumber.length < numberLength;
const updateDisplay = (values) => screenResult.innerHTML = values;


numberKeys.forEach((button) => {
  button.addEventListener("click", (numbers) => {
    if (maxLength(25)) {
      (!currentNumber) ? currentNumber = numbers.target.innerHTML : currentNumber += numbers.target.innerHTML;
      updateDisplay(currentNumber);
      console.log(currentNumber);
    }
  }
  )

});


operatorKeys.forEach((button) => {
  button.addEventListener("click", (operators) => {
    if (maxLength(25)) {
      operatorValue = operators.target.innerHTML;
      updateDisplay(operatorValue);
    }
    if (currentNumber) {
      previousNumber = currentNumber;
      currentNumber = "";
    }

  })
});

equalsKey.addEventListener("click", () => {
    if (operatorValue == "+") {
      calculatedNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operatorValue == "-") {
      calculatedNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
    } else if (operatorValue == "*") {
      calculatedNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
    } else if (operatorValue == "÷") {
      calculatedNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
    }

    updateDisplay(calculatedNumber);
    console.log(calculatedNumber);
    currentNumber = "";
});


// if (currentNumber === "") {
      //   screenResult.innerHTML = numbers.target.innerHTML
      // } else {
      //   screenResult.innerHTML = currentNumber + numbers.target.innerHTML