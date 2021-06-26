const express = require('express');
const ExamController = require('../controllers/ExamController');

const routes = express.Router();

routes.post('/create', ExamController.createExam);
routes.get('/list', ExamController.getAll);

module.exports = routes;