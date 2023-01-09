const reverseString = function(text) {
    // reverse the string by slicing one character at a time and adding to reverse
    // loop based on length of the string and use slice to get each character individually
    let reverse = '';
    for (let i = 0; i <= text.length; i++) {
        reverse += text.slice(text.length - (i + 1), text.length - i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
