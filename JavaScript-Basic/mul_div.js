// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
// Sample form :
// sample form

function mulClick() {
  var firstInput = document.getElementById("firstInput").value;
  var secondInput = document.getElementById("secondInput").value;

  var result = firstInput * secondInput;
  document.getElementById("result").innerHTML = result;
}

function divClick() {
  var firstInput = document.getElementById("firstInput").value;
  var secondInput = document.getElementById("secondInput").value;

  var result = firstInput / secondInput;
  document.getElementById("result").innerHTML = result;
}
