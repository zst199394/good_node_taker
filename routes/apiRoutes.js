
const fs = require('fs');
const path = require('path');
const notes = require('../data/db.json');
const { v4: uuidv4 } = require('uuid');
// const data = [];
// const util = require('util');
// const fs = require('fs');
// const uuid = require('uuid/v1');
// // const readFile = util.promisify(fs.readFile);
// // const writeFile = util.promisify(fs.writeFile);

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    data.push(req.body);
    console.log(req.body);
    fs.writeFile('../data/db.json', JSON.stringify(data), "utf-8", (err) => {
      err ? console.error(err) : console.log("Success to save ur note!!!!!!!!!");
      res.json(req.body);
    })
  });


  app.post('/api/clear', (req, res) => {
    data.length = 0;

    res.json({ ok: true });
  });
};
