// Activity 4: Error Handling in Promises
// Task 1: Create a promise that randomly resolves or rejects. Use catch to handle the rejection and log an appropriate message to the console.

const promise = new Promise((resolve, reject) => {
    const random = Math.random() * 100 + 1;
    if(random > 50) {
        console.log(random);
        resolve('Success');
    }
    else {
        console.log(random);
        reject('Error');
    }
})



// promise.then((message) => {
//     console.log(message);
// })
// .catch((err) =>{
//     console.log(err);
// })


// Task 2: Use try catch within an async function to handle errors from a promise that randomly resolves or rejects, log the error message

async function asyncFunction() {
    try {
        const message = await promise;
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

asyncFunction();