// ES6+ Features

// Activity 1: Template Literals
// Task 1: Use temple literals to create a string that includes variables fora  person's name and age
let name = 'John';
let age = 25;
console.log(`Hello, my name is ${name} and I am ${age} years old`);

// Task 2: Create a multi line string using literals
let str = `This is a
Multi line
String`;

console.log(str);


// Activity 2: Destructuring
// Task 1: Use array destructuring to assign the first and second element of an existing array plus additional elements and log the new array in the console

let arr = [1, 2, 3, 4, 5, 6, 7];

let [first, second, ...rest] = arr;

console.log(first, second);

console.log(rest);

// Task 2: Use object destructuring to extract the little and arthor from a book object and log them in the console

const book = {
    title: 'Book-title',
    publisher: 'Book-publisher',
    author: 'Book-author',
    publishYear: 2021,
    pages: 197,
    price: 200
};

let {title, author} = book;

console.log(title, author);

// Activity 3: Spread and rest Operator
// Task 1: use the spread operator to create a new array that includes all elements of an existing array plus additional elements plus additional elements and log the new array in the console

let newArr = [...arr, 8, 9];
console.log(newArr);

// Task 2: Use a the rest operator in a function to accept an arbitary number of arguments and sum them and return result

function sum(a ,b, c, ...rest){
    let sum = a + b + c;
    for(all of rest){
        sum += all;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// or

let total = (...rest) => {
    // let sum = 0; 
    // for(all of rest){
    //     sum += all;
    // }
    return rest.reduce((sum, curr) => sum + curr, 0);
    
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


const result = total(1, 2, 3, 4, 5);
console.log(result); 

// Activity 4: Default Parameters
// Task 1: write a function that takes two parameters and return their product with the second parameter defaulting to 1

let prod = (a, b = 1) => {
    return a * b;
}

console.log(prod(2));

// Activity 5: Enhanced Object Literals
// Task 1: Use enhanced object with computed property names based on variables and log the object with methods and properties and log the object in the console

const fname = 'John';
const lname = 'Doe';
const fullName = 'getFullName';

const person = {
    fname: fname,
    lname: lname,
    fullname() {
        return `${this.fname} ${this.lname}`;
    },
    greet(){
        return `Hello ${this.fullname()}, welcome to the world of ES6+`; 
    }
}

console.log(person.fname);
console.log(person.lname);
console.log(person.fullname());
console.log(person.greet());


const n = 'Archit';
const s = 17630000
const a = 25;

const info ={n, s, age};
console.log(info)

// Task 2: Create an object with computed property names and log the object in the console

const key1 = 'name';
const key2 = 'age';
const key3 = 'location';

const person1 = {
    [key1]: 'Alice',
    [key2]: 30,
    [key3]: 'New York'
};

// Log the object to the console
console.log(person1);
