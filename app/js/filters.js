const numbers = [1,2,3,4,5,6];
const no2 = numbers.filter(number => number !== 2);
console.log(no2);
//
const evenNo = [1,2,3,4,5,6, 7 , 8 , 9, 10, 11, 12, 13];
const evens = evenNo.filter(even => even % 2 === 0);
console.log(evens);
//
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below
century20 = years.filter(year => year <= 2000);
console.log(century20)

//map

const strings = ['1','2','3'];
const numbersToS = strings.map(string => parseInt(string,10))
console.log(strings);
console.log(numbersToS);
//
const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase());

console.log(capitalizedFruits);
//
const prices = [5, 4.23, 6.4, 8.09, 3.20];

const priceDollars = prices.map(price => `$${price.toFixed(2)}`);
console.log(priceDollars);

//reduce
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNamesCount = names.reduce((count, name) => {
  if (name[0] === 'G'){
    return count+1;
  }
  return count;
},0);
console.log(gNamesCount);
//
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];


// numberOf503 should be: 3
// Write your code below
const numberOf503 = phoneNumbers.reduce((counts, number) => {
  if(number.slice(1, 4)  === '503' ){
    return counts + 1;
  }
  return counts;
}, 0);
console.log(numberOf503);

// Arrray Methods

const users = [
  {name: 'Siri', age: 2000},
  {name: 'Alexa', age: 2017},
  {name: 'Google Home', age: 2018}
];

const newUsArr = users.filter(user => user.name !== 'Siri').map(user => `${user.name} was created in ${user.age}`);

const newUsersArrRed = users.reduce((usObj, user) => {
  usObj[user.name] = user.age;
  return usObj
}, {});

console.log(newUsersArrRed);

//
const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);
console.log(fullAuthorNames);
