// 26. Write a JavaScript program to create a string from a given string.
//  This is done by taking the last 3 characters and adding them at both the front and back.
//  The string length must be 3 or more.

function str_add_front_back_3_more() {
  //   let str = document.getElementById("input_text").value;
  //   if (str.length < 3) {
  //     document.getElementById("result").innerHTML = "chuỗi không đủ dài!!!";
  //   } else {
  //     let cut = str.substring(str.length - 3, str.length);
  //     let result = cut + str + cut;
  //     document.getElementById("result").innerHTML = result;
  //   }
  let str = document.getElementById("input_text").value;

  let java = str.substring(0, 4);
  if (java === "Java") {
    document.getElementById("result").innerHTML = "ok";
  } else {
    document.getElementById("result").innerHTML = "ko ok";
  }
}
