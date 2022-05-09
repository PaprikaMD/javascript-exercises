const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.split('').filter(char => /[a-z]/.test(char));
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - (i + 1)]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
