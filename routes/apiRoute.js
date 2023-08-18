const apiRoute = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// GET /api/notes reads the db.json file and returns all saved notes as JSON
apiRoute.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    console.log(data);
    if (err) throw err;
    let dbData = JSON.parse(data);
    return res.json(dbData)
  });
});

// POST /api/notes receives a new note to save on the request body and adds it to db.json, then returns new note to client
apiRoute.post('/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;

  let dbData = JSON.parse(data);

  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  dbData.push(newNote);

  fs.writeFileSync('./db/db.json', JSON.stringify(dbData))
  res.json(newNote);
  });
});

apiRoute.delete('/notes/:id', (req, res) => {
  let dbData = JSON.parse(fs.readFileSync('db/db.json'))

  let deleteNotes = dbData.filter(item => item.id !== req.params.id);

  fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
  res.json(deleteNotes);
});

module.exports = apiRoute;