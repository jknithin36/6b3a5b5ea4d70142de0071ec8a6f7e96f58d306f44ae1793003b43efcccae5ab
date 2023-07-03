'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (straterIndex, mainIndex) {
    return [this.starterMenu[straterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Arrays

const arr = [1, 2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

//Destrucing assignment
const [w, x, y, z] = arr;
console.log(w, x, y, z);

console.log(arr);

// , , skip element
let [mainCourse, , secondary] = restaurant.categories;
console.log(mainCourse, secondary);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// SWITCHING VARIBABLES USING DESTRUCTRING
[mainCourse, secondary] = [secondary, mainCourse];
console.log(mainCourse, secondary);

const [strater, main] = restaurant.order(2, 0);
console.log(strater, main);

// NESTED DESTRUCTING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring Objects

const restaurantO = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (straterIndex, mainIndex) {
    return [this.starterMenu[straterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Recieved ! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...OtherIng) {
    console.log(mainIng, OtherIng);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurantO.orderDelivery({
  time: '22:30',
  address: ' Via Kurnool Road',
  mainIndex: 2,
  startIndex: 2,
});

restaurantO.orderDelivery({
  address: ' Via Kurnool Road',
  startIndex: 1,
});
const { names, openingHours, categories } = restaurantO;
console.log(names, openingHours, categories);

const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurantO;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: straters = [] } = restaurantO;

console.log(menu, straters);

// Mutating Variables
let m = 111;

let n = 999;

const obj = { m: 23, n: 7, c: 14 };

({ m, n } = obj);

console.log(m, n);

// nested Objects

const {
  fri: { open: o, close: f },
} = openingHours;

console.log(o, f);

// THE SPREAD OPERATOR

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1]];

console.log(badNewArr);

const newArr = [1, 2, ...arr1];

console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurantO.mainMenu, 'Gnocci'];

console.log(newMenu);

// COPY ARRAEY

const maninMenuCopy = [...restaurantO.mainMenu];

// JOIN TWO OR MORE ARRAYS

const menuO = [...restaurantO.mainMenu, ...restaurantO.starterMenu];
console.log(menuO);

const str1 = 'NaniJK';
const letters = [...str1, ' ', 'Nithin'];
console.log(letters);
console.log(...str1);
console.log();

// Real World Example
// const ingredients = [
//   prompt("Let's Make pasta ing 1"),
//   prompt("Let's Make pasta ing 2"),
//   prompt("Let's Make pasta ing 3"),
// ];

// console.log(ingredients[0], ingredients[1], ingredients[2]);

// restaurantO.orderPasta(...ingredients);

// OBJECTS

const newHotel = { EsthablishedIn: 1992, ...restaurantO, founder: 'JK' };

console.log(newHotel);

const hotelCopy = { ...restaurantO };
hotelCopy.names = 'New gadwal Branch';
console.log(hotelCopy.names);
console.log(restaurantO.names);
// SPREAD OPERARATOR = ...
// WE EXPAND
// REST PATTERN
// WE COMBINE
// COLLECTS ALL REMIANING ELEMENTS IN ARRAY AND MAKE AnOTHER ARRAY
const arrO = [1, 2, ...[3, 4]];
console.log(arrO);

const [l, s, ...others] = [1, 2, 3, 4, 5];
console.log(l, s, others);

const [pizza, , risotto, ...other] = [
  ...restaurantO.mainMenu,
  ...restaurantO.starterMenu,
];

console.log(pizza, risotto, other);

// OBJECTS

const { sat, ...weekdays } = restaurantO.openingHours;

console.log(weekdays);

// function

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const t = [23, 5, 7];
add(...t);

restaurantO.orderPizza('Paneer', 'onion', 'Eggs');
restaurantO.orderPizza('Chicken');

// SHORT CIRCUTING
// THEY CAN USE ANY DATATYPE , return any datatype
//Shows frist truthy Value
console.log(3 || 'nithin');
console.log('' || 'Jk');
console.log(true || 0);
console.log(undefined || null);

// restaurantO.numGuests = 101;
// const guests = restaurantO.numGuests ? restaurantO.numGuests : 10;

// console.log(guests);

// const guests2 = restaurantO.numGuests || 10;
// console.log(guests2);

console.log('--------OR--------------');
console.log('---------AND------------');
// IF FRIST VALUE IS FALSY IT SHOWS IT
console.log(0 && 'jonas');
console.log(6 && 'jonas');

if (restaurantO.orderPizza) {
  restaurantO.orderPizza('Mushroom ', 'spinach');
}

restaurantO.orderPizza && restaurantO.orderPizza('Mushroom', 'Spinach');

restaurantO.numGuests = 0;
const guests = restaurantO.numGuests || 10;
console.log(guests);
// Nullish Values

const guestCorrect = restaurantO.numGuests ?? 10;

console.log(guestCorrect);

// Logical Assignment Operators

const rest1 = {
  name: 'capri',
};
