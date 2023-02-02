const palindromes = function (palindromes) {
  let splitString = palindromes.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  if (palindromes === joinArray) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
