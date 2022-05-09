const findTheOldest = function(people) {
    return people.reduce((lastPerson, currPerson) => {
        if(calculateAge(lastPerson) < calculateAge(currPerson)) return currPerson;
        return lastPerson;
    })

};

function calculateAge(person) { 
    if(person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
