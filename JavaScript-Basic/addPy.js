// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string.
//  If the given string begins with "Py" return the original string.

function addPy() {
  let inputText = document.getElementById("input-text").value;
  let result = document.getElementById("result");

  if (inputText.slice(0, 2) == "Py") {
    result.innerHTML = inputText;
  } else {
    result.innerHTML = "Py" + inputText;
  }
}
