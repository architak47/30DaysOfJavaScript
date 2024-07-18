// Activity 1: Array creation and Access
// Task 1: Create an array from 1 to 5 and log the array in the console
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2: Access first and last element of the array and log them in the console
console.log(arr[0], arr[arr.length - 1]);

// Activity 2: Array Methods(Basic)
// Task 1: use push method to add a new number at the end of the array
arr.push(6);
console.log(arr);

// Task 2: use pop method to remove the last element of the array
arr.pop();
console.log(arr);

// Task 3: use shift method to remove the first element of the array
arr.shift();
console.log(arr);

// Task 4: use unshift method to add a new number at the beginning of the array
arr.unshift(1);
console.log(arr);

// Activity 3: Array Methods(Intermediate)
// Task 1: Use map method to create a new array where each number is doubled
let second = arr.map((num) => num * 2);
console.log(second);

// Task 2: Use filter method to create a new array with only even numbers
let evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr);

// Task 3: Use reduce method to calculate sum of all numbers in the array
let sum = arr.reduce((Total, num) => Total + num, 0);
console.log(sum);

// Activity 4: Array Iteration
// Task 1: use a for loop to iterate over the array and log each element in the console
console.log('\n')
for(let i = 0; i < arr.length; i++){
    console.log(`printing by for loop ${arr[i]}`);
}

// Task 2: use a forEach loop to iterate over the array and log each element in the console
console.log('\n')

arr.forEach(id => {
    console.log(`printing with for Each ${id}`);
});

// Activity 5: Multi-dimensional Array
// Task 1: Create a two dimensional array and log it in the console
console.log('\n');
let twoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(twoD);

// Task 2: Access and log a specific element from the two dimensional array
console.log('\n');
for(let i = 0; i < twoD.length; i++){
    for(let j = 0; j < twoD[i].length; j++){
        console.log(twoD[i][j]);
    }
}