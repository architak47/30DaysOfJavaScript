// Activity: 1: Function Declaration
// Task 1: Function to check evev odd
function check(num) {
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(check(11));

// Task 2: function to calculate square of a number
function square(num) {
    return num ** 2;
}

console.log(square(5));

// Activity 2: Function Expression
// Task 1: Function to find max of 2 numbers
function maximum(a, b) {
    return a > b ? a : b;
}

console.log(maximum(5, 10));

// Task 2: function to concatenate two strings
function concat(str1, str2) {
    return str1 + str2;
}

console.log(concat("Archit ", "Awasthi"));

// Activity 3: Arrow Function
// Task 1: Arrow Function to find sum of 2 numbers
let sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 10));

// Task 2: Arrow function to check if string contains a specific value and return boolean 
let checkString = (str, value) => {
    if(str.indexOf(value) !== -1) return true;
    return false;
}

console.log(checkString("Hello World", "hello"))

// Activity 4: Function Parameters and Default Values
// Task 1: Function to take 2 parameters and return their product, use default value for second parameter
let product = (first, second = 2) => {
    return first * second;
}

console.log(product(5));

// Task 2: Function to take username and age and return a greeting message
let greet = (username, age = 22) => {
    return `Hello ${username}, your age is ${age}, have a great day!`;
}

console.log(greet('Archit'));

// Activity 5: Higher Order Function
// Task 1: Function to take a number and calls the function that many times

let functionCaller = (num, func) => {
    for(let i = 1; i <= num; i++){
        func(i);
    }
}

let func = num => {
    console.log(num * num);
}

functionCaller(5, func);

// Task 2: Higher order function that takes two function and a value, applies the first function to the valuse and then applies the second function to the result
let apply = (func1, func2, value) => {
    return func2(func1(value));
}

let func1 = (num) => {
    return num * num;
}

let func2 = (num) => {
    console.log(num);
    return (num % 2 === 0)
}

console.log(apply(func1, func2, 2));