const express = require('express');
const AlternativeController = require('../controllers/AlternativeController');

const routes = express.Router();

routes.post('/:question_id/create', AlternativeController.createAlternative);
routes.get('/:question_id/list', AlternativeController.getAll);

module.exports = routes;