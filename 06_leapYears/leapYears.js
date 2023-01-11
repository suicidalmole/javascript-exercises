const leapYears = function(year) {
    const result = (year % 4 == 0);
    return result;
};

// leap years are divisible by 4

// Do not edit below this line
module.exports = leapYears;
