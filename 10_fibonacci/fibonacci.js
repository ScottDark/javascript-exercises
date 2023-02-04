const fibonacci = function (number) {
  let x = 1;
  let y = 1;
  let z;
  let i = 0;

  if (number < 0) {
    return "OOPS";
  } else {
    for (i = 2; i < number; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    return y;
  }
};

// Do not edit below this line
module.exports = fibonacci;
