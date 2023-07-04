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
  numGuests: 0,
};

const rest2 = {
  name: 'La pizza',
  owner: 'Nithin',
};
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<Anynomous>';

console.log(rest1['numGuests']);
console.log(rest2['numGuests']);
console.log(rest2.owner);

// Parctice 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    p: 3.25,
    team2: 6.5,
  },
};

// 1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'periscic'];

// 5

const {
  odds: { team1, p: draw, team2 },
} = game;

console.log(team1, p, team2);

//6

const printGoals = function (...players) {
  console.log(`${players.length} goals are scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Limmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 1 is more likely to win`);

// Looping Arrays: The for-of Loop

const menuJ = [...restaurantO.starterMenu, ...restaurantO.mainMenu];

for (const item of menuJ) console.log(item);

for (const item of menuJ.entries()) {
  console.log(item);
}

//Enhanced Object Literals

// Optional Chaining (?.)~

const users = [
  {
    name: 'Nithin',
    email: 'jknithin36@gmaiil.com',
  },
];
console.log(users[0]?.name ?? 'user array is empty');
const properties = Object.keys(openingHours);
console.log(properties);

// SETS & MAPS

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Omlet',
  'Pizza',
  'Pasta',
]);

console.log(orderSet);

console.log(new Set('Nithin'));
// stirng also iterables

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Omlet');
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

// NOTE SETS ARE NOT TO REPLACE ARRAYS THEY ARE USED TO STORE NON DUPLICATE VALUES

// MAPS

const restO = new Map();

restO.set('name', 'Classico Italiano');

restO.set(1, 'Gadwal,India');
console.log(restO.set(2, 'Kurnool,India'));

restO
  .set('categories', ['Indian', 'Americian', 'Russian', 'Portugal'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'WE are Open: D')
  .set(false, 'we are Closed');

console.log(restO.get('name'));
console.log(restO.get(true));
console.log(restO.get(1));

const time = 8;

console.log(restO.get(time > restO.get('open') && time < restO.get('close')));

console.log(restO.has('categories'));
restO.set(document.querySelector('h1'), 'Heading');
restO.delete(2);
console.log(restO);

console.log(restO.size);

const question = new Map([
  ['Question', 'What is the Best Programming Language in the World'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} :${value}`);
}

// const answer = Number(prompt('Your answer'));

// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// MAP --> ARRAY

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// EXERCISE 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1 .

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2

gameEvents.delete(64);

//3

console.log(
  `An Event Happened, on average,every ${90 / gameEvents.size} minutes`
);

const timeO = [...gameEvents.keys()].pop();
console.log(timeO);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'Second';
  console.log(`[${half} HALF ] ${min} :${event}`);
}
