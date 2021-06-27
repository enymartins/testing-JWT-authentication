const express = require('express');
const QuestionController = require('../controllers/QuestionController');

const routes = express.Router();

routes.post('/:exam_id/create', QuestionController.createQuestion);
routes.get('/:exam_id/list', QuestionController.getAll);
routes.delete('/:id', QuestionController.remove);
routes.put('/:id', QuestionController.update);


module.exports = routes;