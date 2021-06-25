const express = require('express');
const TestController = require('../controllers/TestController');

const routes = express.Router();

routes.post('/create', TestController.createTest);

module.exports = routes;