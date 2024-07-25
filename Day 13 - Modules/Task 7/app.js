// Activity 4: Using Third-Party Modules
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// First, install axios:
// npm install axios

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });