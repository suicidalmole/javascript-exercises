const convertToCelsius = function(temp) {
  const temp_in_celcius = (temp - 32) * (5 / 9);
  if (temp_in_celcius == 0) {
    return temp_in_celcius;
  } else {
    return Number(temp_in_celcius.toFixed(1));      // round to one decimal and convert back to number
  }
};

const convertToFahrenheit = function(temp) {
  const temp_in_farenheit = (9 / 5) * temp + 32;
  if (temp_in_farenheit == 0) {
    return temp_in_farenheit;
  } else {
    return Number(temp_in_farenheit.toFixed(1));
  }
};


// need formulas to convert celcius to farenheit and vice versa
// F = (9/5) * C + 32
// C = (F - 32) * (5/9)
// round to one decimal place  -- use toFixed() method on result to achieve this
// make sure it works with negative numbers

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
