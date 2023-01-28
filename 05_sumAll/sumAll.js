/* Return: Sum of every number between arguments
 * Args: First integer, second integer */

const sumAll = function (getFirstNumber, getSecondNumber) {
  let sumResult;
  let max;
  let min;

  if (
    typeof getFirstNumber === "string" ||
    typeof getSecondNumber === "string" ||
    getFirstNumber < 0 ||
    getSecondNumber < 0
  ) {
    return (sumResult = "ERROR");
  } else if (getFirstNumber > getSecondNumber) {
    max = getFirstNumber;
    min = getSecondNumber;
  } else {
    max = getSecondNumber;
    min = getFirstNumber;
  }

  sumResult = ((max - min + 1) * (min + max)) / 2;
  return sumResult;
};
// Do not edit below this line
module.exports = sumAll;
