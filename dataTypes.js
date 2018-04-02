// Objects (can be as complex as you want)
//     {} // todoList, arrays, functions

// Primitives (building blocks)
//     String // 'Look at this string.'
//     Number // 1, 2, 3, 4...
//     Boolean // true, false
//     Undefined // value that hasn't been set
//     Null // 'Nothing'
    
// Comparisons with Primitives

// 'andy' === 'andy'; true
// 1 === 1; true
// true === true;
// false === false;
// undefined === undefined;
// null === null;

// // Comparisons with objects

// { } === { } // false
// [1, 2, 3] === [1, 2, 3] // false

// They are separate memory locations, therefore they are not equal.

// Primitives are values
// Objects are references (memory addresses)

// How are primitives and objects stored inside of variables?

var myPrimitive = 10;
var myObject = { name: 'andy' };

console.log(myPrimitive);
console.log(myObject); // This is a memory address

var myHouse = { color: 'blue' }; // Memory address
myHouse.color = 'red'; // javascript will look inside the myHouse memory address and change the color property value.

var myHouse = { color: 'blue' }; // creates memory address to store property color.
var color = myHouse.color; // Go to myHouse memory address, append value 'blue'.
color = 'red'; // changes the color variable property value, but not the myHouse.color property value.

console.log(myHouse.color);

// var myHouse1 = { color: 'blue' };
// var myHouse2 = myHouse1; // this tells the computer that variable myHouse2 is the same as the myHouse1 object.
// myHouse2.color = 'red'; // since they are the same, changing the myHouse2.color property also changes myHouse1.

// console.log(myHouse1.color); // red
// console.log(myHouse2.color); // red

const myHouse1 = { color: 'blue' };
const myHouse2 = { color: 'blue' };
myHouse2.color = 'red';

console.log(myHouse1.color); // blue
console.log(myHouse2.color); // red

