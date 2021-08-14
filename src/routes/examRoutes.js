const express = require('express');
const ExamController = require('../controllers/ExamController');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');

const routes = express.Router();

routes.post('/create', AuthMiddleware, ExamController.createExam);
routes.get('/list', ExamController.getAll);
routes.delete('/:id', AuthMiddleware, ExamController.remove);
routes.put('/:id', AuthMiddleware, ExamController.update);


module.exports = routes;