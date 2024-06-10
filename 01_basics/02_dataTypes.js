"use strict"; // treat all JS code as newer version

// alert(3+3)   // we are using NodeJS, not browser

console.log(3+3)
console.log("Sunny")    // Code readibility required

let name = "sunny"
let age = 18
let isLoggeIn = false

// number => 2 to the power of 52
// bigint
// string => ""
// boolean = true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof null);

// ************ Advance **************** //
// Primitive datatypes
// 7 types : String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherID = Symbol("123")

console.log(id === anotherID);

const bigNumber = 34329842837923829484281n

// NonPrimitive
// Reference Type : array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sunny",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);