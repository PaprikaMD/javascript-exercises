const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }
    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    var sum = 0;
    let smallest = (num1 < num2) ? num1 : num2;
    let largest = (num1 < num2) ? num2 : num1;
    for(let i = smallest; i <= largest; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
