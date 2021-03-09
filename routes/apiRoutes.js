// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const fs = require('fs');
const path = require('path');
const note = {};
// const util = require('util');
// const fs = require('fs');
// // const uuid = require('uuid/v1');
// // const readFile = util.promisify(fs.readFile);
// // const writeFile = util.promisify(fs.writeFile);

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => res.json(data));

  app.post('/api/notes', (req, res) => {
    
      data.push(req.body);
      
      // fs.writeFile('../data/db.json', JSON.stringify(data), "utf-8", (err) => {
      //   err? console.error(err) : console.log("Success to save ur note!!!!!!!!!");
      //   res.json(req.body);
      // })

   
  });
 

  app.post('/api/clear', (req, res) => {
    data.length = 0;

    res.json({ ok: true });
  });
};
