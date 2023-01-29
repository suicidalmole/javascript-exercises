const palindromes = string  => {
    let cleanedString = string.replace((/\W/g), '');
    console.log({cleanedString});
    const stringArray = cleanedString.split('');
    const reverseArray = stringArray;
    reverseArray.reverse();
    console.log({reverseArray});
    return (reverseArray.toString() === stringArray.toString() ? true : false);
    
};
// Do not edit below this line
module.exports = palindromes;


//get string and split into array
//reverse array in new array
//compare the two arrays