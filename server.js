'use strict';

const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || '3030';

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.get('/', function(req, res) {
  res.sendFile('public/index.html');
});

app.listen(port, function() {
  console.log(`Server Starts on ${port}`);
});
