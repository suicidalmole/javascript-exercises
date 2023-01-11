const leapYears = function(year) {
    if (!(year % 100 == 0)) {               // test if century
        const result = (year % 4 == 0);     // test if leap year
        return result;
    } else {
        const result = false;
        return result;
    }
};

// leap years are divisible by 4
// centuries are only leap years if they are divisble by 400

// Do not edit below this line
module.exports = leapYears;
