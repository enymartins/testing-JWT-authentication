const express = require("express");
const app = express();

require('./database');

app.use(express.json());

const exam = require('./routes/examRoutes');
const question = require('./routes/questionRoutes');
const alternative = require('./routes/alternativeRoutes');
const user = require('./routes/userRoutes');

app.use('/exams', exam);
app.use('/questions', question);
app.use('/alternatives', alternative);
app.use('/users', user);

module.exports= app;