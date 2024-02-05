const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const screen = document.querySelector(".screen");

let runningTotal = 0;
let operator = "";
let previousValue = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    runningTotal = runningTotal * 10 + Number(button.value);
    screen.value = `${previousValue} ${operator} ${runningTotal}`;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== null) {
      calculate();
      screen.value = runningTotal;
    }
    operator = button.value;
    previousValue = runningTotal;
    runningTotal = 0;
    let operation = `${previousValue} ${operator}`;
    screen.value = operation;
  });
});

clearButton.addEventListener("click", () => {
  runningTotal = 0;
  operator = null;
  previousValue = null;
  screen.value = "";
});

equalButton.addEventListener("click", () => {
  calculate();
  screen.value = `${previousValue}`;
});

function calculate() {
  if (previousValue !== "") {
    switch (operator) {
      case "+":
        runningTotal = parseFloat(previousValue) + parseFloat(runningTotal);
        break;
      case "-":
        runningTotal = parseFloat(previousValue) - parseFloat(runningTotal);
        break;
      case "*":
        runningTotal = parseFloat(previousValue) * parseFloat(runningTotal);
        break;
      case "/":
        runningTotal = parseFloat(previousValue) / parseFloat(runningTotal);
        break;
      default:
        return;
    }
    runningTotal = Number(runningTotal.toFixed(2)); // Convert runningTotal to a number and format to two decimal places
    screen.value = `${previousValue} ${operator} ${runningTotal}`; // Update the screen with the entire calculation
    previousValue = "";
  }
}
