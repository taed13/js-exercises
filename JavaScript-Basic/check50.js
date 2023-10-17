// 18. Write a JavaScript program to check a pair of numbers
//  and return true if one of the numbers is 50 or if their sum is 50.

function check50() {
  var first = document.getElementById("firstNumber").value;
  var second = document.getElementById("secondNumber").value;
  if (first == 50 || second == 50 || first + second == 50) {
    document.getElementById("result").innerHTML = "true";
  } else {
    document.getElementById("result").innerHTML = "false";
  }
}
