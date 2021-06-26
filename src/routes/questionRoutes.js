const express = require('express');
const QuestionController = require('../controllers/QuestionController');

const routes = express.Router();

routes.post('/:exam_id', QuestionController.createQuestion);
routes.get('/:exam_id/list', QuestionController.getAll);

module.exports = routes;