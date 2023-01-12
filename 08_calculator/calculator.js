const add = function(value_1, value_2) {      // add two values and return the sum
  const sum = value_1 + value_2;
  return sum;
};

const subtract = function(value_1, value_2) {
	const difference = value_1 - value_2;       // subtract second input from first
  return difference;
};

const sum = function(array) {                 // sum of all elements in an array
	let sum = 0;
  for (const element of array) {
      sum += element;
  }
  return sum;
};

const multiply = function(array) {   // multiply values in an array and return the product
  let product = 1;
  for (const value of array) {
    product *= value;
  }
  return product;
};

const power = function() {
	
};

const factorial = function() {
	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
