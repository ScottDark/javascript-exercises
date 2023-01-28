/* Returns: F converted to C
 * Args: F number*/

const convertToCelsius = function (convertToC) {
  let resultCTemp;
  let resultC;

  resultCTemp = ((convertToC - 32) * 5) / 9;
  resultC = resultCTemp.toFixed(1);

  return Number(resultC);
};

/* Returns: C converted to F
 * Args: C number*/

const convertToFahrenheit = function (convertToF) {
  let resultFTemp;
  let resultF;

  resultFTemp = (convertToF * 9) / 5 + 32;
  resultF = resultFTemp.toFixed(1);

  return Number(resultF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
