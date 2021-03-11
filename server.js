// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const fs = require('fs');
const express = require('express');
const path = require('path');
const uuidv1 = require('uuid/v1');
const notes = require('./data/db.json')
// const notes = [{id:1,title:"march10",text:"study"}];

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/api/notes', (req, res) => {
  
  res.json(notes);
});
app.post('/api/notes', (req, res) => {
  req.body.id = uuidv1();
  console.log(req.body);
  notes.push(req.body);
  fs.writeFile('./data/db.json', JSON.stringify(notes), err =>{
    if (err) return res.status(500).json(err)
    res.json(req.body);
  })
});
app.delete(`/api/notes/:id`,(req,res) =>{
  const newNotes = notes.filter(note => note.id !== req.params.id);
  notes.length = 0;
  newNotes.forEach(note => notes.push(note));
  fs.writeFile('./data/db.json', JSON.stringify(notes), err =>{
    if (err) return res.status(500).json(err)
    res.json("deleted a note");
  })
  
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
