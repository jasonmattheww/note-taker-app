const html = require('express').Router();
const path = require('path');

// GET Notes returns notes.html file
html.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);

// GET * returns index.html file
html.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '/../public/index.html'))
);

module.exports = html;