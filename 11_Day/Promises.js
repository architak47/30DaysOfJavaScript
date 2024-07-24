// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves after 2 second timeout and log the message in the console.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved after 2 seconds');
    }, 2000);
})

promise1.then((message) =>{
    console.log(message);
})
.catch((message) => {
    console.log('Promise Rejected');
})


// Task 2: Create a promise that rejects with an error message after 2 second timeout and log the message in the console.

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject('Promise Rejected after 2 seconds');
    }, 2000)
})

promise2.then((message) =>{
    console.log(message);
})
.catch((message) => {
    console.log(message);
})


// Activity 2: Chaining Promises
// Task 1: create a sequence of promises that simulates fetching data froma server. chain the promises to log messages in a specific order.

const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from Server 1');
    }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from Server 2');
    }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from Server 3');
    }, 3000);
});

fetchData1
    .then((data1) => {
        console.log(data1);
        return fetchData2;
    })
    .then((data2) => {
        console.log(data2);
        return fetchData3;
    })
    .then((data3) => {
        console.log(data3);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
