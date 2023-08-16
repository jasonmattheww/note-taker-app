const express = require('express');

// Import routes
// const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.use(express.static('public'));

const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/apiRoute');


app.use(htmlRouter);
app.use('/api', apiRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);