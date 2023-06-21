let js = "Amazing";

//ALERT IN JAVASCRIPT
if (js == "Amazing") {
  alert("THEN ENJOY DUDE");
}

//CALUCATIONS IN CONSOLE
console.log(40 * 6);

// Variables
//* should use camelCase(fristName) for naming
let firstName = "Nithin"; ////(MOST USED)
let $jk = "NANI";
let aa_bb = 23;
console.log(firstName);

//Data Types (JavaScript)

// "NITHIN" -- String
// 23, 34.5 -- Number
// true, false = Boolean
// undefined = empty value eg : let children;
// Null
// symbol
// BigInt

// BOOLEAN
let JavascriptIsFun = true;
JavascriptIsFun = false;
console.log(JavascriptIsFun);

//undefined
let year;
console.log(typeof year);

//Null
console.log(typeof null);

//TypeOf ( say about type of dataType)
console.log(typeof true);
console.log(typeof "Nithin");
console.log(typeof 23);

//const var and let

//let -- use when variable can be changed in future
//eg : let age = 31;
//         age = 35;
//const -- use when variable will not be changed in future
//eg : const birth = 2001;
//NOTE : WE can't use const for empty values
//eg : const age; --- "WRONG"

//var -- old way of defining variables

//Operators

// + - * / math operators
const now = 2023;
const ageNithin = now - 2001;
const ageNithinBrother = now - 1999;
console.log(ageNithin, ageNithinBrother);
console.log(ageNithin * 3, ageNithin / 11);

//concatination of strings

const fristName = "Nithin";
const lastName = "Kumar";
console.log(fristName + " " + lastName);

// assignment operators

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// comparision operators

console.log(ageNithin > ageNithinBrother);
console.log(ageNithin >= 15);
console.log(ageNithin <= 15);
console.log(ageNithin == 22);

//ASSIGNMENTS

// LECTURE: Values and Variables

let country = "India";
let continent = "Asia";
let population = 14;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var

language = "Telugu";
const myBirthYear = 2001;

console.log(language);
console.log(myBirthYear);

//LECTURE: Basic Operators

population /= 2;
console.log(population);
population++;
console.log(population);
const finland = 6;
console.log(population > finland);
const averagePopulation = 33;
console.log(population < averagePopulation);

const description = "India is in Asia, and 2million people speak telugu";
