const fetch = require("node-fetch");
const express = require('express');

const app = express();

app.use(express.static('public'));

let cache = {
    'Austin-Gray': {
        '10/27/2019': 'stuff'
    },
    'jhkim8268': {

    },
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

var userArray = Object.keys(cache);
var arrLength = userArray.length;
var counter = 0;

// Trying to loop through fetch req work in progress

// function fetchNow(counter) {
//     fetch(`https://api.github.com/users/${userArray[counter]}/events`)
//         .then(res => {
//             if (counter === arrLength) {
//                 return res.json()
//             }
//             else {
//                 return fetchNow(++counter);
//             }
//         })
// }

// app.get('/api', (req, res) => {
//     fetchNow(counter)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// })

module.exports = app;
