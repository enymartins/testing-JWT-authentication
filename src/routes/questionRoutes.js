const express = require('express');
const QuestionController = require('../controllers/QuestionController');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');

const routes = express.Router();

routes.post('/:exam_id/create', AuthMiddleware, QuestionController.createQuestion);
routes.get('/:exam_id/list', AuthMiddleware, QuestionController.getAll);
routes.delete('/:id', AuthMiddleware, QuestionController.remove);
routes.put('/:id', AuthMiddleware, QuestionController.update);


module.exports = routes;