const fs = require('fs');
const path = require('path');
const Notes = require(path.join(__dirname,'../data/data.js'));//?get a class?
let savedNotes = new Notes

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    console.log("try to get data--------");
    res.send(savedNotes.getNotes())// how to pass it? sendFile?
  })
  app.post('/api/notes', (req, res) => {
    console.log("try to post data--------");
    savedNotes.addNote(res.body);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
 app.delete('/api/notes/:id',(req,res) =>{
  console.log("try to delete data--------");
   const {id} = req.params; //????
   savedNotes.deleteNote(id);
   res.sendFile(path.join(__dirname, '../public/notes.html'));
  })
 
  app.post('/api/clear', (req, res) => {
    data.length = 0;

    res.json({ ok: true });
  });
};
