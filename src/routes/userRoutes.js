const express = require('express');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');

const routes = express.Router();

routes.post('/create', UserController.createUser);
routes.get('/list', UserController.getAll);
routes.delete('/:id', UserController.removeUser);
routes.put('/:id', UserController.updateUser);
routes.post('/login', LoginController.index);


module.exports = routes;