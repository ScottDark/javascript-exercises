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

const multiply = function (multiplyNumbers) {
  if (multiplyNumbers.length === 0) {
    return multiplyNumbers.length;
  } else if (multiplyNumbers.length === 1) {
    return multiplyNumbers[0];
  } else {
    let result = multiplyNumbers.reduce(function (a, b) {
      return a * b;
    });
    return result;
  }
};

const power = function (powerNumberOne, powerNumberTwo) {
  return powerNumberOne ** powerNumberTwo;
};

const factorial = function (factorialNumber) {
  if (factorialNumber < 0) {
    return "number has to be positive.";
  }
  if (factorialNumber == 0 || factorialNumber == 1) {
    return 1;
  } else {
    let result = factorialNumber * factorial(factorialNumber - 1);
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
