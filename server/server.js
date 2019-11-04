const express = require('express');
const githubData = require('./data');
const axios = require('axios');
var moment = require('moment');

const app = express();
app.use(express.static('public'));

var myUsers = ["darrell3001", "MikeMurrayDev"];
var numDays = 7;

let cache = {};
function mockData() {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          "id": "10723766875",
          "type": "PushEvent",
          "actor": {
            "id": 40833437,
            "login": "darrell3001",
            "display_login": "darrell3001",
            "gravatar_id": "",
            "url": "https://api.github.com/users/darrell3001",
            "avatar_url": "https://avatars.githubusercontent.com/u/40833437?"
          },
          "repo": {
            "id": 210208145,
            "name": "darrell3001/sdcs-codechallenges",
            "url": "https://api.github.com/repos/darrell3001/sdcs-codechallenges"
          },
          "payload": {
            "push_id": 4200409593,
            "size": 1,
            "distinct_size": 1,
            "ref": "refs/heads/master",
            "head": "9b308f743626aaf9e6a6e27618044da881e28257",
            "before": "6ac402edeb04ff5acb827737829d99c7567c3faf",
            "commits": [
              {
                "sha": "9b308f743626aaf9e6a6e27618044da881e28257",
                "author": {
                  "email": "darrell3001@gmail.com",
                  "name": "Darrell Sturdivant"
                },
                "message": "fix code error spotted by Albert",
                "distinct": true,
                "url": "https://api.github.com/repos/darrell3001/sdcs-codechallenges/commits/9b308f743626aaf9e6a6e27618044da881e28257"
              }
            ]
          },
          "public": true,
          "created_at": "2019-10-27T20:59:42Z"
        }
      ]
    });
  });
}

function isDataMissing(cache, username, numberDays) {

  for (let i = 0; i < numberDays; i++) {
    var myKey = username + moment().subtract(i, 'day').format("MM-DD-YYYY");
    console.log(myKey);

    return !cache[myKey]

} 


app.get('/data', function (req, res) {
  var myData = [];

  myUsers.forEach(user => {

    for (let i = 0; i < numDays; i++) {
      var myKey = user + moment().subtract(i, 'day').format("MM-DD-YYYY");
      console.log(myKey);

      // TODO: ioDataMissing(usernamne,numDays)
      if (!cache[myKey]) {
        console.log("hi");
        mockData() 
        // axios.get(`https://api.github.com/users/${user}/events`)
          .then(data => {
        // console.log(data.data);
        cache[myKey] = data;
        console.log("write to the cache");
        })
        .catch(error => console.error(error));
        // do something
      } else {
        console.log("found in the cache");

      }
    }
  });
  // console.log('Key thing: ', cache);

});

module.exports = app;
