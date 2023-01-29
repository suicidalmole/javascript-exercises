const fibonacci = function(member) {
    const fibSequence = [1, 1];
    const memberNum = Number(member);
    if (memberNum == 1 || memberNum == 2) {
        return 1;
    } else if (memberNum > 0 ) {
        for (let i = 3; i <= memberNum; i++) {
            fibSequence.push((fibSequence[i - 3] + fibSequence[i - 2]));
            let lastItem = fibSequence[fibSequence.length - 1];
            if (i == memberNum) {
                return (lastItem);
            }
        }
    } else if (member <= 0 || (typeof member) !== 'number') {
        return "OOPS";
    }
}
//



// Do not edit below this line
module.exports = fibonacci;
