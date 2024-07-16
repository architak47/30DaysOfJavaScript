// Activity 1
// Task 1: Loop to print from 1 to 10 for loop
console.log('\n');

for(let num = 0; num < 10; num++){
    console.log(num+1);
}

// Task 2: print multiplication of 5 using for loop
console.log('\n');

for(let num = 1; num < 11; num++){
    console.log(num*5);
}


// Activity 2: while loop
// Task 1: calculate sum of number from 1 to 10;
console.log('\n');
let num = 1;
let sum = 0;

while(num <= 10){
    sum += num;
    num++;
}

console.log(sum);

// Tast 2: write program to print from 10 to 1
console.log('\n');

let num2 = 10;

while(num2 > 0){
    console.log(num2);
    num2--;
}


// Activity 3: Do while
// Task 1: print numbers from 1 to 5

console.log('\n');

let num3 = 1;

do{
    console.log(num3);
    num3++;
}while(num3 <= 5)

// Task 2: program to calculate factorial of a number
console.log('\n');
let num4 = 5;
let fact = 1;

do{
    fact = fact * num4;
    num4--;
}while(num4 >= 1);

console.log(fact);

// Activity 4: Nested loops
// Task1: program to print this pattern
// *
// * *
// * * *
// * * * *
// * * * * *

console.log("\n");

for(let i = 0; i < 5; i++){
    let char = '';
    for(let j = 0; j <= i; j++){
        char += '* '
    }
    console.log(char);
}


// Activity 5: Loop control statement
// Task 1: print 1 to 10 and skip 5
console.log('\n');

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Task 2: loop 1 -> 10 break when 7
console.log('\n');

for(let i = 1; i <= 10; i++){
    if(i === 7) break;
    console.log(i);
}