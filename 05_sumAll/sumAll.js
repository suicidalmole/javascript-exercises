const sumAll = function(parameter_1, parameter_2) {
    let sum = 0;
    let start = Math.min(parameter_1, parameter_2);
    const end = Math.max(parameter_1, parameter_2);
    for (start; start <= end; start++) {
        sum += start;
    }
    return sum;
};

// find the start and end of the range
// iterate through each number including the beginning and end of the range
// store sum in variable sum

// Do not edit below this line
module.exports = sumAll;
