const add = function (addOne, addTwo) {
  return addOne + addTwo;
};

const subtract = function (subtractOne, subtractTwo) {
  return subtractOne - subtractTwo;
};

const sum = function (sumOfNumbers) {
  if (sumOfNumbers.length === 0) {
    return sumOfNumbers.length;
  } else if (sumOfNumbers.length === 1) {
    return sumOfNumbers[0];
  } else {
    let result = sumOfNumbers.reduce(function (a, b) {
      return a + b;
    });
    return result;
  }
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
