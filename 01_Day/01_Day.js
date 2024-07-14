// Activity 1: Variable Declaration
var first = 12;
console.log(first);

let second = "Archit";
console.log(second);


// Activity 2: Constant Declaration
const third = true;
console.log(third);

const fourth ={
    name: "Archit",
    age: 22,
}
console.log(fourth);

const fifth = [1,2,3,4,5];
console.log(fifth);

// Activity 3: Data Types
console.log(typeof(first));
console.log(typeof(second));
console.log(typeof(third));
console.log(typeof(fourth));
console.log(typeof(fifth));

// Activity 4: Reassigning Variables
let newVar = 12;
console.log(newVar);
newVar = "Archit";
console.log(newVar);

// Activity 5: Understanding const
const one = false;
console.log(one);
// one = true;
// console.log(one);  //TypeError: Assignment to constant variable.


// Feature Request :
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to
let num = 123;
let str = "Archit";
let bool = true;
let obj = {
    name: "Archit",
    age: 22,
};
let arr = [1,2,3,4,5];
let nul = null;
let und = undefined;

console.log(`value: ${num}, type: ${typeof(num)}`);
console.log(`value: ${str}, type: ${typeof(str)}`);
console.log(`value: ${bool}, type: ${typeof(bool)}`);
console.log(`value: ${JSON.stringify(obj)}, type: ${typeof(obj)}`);
console.log(`value: ${arr}, type: ${typeof(arr)}`);
console.log(`value: ${null}, type: ${typeof(null)}`);
console.log(`value: ${und}, type: ${typeof(und)}`);


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Using let
let var1 = "Archit";
console.log(var1);
var1 = "Archit Awasthi";
console.log(var1);

// Using const
const var2 = "Papa";
console.log(var2);
// var2 = "Archit Papa";
// console.log(var2);  //TypeError: Assignment to constant variable.

// using try catch block
try {
    var2 = "Archit Papa";
} catch (err) {
    console.log(`Error occoured: ${err}`);
    // throw err;
}