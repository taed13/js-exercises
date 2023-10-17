// 16. Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are the same, then return triple their sum.
function compute() {
  var firstNumber = document.getElementById("firstNum").value;
  var secondNumber = document.getElementById("secondNum").value;

  if (firstNumber == secondNumber) {
    document.getElementById("result").innerHTML =
      (firstNumber + secondNumber) * 3;
  } else {
    document.getElementById("result").innerHTML =
      parseInt(firstNumber) + parseInt(secondNumber);
  }
}
