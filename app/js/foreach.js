const fruits = ['apple', 'pear', 'cherry'];
let capatilizedFruits = [];

fruits.forEach(fruit => {
  let capFruit = fruit.toUpperCase();
  capatilizedFruits.push(capFruit);
});
console.log(capatilizedFruits);

// prices

const prices = [6.75, 3.10, 4.00, 8.12];
let total = 0;

prices.forEach(price => {
  total += price;
})
console.log(total);

// names

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let sName =[];

names.forEach(name => {
  if (name.charAt(0) === 'S'){
    sName.push(name)
  }
});
console.log(sName);
names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
