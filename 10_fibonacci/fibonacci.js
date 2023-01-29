const fibonacci = function(member) {
    const fibSequence = [1, 1];
    if (member == 1 || member == 2) {
        return 1;
    } else {
        for (let i = 3; i <= member; i++) {
            fibSequence.push((fibSequence[i - 3] + fibSequence[i - 2]));
            let lastItem = fibSequence[fibSequence.length - 1];
            if (i == member) {
                return (lastItem);
            }
        }
    } 
}
//



// Do not edit below this line
module.exports = fibonacci;
