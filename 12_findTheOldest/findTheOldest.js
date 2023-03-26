const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
        const currAge = getAge(currPerson.yearOfDeath, currPerson.yearOfBirth);

        if (currAge > oldestAge) {
            return currPerson;
        }

        else {
            return oldestPerson;
        }
    });
};

const getAge = function (death, birth) {
    if (!death) {
      death = new Date().getFullYear();
    }

    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
