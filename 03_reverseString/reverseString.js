/* Returns reversed string
 * normalString - string to be reversed */
const reverseString = function (normalString) {
  let reversedStringResult = "";
  reversedStringResult = normalString.split("").reverse().join("");
  return reversedStringResult;
};

// Do not edit below this line
module.exports = reverseString;
