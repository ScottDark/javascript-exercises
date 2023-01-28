/* Returns array with removed index
 * Accepts Array & index to be removed */
const removeFromArray = function (getArray, indexRemoved) {
  const index = getArray.indexOf(indexRemoved);
  if (index > -1) {
    getArray.splice(index, 1);
  }

  return getArray;
};

// Do not edit below this line
module.exports = removeFromArray;
