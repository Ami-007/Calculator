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
let storedValue = 0;


const maxLength = (numberLength) => currentNumber.length < numberLength;
const updateScreen = (values) => screenResult.innerHTML = values;


numberKeys.forEach((button) => {
  button.addEventListener("click", (numbers) => {
    if (maxLength(25)) {
      (!currentNumber) ? currentNumber = numbers.target.innerHTML : currentNumber += numbers.target.innerHTML;
      updateScreen(currentNumber);
    }
  }
  )

});

operatorKeys.forEach((button) => {
  button.addEventListener("click", (operators) => {
    if (maxLength(25)) {
      operatorValue = operators.target.innerHTML;
      updateScreen(operatorValue);
    }
    if (currentNumber) {
      previousNumber = currentNumber;
      currentNumber = "";
      storedValue = previousNumber;
      previousNumber = "";
    }

  })
});

equalsKey.addEventListener("click", () => {

  if (operatorValue == "+") {
    calculatedNumber = parseFloat(storedValue) + parseFloat(currentNumber);
  } else if (operatorValue == "-") {
    calculatedNumber = parseFloat(storedValue) - parseFloat(currentNumber);
  } else if (operatorValue == "*") {
    calculatedNumber = parseFloat(storedValue) * parseFloat(currentNumber);
  } else if (operatorValue == "÷") {
    calculatedNumber = parseFloat(storedValue) / parseFloat(currentNumber);
  }

  updateScreen(calculatedNumber);
  console.log(calculatedNumber);
  currentNumber = "";
  storedValue = calculatedNumber;
  calculatedNumber = 0;
});

allClear.addEventListener("click", () => {
  updateScreen("0");
  currentNumber = "";
  previousNumber = "";
  calculatedNumber = 0;
}
);