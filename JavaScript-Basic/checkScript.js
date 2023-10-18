// >= 0

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
//  If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function checkScript() {
  let script = document.getElementById("input_text").value;
  let result;

  if (script.length < 10) {
    result = "Script not enough characters";
  } else {
    // javaScript
    let cut = script.substring(4, 10);
    if (cut === "Script") {
      result = "contain Script";
    } else {
      result = "not contain Script";
    }
  }

  document.getElementById("result").innerHTML = result;
}
