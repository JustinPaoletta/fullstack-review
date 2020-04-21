const express = require('express');
const bodyParser = require('body-parser');
const getRepos = require('../helpers/github.js');
const saveRepos = require('../database/index.js');
const getMyRepos = require('../database/index.js');

let app = express();
app.use(bodyParser.text()); // middleware
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res ) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let saveFunc = function (repos) {repos.forEach((saveRepos.save))};
  //req.body does not exist till middleware puts it there
  getRepos.getReposByUsername(req.body, saveFunc);
  res.sendStatus(200);

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getMyRepos.get25Repos((err, results) => {res.send(results)});

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

