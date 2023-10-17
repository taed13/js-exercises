// 15. Write a JavaScript program to get the difference between a given number and 13,
// if the number is broader than 13 return double the absolute difference.

function differenceBetween13() {
  var inputNumber = document.getElementById("inputNumber").value;
  var result = document.getElementById("result");
  if (inputNumber <= 13) {
    result.innerHTML = 13 - inputNumber;
  } else {
    result.innerHTML = (inputNumber - 13) * 2;
  }
}
