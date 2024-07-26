// Activity 2: Finally Block
// Task 1: Write a script that includes a try-catch block. Log message in the try, catch and finally blocks to obsere the execution flow.

try {
    console.log('This is the try block');
    throw new Error('This is an error message');
}
catch (error) {
    console.log('This is the catch block');
    console.log(error.message);
}
finally {
    console.log('This is the finally block');
    [1, 2, 3].forEach((num) => {
        console.log(num);
    });
}