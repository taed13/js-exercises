// 20. Write a JavaScript program to check two given integers
// whether one is positive and another one is negative.

function checkPositiveNegative() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (num1 * num2 > 0 || num1 == 0 || num2 == 0) {
    document.getElementById("result").innerHTML =
      "Both are positive or negative or zero.";
  } else {
    document.getElementById("result").innerHTML =
      "One is positive and another one is negative";
  }
}
