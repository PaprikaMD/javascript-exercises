const reverseString = function(string) {
    var array = string.split('');
    var reversedString = '';
    for(let i = array.length-1; i >= 0; i--){
        reversedString += array[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
