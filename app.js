// const os = require('os');
const fs = require('fs');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('Hostname: ', os.hostname());
// console.log('UserInfo: ', os.userInfo());

const genders = [ 'M', 'F'];
const maleNames = ['Jan', 'Grzegorz', 'Bartosz', 'Michał', 'Zdzisław', 'Tomasz'];
const femaleNames = ['Anna', 'Barbara', 'Julia', 'Janina', 'Agnieszka', 'Katarzyna'];
const lastNames = ['Gwizd', 'Potok', 'Bozer', 'Kowal', 'Noga', 'Laska'];
const minAge = 15;
const maxAge = 78; 

function randChoice(arr) {
    const arrLength = arr.length
    // console.log('arrLength: ', arrLength);

    const randomNumber = Math.floor(Math.random() * arrLength)
    // console.log('randomNumber: ', randomNumber);

    const randomElem = arr[randomNumber]
    // console.log('randomElem: ', randomElem);

    return randomElem
}

const people = [];

function randomName(arr) {
    if(arr !== 'F') {
        const choiceName = randChoice(maleNames);
        // console.log('choiceName: ', choiceName);

        return choiceName;
    }
    if(arr !== 'M') {
        const choiceName = randChoice(femaleNames);
        // console.log('choiceName: ', choiceName);

        return choiceName;
    }
}

function randomAge() {
    const randomAge = Math.floor(Math.random() * (maxAge - minAge) + minAge);
    // console.log ('randomAge: ', randomAge);

    return randomAge;
}

for (let i=1; i<20; i++) {
    const choiceGender = randChoice(genders);
    // console.log('choiceGender: ', choiceGender);

    const choiceName = randomName(choiceGender);
    // console.log('choiceName: ', choiceName);

    const choiceLastName = randChoice(lastNames);
    // console.log('choiceLastName: ', choiceLastName);

    const choiceAge = randomAge();
    // console.log('choiceAge: ', choiceAge);

    people.push ({
        gender: choiceGender,
        name: choiceName,
        lastName: choiceLastName,
        age: choiceAge,
    })
}

console.log('people: ', people);

fs.writeFile('people.json', JSON.stringify(people), function(err) {
    if (err) throw err;
    console.log('The file has been saved!');
  });