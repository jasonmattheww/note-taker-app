const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import routes
const htmlRouter = require('./routes/html.js');
const apiRouter = require('./routes/apiRoute.js');

// Call routes
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);