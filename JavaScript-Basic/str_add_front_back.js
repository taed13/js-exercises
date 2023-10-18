// 24. Write a JavaScript program to create another string from a given string
//  with the first character of the given string added to the front and back.

function str_add_front_back() {
  var str = document.getElementById("input_text").value;

  let first = str[0];
  console.log(first);

  let result = first + str + first;
  console.log(result);

  document.getElementById("result").innerHTML = result;
}
