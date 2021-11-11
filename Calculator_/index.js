
const modeShift = document.querySelector("#toggle")
const allClear = document.querySelector("#allClear")
const deleteKey = document.querySelector("#delete")
const answerKey = document.querySelector("#answer")
const equalKey = document.querySelector("#equals")
const decimalKey = document.querySelector("#decimal")
const numberKeys = document.querySelectorAll(".calculator-grid__buttons__number")
const operatorKeys = document.querySelectorAll(".calculator-grid__buttons__operation")
const screenResult = document.querySelector("#output")

// console.log(numberKeys);


let numberValue = [];
let previousValue = [];

const numberList = Array.from(numberKeys);
console.log(numberList);

// numberList.forEach(number => {
//     console.log(number)
// })

for(let i = 0; i < numberList.length; i++) {
    numberList[i].addEventListener("click", () => {
      numberValue.push(numberList[i].innerHTML)
      console.log(numberValue)
      screenResult.innerHTML = `${numberValue.join("")}`
    })
  };

//   allClear() {
//       this.screenResult = ''
//   }

// const numberKeys.addEventListener("click, => )