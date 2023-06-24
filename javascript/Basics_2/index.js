//// use strict uses
"use strict";

// let hasDriverLicense = false;

// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can drive..");

//// const interface = "Audio"; ("interface is a reserved word")

//// Functions

//// creating(defining) a function
// function logger() {
//   console.log("Hello I am a Function");
// }

//// calling th function
// logger();
// logger();

// function fruitMaker(apple, mango) {
//   const juice = `juice with ${apple} apples and ${mango} mangoes`;

//   return juice;
// }

// const appleJuice = fruitMaker(1, 0);

// console.log(appleJuice);

// const appleMango = fruitMaker(4, 4);

// console.log(appleMango);

////  Function Declarations vs. Expressions

// function caclAge1(birthyear) {
//   return 2023 - birthyear;
// }

////  Expressions

// const age = caclAge1(2017);
// console.log(age);

// const caclAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// const age2 = caclAge2(2001);

// console.log(age, age2);

//// ARROW FUNCTION

// const caclAge3 = (birthYear) => 2023 - birthYear;

// const age3 = caclAge3(2001);
// console.log(age3);

// const retirementYearLeft = (birthYear, fristName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;

//   return `${fristName} retires in ${retirement} years`;
// };

// console.log(retirementYearLeft(2001, "Nithin"));

//// Functions Calling Other Functions
// function cutFruits(fruit) {
//   return fruit * 4;
// }
// function foodProccesor(apples, mangoes) {
//   const applePieces = cutFruits(apples);
//   const orangeFruits = cutFruits(mangoes);

//   return `juice with ${applePieces} apples and ${orangeFruits} mangoes`;
// }

// console.log(foodProccesor(2, 3));

//// Reviewing Functions
// const caclAge4 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const retirementYearLeft = function (birthYear, fristName) {
//   const age5 = caclAge4(birthYear);
//   const retirement = 65 - age5;

//   if (retirement > 0) {
//     console.log(`${fristName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${fristName} retired `);
//     return -1;
//   }
// };

// console.log(retirementYearLeft(1900, "Nithin"));

//// NOTES
//// FUNCTION DECLARTION function functionName(parameters){code}
//// FUNCTION EXPRESSION const functionName = function(parameters){code}
//// ARROW FUNCTION const functioName = (parameters)=>{code}

////
////
////
////
////
////
////
////
//
//Assignments
//
//// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity} `;
// }

// const desIndia = describeCountry("India", 140, "NewDelhi");
// console.log(desIndia);

////Function Declarations vs. Expressions

// const percentageOfWorld1 = function (population1) {
//   return (population1 / 7900) * 100;
// };

// const countryChina = percentageOfWorld1(1441);

// console.log(countryChina);

// function percentageOfWorld2(population2) {
//   return (population2 / 7900) * 100;
// }

// const countryChinese = percentageOfWorld2(1441);
// console.log(countryChinese);

//// LECTURE: Arrow Functions

// const percentageOfWorld3 = (population3) => {
//   return (population3 / 7900) * 100;
// };

// console.log(percentageOfWorld3(1441));

//// LECTURE: Functions Calling Other Functions

// const percentagePopulation = (population) => {
//   return (population / 7900) * 100;
// };
// const describePopulation = (country, population) => {
//   const percentage = percentagePopulation(population);
//   return ` ${country} has ${population} million people,
//   which is about ${percentage} of the world.`;
// };

// console.log(describePopulation("India", 1300));

//// coding challenge 1

// const calcAverage = function (a, b, c) {
//   return a + b + c / 3;
// };
// const scoreDolphins = calcAverage(2, 2, 2);
// const scoreKolas = calcAverage(2, 1, 4);

// console.log(scoreKolas);

// const checkWinner = function (avgDolphins, avgKolas) {
//   if (avgDolphins >= 2 * avgKolas) {
//     console.log(`Dolphins wins ${avgDolphins} vs ${avgKolas}`);
//   } else if (avgKolas >= 2 * avgDolphins) {
//     console.log(`Kolas wins ${avgKolas} vs ${avgDolphins}`);
//   } else {
//     console.log("GAME DRAWS");
//   }
// };

// checkWinner(scoreDolphins, scoreKolas);
