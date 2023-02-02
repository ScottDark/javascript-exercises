const palindromes = function (palindromes) {
  //   let splitString = palindromes.split("");
  //   let reverseArray = splitString.reverse();
  //   let joinArray = reverseArray.join("");

  let x = palindromes;

  x.replace(/[a-z]+/gi, function (x) {
    return x.split("").reverse().join("");
  });
  if (palindromes === x) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
