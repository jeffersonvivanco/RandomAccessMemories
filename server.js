//This file has the server code that points to the server folder
require('./server/db');
//Get Dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Get our API routes
const api = require('./server/routes/api');
const app = express();

//use cors
app.use(cors());
//global cors
app.options('*', cors());

//Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set our api routes
app.use('/api', api);

//Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP Server
const server = http.createServer(app);

//Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));
