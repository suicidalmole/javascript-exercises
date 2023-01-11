const removeFromArray = function(array, ...items) {
    for (const item of items) {
        if (array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }
    }
    return array;
};

// use indexOf() to find specific values in the array
// use splice() with indexOf() to remove specific values

// use includes () to test if item is present in the array

// use the function rest parameter(...) for indefinite number of items to remove
// iterate through the rest parameter array items and splice each value from the array





// Do not edit below this line
module.exports = removeFromArray;
