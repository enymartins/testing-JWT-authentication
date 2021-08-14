const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Exam = require('../models/Exam');
const Question = require('../models/Question');
const Alternative = require('../models/Alternative');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

Exam.init(connection);
Question.init(connection);
Alternative.init(connection);
User.init(connection);

Exam.associate(connection.models);
Question.associate(connection.models);
Alternative.associate(connection.models);

module.exports = connection;