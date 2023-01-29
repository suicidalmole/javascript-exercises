const palindromes = string  => {
    const cleanedString = string
        .replace((/\W/g), '')  //removes non word characters from string
        .toLowerCase();
    const stringArray = cleanedString.split('');        //split string into array
    const reverseArray = stringArray.slice().reverse();
    return arrayIsEqual(stringArray, reverseArray);
    
};

function arrayIsEqual(a, b) {
    const strA = a.join();
    const strB = b.join();
    console.log(strA);
    console.log(strB);
    console.log(strA == strB ? true : false);
    return strA == strB ? true : false;

};
// Do not edit below this line
module.exports = palindromes;


//get string and split into array
//reverse array in new array
//compare the two arrays