const apiRoute = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// GET /api/notes reads the db.json file and returns all saved notes as JSON
apiRoute.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    let dbData = JSON.parse(data);
    res.json(dbData)
  });
});

// POST /api/notes receives a new note to save on the request body and adds it to db.json, then returns new note to client
apiRoute.post('/api/notes', (req, res) => {
 let dbData = fs.readFileSync('db/db.json');
 dbData = JSON.parse(dbData);
 res.json(dbData);

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  dbData.push(newNote);

  fs.writeFileSync('/db/db.json', JSON.stringify(dbData))
  res.json(dbData);
});

module.exports = apiRoute;