const palindromes = string  => {
    let cleanedString = string.replace((/\W/g), '');
    console.log({cleanedString});
    const stringArray = cleanedString.split('');
    console.log({stringArray});
    let reverseArray = stringArray;
    reverseArray.reverse();
    console.log({reverseArray});
    
    
};
// Do not edit below this line
module.exports = palindromes;


//get string and split into array
//reverse array in new array
//compare the two arrays