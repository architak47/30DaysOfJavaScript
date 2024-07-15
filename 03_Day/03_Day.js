// Activity 1
// 1. check a number is positive negative or zero
const number = -12;

if(number > 0){
    console.log(`The number ${number} is positive`);
}
else if(number === 0){
    console.log(`The number ${number} is zero`);
}
else{
    console.log(`The number ${number} is negative`);
}

// 2. check a person is elegible to vote or not

const age = 27;
if(age < 18){
    console.log(`You are not elegible to vote`);
}
else{
    console.log(`You are elegible to vote`);
}

// Activity 2
// 1. Largest of 3 numbers program
const num1 = 10;
const num2 = 20;
const num3 = 15;

if(num1 > num2){
    if(num1 > num3){
        console.log(`The Largest number is ${num1}`);
    }
    else{
        console.log(`The Largest number is ${num3}`)
    }
}
else{
    if(num2 > num3){
        console.log(`The Largest number is ${num2}`);
    }
    else{
        console.log(`The largest number is ${num3}`);
    }
}

// Activity 3
// 1. switch case to find day name from number

const day = 4;

switch(day){
    case 1:
        console.log(`The day is Monday`);
        break;
    case 2:
        console.log(`The day is Tuesday`);
        break;
    case 3:
        console.log(`The day is Wednesday`);
        break;
    case 4:
        console.log(`The day is Thursday`);
        break;
    case 5:
        console.log(`The day is Friday`);
        break;
    case 6:
        console.log(`The day is Saturday`);
        break;
    case 7:
        console.log(`The day is Sunday`);
        break;
    default:
        console.log(`Invalid day`);
        break;
}

// 2. switch case to assign a grade to a student based on marks

const marks = 75;

switch(true){
    case (marks > 90 && marks <= 100):
        console.log(`The grade is A`);
        break;
    case (marks > 80):
        console.log(`The grade is B`);
        break;
    case marks > 70:
        console.log(`The grade is C`);
        break;
    case marks > 60:
        console.log(`The grade is D`);
        break;
    case marks > 50:
        console.log(`The grade is E`);
        break;
    case marks < 50:
        console.log(`The grade is F`);
        break;
    default:
        console.log(`Invalid marks`);
        break;
}

// Activity 4
// 1. Ternary Operator to check a number is ever or odd
const num = 10;
console.log(num % 2 === 0 ? `The number ${num} is even` : `The number ${num} is odd`);

// Activity 5
// check a year is leap year or not

const year = 3000;

if(year % 4 ===0){
    if(year % 100 != 0){
        console.log(`The year ${year} is a leap year`);
    }
    else if(year % 400 === 0){
        console.log(`The year ${year} is a leap year`);
    }
    else {
        console.log(`The year ${year} is not a leap year`);
    }
}
else{
    console.log(`The year ${year} is not a leap year`);
}
