const getTheTitles = function (books) {
  let arrayOfTitles = [];

  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    arrayOfTitles.push(title);
  }

  return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
