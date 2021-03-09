// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const path = require('path');
const note = {};

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => res.json(note));

  app.post('/api/notes', (req, res) => {
    
      data.push(req.body);
      res.json(true);
   
  });


  app.post('/api/clear', (req, res) => {
    data.length = 0;

    res.json({ ok: true });
  });
};
