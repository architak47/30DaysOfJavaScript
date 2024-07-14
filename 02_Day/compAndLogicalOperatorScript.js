let a = 7;
let b = 5;

// Comparison operators
let isEqual = a == b;
let isStrictEqual = a === b;
let isNotEqual = a != b;
let isStrictNotEqual = a !== b;
let isGreaterThan = a > b;
let isLessThan = a < b;
let isGreaterOrEqual = a >= b;
let isLessOrEqual = a <= b;

console.log(`Is equal: ${a} == ${b} -> ${isEqual}`);
console.log(`Is strictly equal: ${a} === ${b} -> ${isStrictEqual}`);
console.log(`Is not equal: ${a} != ${b} -> ${isNotEqual}`);
console.log(`Is strictly not equal: ${a} !== ${b} -> ${isStrictNotEqual}`);
console.log(`Is greater than: ${a} > ${b} -> ${isGreaterThan}`);
console.log(`Is less than: ${a} < ${b} -> ${isLessThan}`);
console.log(`Is greater or equal: ${a} >= ${b} -> ${isGreaterOrEqual}`);
console.log(`Is less or equal: ${a} <= ${b} -> ${isLessOrEqual}`);

// Logical operators
let andCondition = a > b && b < a;
let orCondition = a > b || b > a;
let notCondition = !(a < b);

console.log(`AND condition: (${a} > ${b} && ${b} < ${a}) -> ${andCondition}`);
console.log(`OR condition: (${a} > ${b} || ${b} > ${a}) -> ${orCondition}`);
console.log(`NOT condition: !(${a} < ${b}) -> ${notCondition}`);
