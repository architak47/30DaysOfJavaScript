// Activity 4: Fetch data from an API
// Task 1: Use the fetch to get data form a public API and display the data in the console using async await

const api = 'https://api.restful-api.dev/objects';
async function fetchData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// Task 1: Use the fetch to get data form a public API and display the data in the console using Promises

const newApi = 'https://api.genderize.io/?name=archit'
async function fetchNewData() {
    try {
        const response = await fetch(newApi);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchNewData();