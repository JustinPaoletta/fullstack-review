const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  stargazers_count: Number,
  url: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let saveARepo = new Repo({
    id: repo.id,
    name: repo.name,
    stargazers_count: repo.stargazers_count,
    url: repo.url,
    html_url: repo.html_url
  })
  saveARepo.save(err => { if (err) return console.log(err) });
}

let get25Repos = (callback) => {
  Repo.find({}).limit(25).sort({stargazers_count: -1}).exec(callback);
}

module.exports.get25Repos = get25Repos;
module.exports.save = save;