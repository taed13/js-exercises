function csvTo2DArray(csvString) {
  const rows = csvString.trim().split("\n");
  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].split(",");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const currentRow = rows[i].split(",");
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentRow[j];
    }

    data.push(obj);
  }

  return data;
}

const csvString = `
  Name,Age,Location
  John,30,New York
  Alice,25,Los Angeles
  Bob,35,Chicago
  Eve,28,Miami
  `;

const csvData = csvTo2DArray(csvString);
console.log(csvData);
