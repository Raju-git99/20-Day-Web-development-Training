let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}
function appendOperator(op) {
  let value = display.value;
  let lastChar = value.slice(-1);

  const operators = ['+', '-', '*', '/', '%', '.'];

  if (operators.includes(lastChar)) {
    display.value = value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '';
}
function clearoneitem() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
