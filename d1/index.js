

// Statements, Syntax and Comments

// Js statements usually end with semicilon (;). not required but will help to locate where a statement ends.

console.log("Hello world");
// Variables
// It is used to contain data

// Declare variables:
// Syntax: let/const variableName;

// let/const/var is a keyword that is usually used in declaring a variable.

const myVariable = "Hello again";
console.log(myVariable);

/*

Guides in witing variables:
1. we can use 'let' keywrd followed by the variable name of your choosing and use assignment operator (=) to assign value.
2.Variable names should start with lowercase character, use camelCae for multiple words.

*/

// Best practices in naming variables:
// 1. When naming a variables, it is important to create variables that are descriptive and indicative of the data in contains.

// let firstName = "Jane";
// let lastName = "Doe"

/*
    Declaring and initializing variables
Initializing variables - the instance when a variable is given its initial/starting value
Syantax: let/const variableName = value; 
if value is string put "", else non.
*/

let productName = "desktop computer";
console.log(productName)

let productPrice = 18999;
console.log(productPrice)

const interest = 3.539

// Re-assigning variable values
productName = 'Laptop';
console.log(productName)

// let variable can be re assigned with another value;
// let variable cannot be re-declared within its scope;

let friend = "Kate";
let anotherFriend = "Jhon";
console.log(friend)


const pi = 3.14;
console.log(pi)

let supplier;
suplier = "John Smith Tradings";

// reassign initial value
supplier = "Zuitt Store";
console.log(supplier);

//const variable are variable with constant data. cannot be re-declare, re-assign or even a const variable without initialization.

// var vs. let/const

// var - is also used in declaring a variable. var is an ECMA script (ES1) feature ES1 (JS 1997).
// let/const was introduced as a new feature in ES6(2015)

// what makes let/const different from var?
// There are issues when used var declaring variables, one of these is hoisting.
// hoisting is JS default behavior of moving to the top.

a = 5; 
console.log(a)
var a;

// scope essentially means where variables are available to use

// let/const can be used as a local/global scope

const outerVariable = "hello";
// block/local scope = {}

{
    // block/local scope
    const innerVariable = ("hello again");
    console.log(innerVariable);
}

console.log(outerVariable); //is not defined

// Multiple variable declerations

let productCode = "DC017";
const productBrand = 'Dell';
console.log(productCode, productBrand);


// Data Types

// STRINGS - are a series of alphanumeric characters.
// Strings in javascript can be written using a single (') or doube (") quotation.
let country = 'Philippines';
let province = 'Metro Manila';
console.log(typeof country)
console.log(typeof province)

// Concatenating Strings
// We use the symbol + can be used to combine two string.

let fullAddress = province + ', ' + country;
console.log(fullAddress)

let greeting = 'I live in the ' + country; 
console.log(greeting)

// template literals (ES6) is the updated version of concatenation
// baackticks `dvdv`
// expression ${variable}
console.log(`${greeting} ${province}, ${country}`);

// Escape character (\) in strings in combination with other characters can produce different efffects
// "\n" refers to creating a new line in between text

let mailAddress = "Metro Manila\n\nPhilippines";
console.log(mailAddress);

// \'

let message = 'John\'s employees went home early';
console.log(message);

message = "John's employees went home early";
console.log(message);

console.log(`Metro Manila

            

Philippines
`);

// NUMBER
// Integers/Whole Numbers
let headCount = 23;
console.log(typeof headCount);

// Decimal Numbers/Fractions
let grade = 98.7;
console.log(typeof grade);


// Exponential
let planetDistance = 2e10;
console.log(typeof planetDistance);

// BOOLEAN
// Boolean values are normally used to store values relating to the state of certain things.
// This will be usefull in further discussion about creating logic to make our application respond to certain scenarios.

let isMarried = false;
let inGooodConduct = true;
console.log(typeof isMarried);
console.log(typeof inGooodConduct);


// OBJECTS


// Arrays
    // are a special kind of data that is used to store multiple values. it can store different data types but is normally used to store similar data types.

// similar data types
// syntax: let/const arrayNames = [elenta, elementB, etc.]

let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);
console.log(typeof grades);

// different data types inside an array is not recomended, because it will not make sense to join the context of programing.

// indexing
console.log(grades[3]);

// re-assigning array elements

// let anime = ['one piece', 'one punch man', 'attack on titan'];
// console.log(anime);
// anime[0] = 'kemirsu no';
// console.log(anime);

// using const

// const anime = ['one piece', 'one punch man', 'attack on titan'];
// console.log(anime);
// anime [0] = '1';
// anime [1] = '2';
// anime [2] = '3';
// console.log(anime);

//Objects syntax
/*
    let/const objectName = {
        propertyA: value
        propertyB: value
    }
*/



let objectGrades = {
    fistQuarter: 98.7,
    secondQuarter: 92.1,
    thirdQuarter: 90.2,
    fourthQuarter: 94.6
};
console.log(objectGrades.fistQuarter);


let person = {
    fullAddress: 'asasa',
    age: 35,
    isMarried: false,
    contact: ['12345', '45678'],
    address: {
        housenumber: 22222,
        city: 'Manila',
    }
}

console.log(person.age)
console.log(person.contact[0])
console.log(person.address.city)
console.log(person)


// end for today March 03, 2022

// Mini activity
 let firstName = 'Jeffry';
 let lastName = 'Montallana';
 console.log(`${firstName} ${lastName}`);

let sentence;
    sentence = 'a student at Zuitt bootcamp';
console.log(`I am ${firstName} ${lastName} ${sentence}`);

let favoriteFood = ['Kare-kare', 'Bulalo', 'Inihaw'];
console.log(favoriteFood);

let profile = {
    firstName: 'Jame',
    lastName: 'Blond',
    isDeveloper: true,
    hasPorfolio: ['yes', 'no'],
    age: 30
}
console.log(profile);

// NUMBER

let num1 = 5;
let num2 = 6;
let num3 = 5.5;
let num4 = .5;

let numString1 = '5';
let numString2 = '6';

console.log(num1 + numString2); // string were concatenated

console.log(num1 + num2); // both are number value

console.log(numString1 + num1);

// Mathematical operations (+, -, *, /, % (modulo-remainder))

//  modulo %
console.log(num1 % num2); // =5
console.log(num2 % num1); // =1

let product = num1 + num2;
console.log(product);

// NULL
// it is used to intentionally express the absence of a value in a variable.

let girlFriend = null;
console.log(girlFriend);

// UNDEFINED
// Represents the state of a variable that has been declared but without an assigned value.

let sampleVariable;
console.log(sampleVariable);

// FUNCTION
// in JS it is a line /lines/block of codes that tell our app to perform a certain task when called/invoked.

// FUNCTION DECLARATION
    // It defines a function with the function and specified parameters.

/*
Syntax:
function functionName() {
    code block/statements. 
}
*/

function printName() {
    console.log('My name is Jhon');
};
//printName(); // FUNCTION INVOCATION


// FUNCTION EXPRESSION
    // a function expression can be stored in a variable

let variableFunction = function() {
     console.log('Hello World');
    }

variableFunction();   // FUNCTION INVOCATION

let funcExpression = function func_name() {
     console.log('Hello');
    }

funcExpression(); // FUNCTION INVOCATION

// FUNCTION INVOCATION
    // The code inside the function is executed when the function is called/invoked.

// Function scoping
// global and loca

let faveCharacter = 'Nezuko-chan';

function myFunction() {
    let nickName = 'Jane';
    console.log(nickName);
    console.log(faveCharacter);
}
myFunction();
// console.log(nickName);

function showSum() {
    console.log(6 + 6);
}
showSum();


//  parameters and arguments
function printName(pikachu) {
    console.log(`My name is ${pikachu}`);
};


// arguments are the actual value/data that we passed tou our function.

printName('like');

// Multiple Parameters and Arguments

function displayFullname(fName, lName, age) {
    console.log(`${fName} ${lName} is ${age}`);
}

displayFullname('Jeff', 'Lopez', '32');

// return keyword
    // The "return statement allows the output of a function to be passed to the block of code that invoked the function"

function createFullname(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
    console.log('I will no longer run because the functions result has been returned');
}

let fullName1 = createFullname('Tom','Cruise', "Mapother")
console.log(fullName1);

// 
let fullName2 = displayFullname('William','Bradley', "Pitt")
console.log(fullName2);

let fullName3 = createFullname('Jeffrey','John', "Smith")
console.log(fullName3);

// Mini Activity

// function showNumber(n1, n2) {
//     return `${n1/n2}`
// }

// let quotient = showNumber(prompt('enter 1st number'),prompt('enter 2nd number'));
// console.log('The result of the division is', quotient)
// prompt ('what is your number');

// Function as an argument

function argumentFunction () {
    console.log("This function was passed as an argument before the message was printed");
}

function invokeFunction(pikachu) {
    pikachu();
}

invokeFunction(argumentFunction)