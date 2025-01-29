// logging a modified version of each string
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

// create a new array with doubled numbers
const numbers = [2,4,6,8,10];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// filter out all numbers less than 5
const numbers1 = [1,2,3,4,5,6,7,8];
const filteredNumber = numbers1.filter(num => num >= 5);
console.log(filteredNumber);

// find the sum of all numbers in an Array
const numbers2 = [1,2,3,4,5];
const sum = numbers2.reduce((sum, num) => sum + num, 0);
console.log(sum);

// map() and filter() combined-find the squares of even numbers
const numbers3 = [1,2,3,4,5,6];
const evenSquares = numbers3
    .filter(num => num % 2 === 0)
    .map(num => num ** 2);
console.log(evenSquares);

// forEach() with index - log each item with its index
const names = ['John', 'Mary', 'Steve'];
names.forEach((name, index) => console.log(`Index: ${index} - Name: ${name}`));

