const express = require('express');
const TestController = require('../controllers/TestController');

const routes = express.Router();

routes.post('/create', TestController.createTest);
routes.get('/list', TestController.getAll);

module.exports = routes;