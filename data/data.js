// const util = require('util');
const fs = require('fs');
// const uuid = require('uuid/v1'); 
const { v4: uuid } = require('uuid');
const path= require('path');
const db = JSON.parse(fs.readFileSync(path.join(__dirname, './db.json')));
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

class Notes {
   getNotes(){
       return JSON.parse(fs.readFileSync(path.join(__dirname, './db.json')));
    }
    addNote(note){
        let newNote ={
            id: uuid(),// ????????
            ...note   
        }
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(db));
    }
    deleteNote(id){ //????
        let newDb= db.filter(note => note.id !== id) ;
        fs.writeFileSync(path.join(__dirname, 'db/db.json'),JSON.stringify(newDb));
    }
}

module.exports = Notes;
