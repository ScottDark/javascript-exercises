const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

    if (oldestPersonAge > currentPersonAge) {
      return oldestPerson;
    } else {
      return currentPerson;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
