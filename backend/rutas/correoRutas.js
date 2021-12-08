const express = require('express');
const app = express();

let envio = require('../controllers/correoController');
app.use(express.json())
app.post('/envio', envio.envio);

module.exports = app;
