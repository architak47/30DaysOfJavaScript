// Activity 5: Graceful Error Handling in Fetch
// Task 1: Use the fetch API to request data from an invalid url and the handle the error using .catch and log an err messge to the console 

const Api = 'https://api.calling.wrong.url'

fetch(Api)
    .then((response) =>{
        if(response.ok) {
            console.log('fetched the data');
        }
        return response.json();
    })
    .catch((err) => {
        console.log('Error: ', err);
    })



// Task 2: Use the fetch API to request data from an invalid url within an async function and handle the error using try catch and log an err message to the console.

const apiData = async () =>{
    try {
        const response = await fetch(Api);
        if(response.ok) {
            console.log('fetched the data');
        }
        const data = await response.json();
        console.log(data);
    }
    catch(err) {
        console.log('Error with async function: ', err);
    }
}

apiData();