let students = [
    {name: "Alice", age: 22, grade: 85},
    {name: "Bob", age: 25, grade: 72},
    {name: "Charlie", age: 20, grade: 90},
    {name: "David", age: 23, grade: 68}
];
//console.log(students);

let studentNames = students.map((student) => student.name);
//console.log(studentNames);

let studentGrade = students.filter((name) => name.grade > 80);
//console.log(studentGrade);

let avarageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
//console.log(avarageGrade);

let charlie = students.find(student => student.name === "Charlie");
//console.log(charlie);

students.forEach(student => {
    //console.log(`${student.name} has a grade of ${student.grade}.`);
});

// Basic Example of 'froEach' method
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
    //console.log(fruit);
});

// Using 'forEach' for More Complex Operations
// Doubling numbers
const numbers = [1,2,3,4];
let doubledNumbers = [];
numbers.forEach((number) => {
    doubledNumbers.push(number * 2);
});
//console.log(doubledNumbers);

// Finding even numbers
const numbers1 = [1,2,3,4,5,6];
let evenNumber = [];
numbers1.forEach((number) => {
    if (number % 2 === 0) {
        evenNumber.push(number);
    }
});
//console.log(evenNumber);

// Calculating the sum of all numbers in an array
const numbers2 = [1,2,3,4];
let sum = 0;
numbers2.forEach((number) => {
    sum += number;
});
//console.log(sum);

// More Practice over Array Methods
