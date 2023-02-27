const convertToCelsius = function(temp) {
  if (temp == 32) {
    return 0;
  }

  let result = (temp - 32) * (5/9);
  result = Math.round(result * 10) / 10;

  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  if (temp == 0) {
    return 32;
  }

  let result = temp * (9/5) + 32;
  result = Math.round(result * 10) / 10;

  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
