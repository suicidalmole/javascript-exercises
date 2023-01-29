const findTheOldest = function(array) {
    array.sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1))
    return array[array.length - 1];
};

// iterate through array of objects
// calculate age from birth and death properties
// sort by oldest
// return last object in array

// Do not edit below this line
module.exports = findTheOldest;
