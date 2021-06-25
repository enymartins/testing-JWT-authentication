const express = require("express");
const app = express();

require('./database');

app.use(express.json());

const test = require('./routes/testRoutes');

app.use('/tests', test);

module.exports= app;