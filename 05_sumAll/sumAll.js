const sumAll = function(parameter_1, parameter_2) {
    let sum = 0;
    if (Number.isInteger(parameter_1) && Number.isInteger(parameter_2)) {
        let start = Math.min(parameter_1, parameter_2);
        if (start >= 0 ) {
            const end = Math.max(parameter_1, parameter_2);
            for (start; start <= end; start++) {
                sum += start;
            }
        } else {
        sum = 'ERROR';
        }
    } else {
        sum = 'ERROR';
    }

    return sum;
};

// find the start and end of the range
// iterate through each number including the beginning and end of the range
// store sum in variable sum

// Do not edit below this line
module.exports = sumAll;
