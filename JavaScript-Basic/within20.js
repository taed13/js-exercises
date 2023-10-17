// 19. Write a JavaScript program to check whether
// a given integer is within 20 of 100 or 400.
function checkWithin20() {
  var num = document.getElementById("inputNumber").value;
  console.log(sub20_(num));
  console.log(add20_(num));

  if (num < 100 || num > 400) {
    document.getElementById("result").innerHTML =
      "The number is not within 20 of 100 or 400";
  } else {
    if (
      add20_(num) > 100 &&
      add20_(num) < 400 &&
      sub20_(num) > 100 &&
      sub20_(num) < 400
    ) {
      document.getElementById("result").innerHTML =
        "The number is within 20 of 100 or 400";
    } else {
      document.getElementById("result").innerHTML =
        "The number is not within 20 of 100 or 400";
    }
  }
}

function sub20_(param) {
  return param - 20;
}

function add20_(param) {
  return parseInt(param) + 20;
}
