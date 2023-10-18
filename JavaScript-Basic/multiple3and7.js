// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkMultiple() {
  let input = document.getElementById("input").value;
  let result;
  if (input % 3 == 0) {
    if (input % 7 == 0) {
      result = "chia het cho ca 3 va 7";
    } else {
      result = "chia het cho 3";
    }
  } else if (input % 7 == 0) {
    result = "chia het cho 7";
  } else {
    result = "khong chia het cho so nao";
  }

  document.getElementById("result").innerHTML = result;
}
