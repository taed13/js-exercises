// 22. Write a JavaScript program to remove a character
//  at the specified position in a given string and return the modified string.

function removeChar() {
  let input_text = document.getElementById("input_text");
  let input_index = parseInt(document.getElementById("input_index").value);

  console.log(typeof input_index);

  if (input_index < 0 || input_index > input_text.value.length) {
    alert("Please input a valid index");
    return;
  } else {
    let result =
      input_text.value.slice(0, input_index) +
      input_text.value.slice(input_index + 1);
    document.getElementById("result").innerHTML = result;
  }
}
