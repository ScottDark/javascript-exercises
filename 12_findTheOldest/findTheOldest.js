const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    if (
      oldestPerson.yearOfDeath === undefined &&
      currentPerson.yearOfDeath === undefined
    ) {
      let currentYear = new Date().getFullYear();
      oldestPersonAge = currentYear - oldestPerson.yearOfBirth;
      currentPersonAge = currentYear - currentPerson.yearOfBirth;

      if (oldestPersonAge > currentPersonAge) {
        return oldestPerson;
      } else {
        return currentPerson;
      }
    } else {
      oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
      currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

      if (oldestPersonAge > currentPersonAge) {
        return oldestPerson;
      } else {
        return currentPerson;
      }
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
