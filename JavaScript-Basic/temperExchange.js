// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function convert() {
  var temperature = document.getElementById("temperature").value;
  var unit = document.getElementById("temperatureUnit").value;
  let result = "";
  if (unit == "tempC") {
    result = cel2Fah(temperature) + "°F";
  } else {
    result = fah2Cel(temperature) + "°C";
  }

  document.getElementById("result").innerHTML = result;
  console.log(result);
}

function cel2Fah(temper) {
  return (temper * 9) / 5 + 32;
}
function fah2Cel(temper) {
  return ((temper - 32) * 5) / 9;
}
