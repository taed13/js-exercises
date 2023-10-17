// 7. Write a JavaScript program to find out
// if 1st January will be a Sunday between 2014 and 2050.
function sundayCheck() {
  //   console.log(date_between_2014_and_2050.date);

  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`1st January is being a Sunday  ${year}`);
    }
  }
}

// let date_between_2014_and_2050 = {
//   date: new Date(0, 1),
// };

// function Date(year) {
//   return Date(year, 0, 1);
// }

sundayCheck();
