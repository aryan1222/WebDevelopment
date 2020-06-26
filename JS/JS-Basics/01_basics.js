// Single Line Comment 

/* Multi 
line
Comment */



// Log to Console
console.log('\n<---CONSOLE--->\n');

console.log("Hello");

console.log('\n<Time>\n');

console.time("Execution time");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
console.timeEnd("Execution time");



//var,let and const
console.log('\n<---var, let and const--->\n');

var firstName = "Aryan"; //Global scope
let age = 20; //Block scope
const lastName = "Chhabra"; 

firstName = "Hello";  //can be reassigned
// lastName = "World" // a constant variable, cant be reassigned
console.log(firstName +' '+ lastName +' - '+ age);  
// "Hello Chhabra - 20" will be printed



// DATA TYPES
console.log('\n<---DATA TYPES--->\n');
// Primitive Data types
console.log('\n<PRIMITIVE DATA TYPES>\n');
var name = "Aryan Chhabra";     //String
var yrs = 20;                   //Number
let x=10, y=20, z=30;           //Number
var gender = 'male'             //String
var married = false;            //Boolean
let college;                    //Undefined
var salary = null;              //Null

console.log(typeof college);    //"undefined"

// Non-primitive Data types
console.log('\n<NON-PRIMITIVE DATA TYPES>\n');
let hobbies = ['badminton', 'music'];   //Array
console.log(typeof hobbies);            // "object"

let address = {
    city : 'NewDelhi',
    pincode : '110012'
}
console.log(typeof address);            // "object"



// CONVERSIONS
console.log('\n<---CONVERSIONS--->\n');
let num = 20;
let str = "name";

let flag = false;

num = num.toString();      // 20 converted to "20"
console.log(typeof num);   // "string"

str = parseInt(str);       // "hello" converted to NaN
console.log(typeof str);   // "number"
console.log(str);          // "NaN"

flag = parseInt(flag);      // false converted to 0
console.log(typeof flag);   // "number"



// Operators
console.log('\n<---OPERATORS--->\n');

let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num2 - num1);
console.log(num2 / num1);
console.log(num2 % num1);
console.log(num1 * num2);



// Math Object
console.log('\n<---MATH OBJECT--->\n');

console.log(Math.pow(2,3));         // 8
console.log(Math.random());         // any no. less than 1
console.log(Math.abs(-5));          // returns the absolute (positive) value of any integer
console.log(Math.max(1,2,5,3,6));   // 6
console.log(Math.min(4,3,2,1));     // 1
console.log(Math.ceil(2.2));        // 3
console.log(Math.floor(2.6));       // 2

let val;
val = Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9 
val = Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10 
val = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10 
val = Math.floor(Math.random()*Math.pow(10,2)); // returns a random integer from 0 to 99
val = Math.floor(Math.random()*Math.pow(10,3)); // returns a random integer from 0 to 999
console.log(val);

// This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


