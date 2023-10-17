// 9. Write a JavaScript program to calculate the days left before Christmas.

function santaCheck() {
  const today = new Date();
  const date_today = today.getDate();
  const month_today = today.getMonth();
  const christmasDate = new Date(today.getFullYear(), 11, 25);

  return Math.round((christmasDate - today) / (1000 * 60 * 60 * 24));
}

console.log(santaCheck());
