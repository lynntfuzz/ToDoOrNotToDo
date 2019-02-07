const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//express settings

const app = express();

require('./routes')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('*', (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(rootHtmlPath);
  })

  module.exports = app;