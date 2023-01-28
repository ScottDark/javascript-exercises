/* Returns array with removed index
 * Accepts Array & any optional arguments as index */

const removeFromArray = function (getArray, ...args) {
  /* Returns elements not included in optional args
   * Accepts array */

  function testFunction(getArray) {
    return !args.includes(getArray);
  }

  return getArray.filter(testFunction);
};

// Do not edit below this line
module.exports = removeFromArray;
