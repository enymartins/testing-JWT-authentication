const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Test = require('../models/Test');

const connection = new Sequelize(dbConfig);

Test.init(connection);

module.exports = connection;