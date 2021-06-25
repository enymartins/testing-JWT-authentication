const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Test = require('../models/Test');
const Question = require('../models/Question');

const connection = new Sequelize(dbConfig);

Test.init(connection);
Question.init(connection);

Question.associate(connection.models);

module.exports = connection;