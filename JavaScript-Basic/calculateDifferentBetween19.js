// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple the absolute difference if the specified number is greater than 19.

function differenceBetween19() {
  var inputNumber = document.getElementById("inputNumber").value;
  if (inputNumber > 19) {
    document.getElementById("result").innerHTML = Math.abs(
      (inputNumber - 19) * 3
    );
  } else {
    document.getElementById("result").innerHTML = Math.abs(inputNumber - 19);
  }
}
