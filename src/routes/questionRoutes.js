const express = require('express');
const QuestionController = require('../controllers/QuestionController');

const routes = express.Router();

routes.post('/:test_id', QuestionController.createQuestion);
routes.get('/:test_id/list', QuestionController.getAll);

module.exports = routes;