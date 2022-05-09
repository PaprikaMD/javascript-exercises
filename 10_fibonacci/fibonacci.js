const fibonacci = function(num) {
    if(num < 1){
        return 'OOPS';
    }

    let numberPair = [1,1];
    for(let i = 0; i < num-2; i++){
        numberPair.push(numberPair[0] + numberPair[1]);
        numberPair.shift();
    }
    return numberPair[1];
};

// Do not edit below this line
module.exports = fibonacci;
