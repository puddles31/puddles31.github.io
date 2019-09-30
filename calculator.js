var numberOne = 0;
var numberTwo = 0;
var operator = "";
var result = 0;
var text = "";

function equalSign() {
  result = 0;
  numberOne = parseFloat(document.getElementById("inputNumberOne").value);
  numberTwo = parseFloat(document.getElementById("inputNumberTwo").value);
  operator = document.getElementById("chooseOperator").value;
  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      break;
    case "-":
      result = numberOne - numberTwo;
      break;
    case "x":
      result = numberOne * numberTwo;
      break;
    case "÷":
      result = numberOne / numberTwo;
      break;
    case "%":
      result = numberOne % numberTwo;
      break;
    default:
      result = numberOne + numberTwo;
  }
  text = text + "<br>" + numberOne + " " + operator + " " + numberTwo + " = " + result;
  document.getElementById("resultP").innerHTML = text;
}

function reset() {
  text = "";
  document.getElementById("resultP").innerHTML = "";
}
