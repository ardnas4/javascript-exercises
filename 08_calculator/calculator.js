const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(listNumbers) {
	return listNumbers.reduce((total, current) => total + current, 0);
};

const multiply = function(listNumbers) {
  if (listNumbers.length == 0) {
    return 0;
  }

  else {
    return listNumbers.reduce((result, current) => result * current)
  }
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
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
