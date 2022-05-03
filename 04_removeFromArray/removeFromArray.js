const removeFromArray = function(array, ...elements) {
    var reducedArray = [];
    for(const item of array){
        let matches = false;
        for(const element of elements){
            if(item === element){
                matches = true;
            }
        }

        if(!matches){
            reducedArray.push(item);
        }
    }
    return reducedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
