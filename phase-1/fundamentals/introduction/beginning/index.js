/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations


const schoolName= "Flatiron School";
console.log(schoolName)
let name = "Ben"
console.log(name)
name = "Billy"
console.log(name)



// ~ Types
// -> undefined, null*, boolean, number, string

let lastName = "Billy"
console.log(typeof(lastName));
let numStudents = null;
console.log(typeof(numStudents));
const sunny = true;
const rainy = false;
console.log(typeof(sunny))
const numBooks = 5
console.log(typeof(numBooks))
const topic = "JavaScript"
console.log(typeof(topic))

// concatenation and iterpolation

const sentence = `We have ${numBooks} books. `
console.log(sentence + "Isn't that great!")

// ~ Objects
// -> definition, bracket/dot notation, stringify

const cube = {
    volume: 8,
    height: 2,
    width: 8,
    color: "blue"
}


console.log(cube)


// ~ Arrays
// -> definition, access, modification

const numbers = [5,6,7,8];

console.log(numbers)
console.log(numbers.length)

numbers[2] = 10

console.log(numbers)


// ~ Conditionals
// if, if-else, if-else-if-else, ternary

const isItSunny = false;
const isItRainy = false;



//ternary

const greeting = isItSunny ? "Hot Diggity!" : "cold doggity!"

console.log(greeting)


// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 * @param {string} name the person's name
 * @param {string} descriptor the person's descriptoin
 * @returns A greeting with title
 */
function sayHello(name, descriptor){
    return `Hello, ${name} the ${descriptor}`
}



console.log(sayHello("Billy", "Destroyer"))

function addOne(number){
    return number + 1;
}

//methods -- functions that have to be attached to something.
console.log("hello!")

//passing a callback function into the array method forEach


// ~ Scope
// -> global, local, closures, function hoisting
// can't call a local variable outside of the local area
firstName = "bob"



// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.





function sum(numbers){
    let total = 0
    numbers.forEach(num => {
        total += num;
    });
    return (total)
}

console.log(sum([1,2,3,4,5]))


function double(arr){
   let newArr = [];
   for(let i=0; i < arr.length; i++){
    newArr.push(arr[i]*2);
   }
   return newArr
}

console.log(double([1,2,3,4,5]))

function lowercase(arr){
    let newArr = [];
    for(let i=0; i < arr.length; i++){
     newArr.push(arr[i].toLowerCase());
    }
    return newArr
 }

 console.log(lowercase(["CLAUDIO", "JOSH", "ZACK", "TRAVIS"]))

