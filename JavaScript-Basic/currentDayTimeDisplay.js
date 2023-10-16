// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output :
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function currentDayTimeDisplay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // Array of days of the week
  const currentDate = new Date(); // Current date
  const dayIndex = currentDate.getDay(); // Current day

  var hours = currentDate.getHours(); // Current hours
  const minutes = currentDate.getMinutes(); // Current minutes
  const seconds = currentDate.getSeconds(); // Current seconds
  let amOrPm = "AM"; // AM or PM
  if (hours > 12) {
    amOrPm = "PM";
    hours = hours - 12;
  }
  console.log(
    `Today is : ${daysOfWeek[dayIndex]}\nCurrent time is : ${hours} ${amOrPm} : ${minutes} : ${seconds}`
  ); // Display current time
}
currentDayTimeDisplay();
