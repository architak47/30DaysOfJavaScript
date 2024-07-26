// Activity 3: Using Async Await
// Task 1: Write an async function that waits for a promise to resolve and then logs the resolved value

async function waitForPromise() {
    const promise = new Promise((res, rej) => {
        setTimeout(() =>{
            res('Task 1 Promise has been resolved')
        }, 2000)
    });
    const result = await promise;
    console.log(result);
}

waitForPromise()
    .then(() => console.log('Done!'))
    .catch(() => console.log('Error!'));


// Task 2: Write an async function that handles a reject promise using try catch block

const waitPromise = ((num) =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(num === 999){
                resolve('Promise has been resolved for the second time');
            }
            else {
                reject('Promise has been rejected || Fatal Error');
            }
        }, 3000)
    })
    return promise;
});

const handlePromise = async (num) => {
    try {
        const result = await waitPromise(4);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

handlePromise(4)