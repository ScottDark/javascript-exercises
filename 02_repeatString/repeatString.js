// Practice notes: It works by dropping in test info into repeatHeyString and repeatAmount.
// So the string "hey" is being dropped in and the amount of times it is repeated.
const repeatString = function (repeatHeyString, repeatAmount) {
  let concatStringResult = "";
  for (let i = 0; i < repeatAmount; i++) {
    concatStringResult += repeatHeyString;
  }
  return concatStringResult;
};

// Do not edit below this line
module.exports = repeatString;
