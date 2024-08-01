// Activity 4: Using Third-party Modules
// Task 1: install a third-party module (e.g., lodash) using npm. import and use the module in a script.

import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];

const sum = _.sum(numbers);
console.log(sum);

// Task 2: install a third-party module (e.g., axios) using npm. import and use the module to make a network request in a script.

import axios from 'axios';


// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => {
        // Handle success
        console.log('Data:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });


