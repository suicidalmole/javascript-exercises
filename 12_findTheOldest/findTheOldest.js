const findTheOldest = function(array) {
    array.sort(compareAges);
    return array[array.length - 1]; //return last object in array after sorting is complete
};

function compareAges(a, b) {
    const currentYear = new Date().getFullYear();
    return ('yearOfDeath' in a && 'yearOfDeath' in b ?         //check that yearOfDeath prop is present in both objects                 
        ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1):  // return 1 if age of a > age of b
            (!('yearOfDeath' in a) ?       //yearOfDeath prop not present in one or both objects so check object a
                ((currentYear - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1) :  //not present in a, return 1 if a>b
                    ((a.yearOfDeath - a.yearOfBirth) > (currentYear - b.yearOfBirth) ? 1 : -1)) //present in a, return 1 if a>b
    );
};

// iterate through array of objects
// calculate age from birth and death properties
// if no death then get age to current year
// sort by oldest
// return last object in array

// Do not edit below this line
module.exports = findTheOldest;
