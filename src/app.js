const express = require("express");
const app = express();

require('./database');

app.use(express.json());

const test = require('./routes/testRoutes');
const question = require('./routes/questionRoutes');

app.use('/tests', test);
app.use('/questions', question);

module.exports= app;