const getTheTitles = function(array) {
    const titlesArray = [];
    for (const element of array) {
        const {title} = element;
        titlesArray.push(title);
    }
    console.log({titlesArray});
    return titlesArray;
};

//iterate through array
//access 'title' property of each object in the array
//add title from each object to new array

// Do not edit below this line
module.exports = getTheTitles;
