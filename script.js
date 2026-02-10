const display = document.getElementById("display");

let currentValue = "";
let previousValue = "";
let operator = null;

function appendValue(value) {

  // If operator is pressed
  if (value === "+" || value === "-" || value === "*" || value === "÷") {
    if (currentValue === "") return;

    previousValue = currentValue;
    currentValue = "";
    operator = value;
    return;
  }

  // Numbers & decimal
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  previousValue = "";
  operator = null;
  display.value = "";
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  display.value = currentValue;
}

function calculate() {
  if (!previousValue || !currentValue || !operator) return;

  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "÷":
      result = b === 0 ? "Error" : a / b;
      break;
  }

  display.value = result;

  // Allow continuing calculations
  currentValue = result.toString();
  previousValue = "";
  operator = null;
}
