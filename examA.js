
// Array of numbers
export let numbers = [3,7,2,9,12];

// Array of strings
let fruits = ["apple", "banana", "cherry", "mango"];

// Array of objects
export let students = [
    {name: "Alice", age: 21, grade: "A"},
    {name: "Bob", age: 23, grade: "B"},
    {name: "Charlie", age: 20, grade: "C"},
];

// Mixed array
export let mixedArray = ["text", 42, true, {color: "blue"}];

// Simple object
export let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "hiking", "gaming"]
};

// Nested Object
export let company = {
    name: "TechCorp",
    location: "Berlin",
    employees: [
        {name: "Anna", position: "Developer"},
        {name: "Sam", position: "Designer"},
        {name: "Tom", position: "Manager"}
    ],
    established: 2010
};

// push(): Add elements to the end of an array
fruits.push("pineapple");
numbers.push(15, 20);
//console.log(fruits);
//console.log(numbers);

// pop(): Remove the last element of an array
export let removedFruit = fruits.pop();
export let removedNumber = numbers.pop();
//console.log(removedFruit);
//console.log(fruits);
//console.log(removedNumber);
//console.log(numbers);

// map(): Transform each element of an array
export let doubledNumbers = numbers.map((num) => num * 2);
//console.log(doubledNumbers);

export let studentNames = students.map((student) => student.name);
//console.log(studentNames);

// filter(): Filter elements based on a condition
export let bigNumbers = numbers.filter((num) => num > 5);
//console.log(bigNumbers);

export let topStudent = students.filter((student) => student.grade === "A");
//console.log(topStudent);

// reduce(): Combine all element into a single value.
export let totalSum = numbers.reduce((sum, num) => sum + num, 0 );
//console.log(totalSum);

export let totalAge = students.reduce((sum, student) => sum + student.age, 0);
//console.log(totalAge);

// find(): Find the first element matching a condition
export let studentWithB = students.find((student) => student.grade === "B");
//console.log(studentWithB);

export let firstBigNumber = numbers.filter((num) => num > 10);
//console.log(firstBigNumber);

// splice(): Remove or replace element in an array
fruits.splice(1, 1);
//console.log(fruits);

students.splice(2, 1, {name: "Daisy", age: 25, grade: "A"});
//console.log(students);

// ##Tasks for objects##
// Access and logging 'name' property of the 'person' object. Logging the 'location' of the 'company' object
//console.log(person.name);
//console.log(company.location);

// Modify Object Properties
person.isEmployed = false;
company.location = "Munich";

//console.log(person.isEmployed);
//console.log(company.location);

// Add Propertiries to an Object
person.nationality = "German";
company.revenue = 500000;

//console.log(person.nationality);
//console.log(company.revenue);

// Delete Object Properties
delete person.hobbies;
delete company.established;

//console.log(person);
//console.log(company);

export let message = "Hello,\nWelcome to JavaScript!";
//console.log(message);

message = `Hello,
Welcome to Java Script`;
//console.log(message);

export let name1 = "Alice";
export let greeting = `Hello, ${name1}`;
//console.log(greeting);

greeting = "Hello " + name1 + "!";
//console.log(greeting);

export let x = 5;
export let y = 10;
export let result = `The sum is ${x + y}`;
//console.log(result);

studentNames = students.map((s) => s.name);
//console.log(studentNames);