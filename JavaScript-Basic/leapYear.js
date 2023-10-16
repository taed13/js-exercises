// 6. Write a JavaScript program to determine whether a given year is a leap year
// in the Gregorian calendar.

function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else return false;
    }
    return false;
  }
  return false;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2019));
console.log(isLeapYear(2000));
console.log(isLeapYear(2400));
