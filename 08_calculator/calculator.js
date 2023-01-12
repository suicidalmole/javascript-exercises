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

const power = function(value_1, value_2) {      // raises value_1 to the power of value_2 and returns the 
	const power = value_1 ** value_2;
  return power;
};

const factorial = function(factorial) {           // compute the factorial of the value
	if (factorial === 0 || factorial === 1) {             //factorial of 0 or 1 is 1
    return 1;
  } else {
      for (let i = factorial - 1; i >= 1; i--) {
          factorial *= i;
      }
      }
      return factorial;
  
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
