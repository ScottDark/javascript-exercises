/* Returns: Year is leap true/false
 * Args: Number year */
const leapYears = function (year) {
  let isLeapYear = Boolean;
  if (years % 100 !== 0 || year % 4 === 0 || year % 400 === 0) {
    return (isLeapYear = true);
  } else {
    return (isLeapYear = false);
  }
};

// Do not edit below this line
module.exports = leapYears;
