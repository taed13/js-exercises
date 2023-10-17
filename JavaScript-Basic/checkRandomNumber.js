// 8. Write a JavaScript program where the program
// takes a random integer between 1 and 10,
// and the user is then prompted to input a guess number.
// The program displays a message "Good Work"
// if the input matches the guess number otherwise "Not matched".

function checkRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("randomNumber").innerHTML = randomNumber;
  let inputNumber = document.getElementById("inputCheckNumber").value;

  if (inputNumber == randomNumber) {
    document.getElementById("result").innerHTML = "Good Work";
  } else {
    document.getElementById("result").innerHTML = "Not Matched";
  }
}
// checkRandomNumber();
