const express = require('express');

// Import files containing our routes
const apiRouter = require('./api');
const htmlRouter = require('./html');

// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/api', apiRouter);
app.use('/html', htmlRouter);

module.exports = app;