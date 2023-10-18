// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

function csvToArray(csvString) {
  const rows = csvString.split("\n");

  const result = [];
  for (const row of rows) {
    const values = row.split(",");

    result.push(values);
  }
  console.log(rows);

  return result;
}

// Ví dụ sử dụng
const csvString = "John,Doe,30\nJane,Smith,25\nBob,Johnson,35";
const csvArray = csvToArray(csvString);
console.log(csvArray);
