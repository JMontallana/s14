let profile = {
    firstName: 'Joshua',
    lastName: 'Brown',
    age: 35,
    hobbies: ['Boxing', 'Racing', 'Dancing'],
    address: {
        houseNumber: 22222,
        street: 'Quiapo',
        city: 'Manila',
    },
};

function printUserInfo() {
    console.log('First Name:', profile.firstName)
    console.log('Last Name:', profile.lastName)
    console.log('age', profile.age)
    console.log('Hobbies', profile.hobbies);
    console.log('Address', profile.address);
}
printUserInfo();

function returnFunction(profile) {
    return `${profile.firstName} ${profile.lastName} ${profile.age} ${profile.hobbies} ${profile.address}`
}

let returnProfile = returnFunction(profile);
console.log(returnProfile,);

function addNumber(num1, num2) {
    return `${num1+num2}`
}

let add = addNumber(5,6);
console.log(add);

function subNumber(num1, num2) {
    return `${num1-num2}`
}

let sub = subNumber(10,6);
console.log(sub);

function multNumber(num1, num2) {
    return `${num1*num2}`
}

let mult = multNumber(10,6);
console.log(mult);











