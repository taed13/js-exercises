// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
// The string length must be broader than or equal to 1.

function swap_start_end_of_string() {
  let input = document.getElementById("input_text").value;

  // Kiểm tra nếu độ dài chuỗi là 0 hoặc 1, không làm gì cả
  if (input.length <= 1) {
    document.getElementById("result").innerHTML =
      "Chuỗi là 0 hoặc 1, không làm gì cả";
  }

  let start = input[0];

  let end = input[input.length - 1];

  let result = end + input.substring(1, input.length - 1) + start;
  console.log(result);
  document.getElementById("result").innerHTML = result;
}
