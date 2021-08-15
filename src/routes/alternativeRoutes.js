const express = require('express');
const AlternativeController = require('../controllers/AlternativeController');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');

const routes = express.Router();

routes.post('/:question_id/create', AuthMiddleware, AlternativeController.createAlternative);
routes.get('/:question_id/list', AuthMiddleware, AlternativeController.getAll);
routes.put('/:id', AuthMiddleware, AlternativeController.update);
routes.delete('/:id', AuthMiddleware, AlternativeController.remove);

module.exports = routes;