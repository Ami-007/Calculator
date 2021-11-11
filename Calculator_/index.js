
const modeShift = document.querySelector("#toggle")
const allClear = document.querySelector("#allClear")
const deleteKey = document.querySelector("#delete")
const answerKey = document.querySelector("#answer")
const equalKey = document.querySelector("#equals")
const decimalKey = document.querySelector("#decimal")
const numberKeys = document.querySelectorAll(".calculator-grid__buttons__number")
const operatorKeys = document.querySelectorAll(".calculator-grid__buttons__operation")
let screenResult = document.querySelector("#output")

// console.log(numberKeys);
const maxLength = (numLength) => currentNumber.length < numLength;
const updateDisplay = (values) => screenResult.innerHTML = values;
// const numberList = Array.from(numberKeys);

let currentNumber = "";
let operatorValue = "";
let previousNumber = "";
let storedValue = 0;
let calculatedNumber = 0

numberKeys.forEach((button) => {
    button.addEventListener("click", (numbers) => {
      if(maxLength(50)) {
        !currentNumber ? currentNumber = numbers.target.innerHTML : currentNumber += numbers.target.innerHTML;
        updateDisplay(currentNumber);
        console.log(currentNumber);
      }
    })
  })


// numberKeys.forEach((button) => {
//     button.addEventListener("click", () => {
//         currentNumber = button
//         updateDisplay(currentNumber);
//         console.log(currentNumber);
//     })
// })



// numberKeys.forEach((number) => {
//     number.addEventListener("click", (event) => {
//    currentNumber += event.target.innerHTML
//     numberKeys.value = screenResult
// })

// });

// console.log(numberList);

// // numberList.forEach(number => {
// //     console.log(number)
// // })

// // for(let i = 0; i < numberList.length; i++) {
// //     numberList[i].addEventListener("click", () => {
// //       numberValue.push(numberList[i].innerHTML)
// //       console.log(numberValue)
// //       screenResult.innerHTML = `${numberValue.join("")}`
// //     })
// //   };

// //   allClear() {
// //       this.screenResult = ''
// //   }

// // const numberKeys.addEventListener("click, () => )