const Exam = require('../models/Exam');


const getAll = async (req, res) => {
    const exams = await Exam.findAll();

    return res.json(exams);
}

const createExam = async (req, res) => {
    const { title } = req.body;

    const exam = await Exam.create({ title });

    return res.json(exam);
}

module.exports = { 
    createExam,
    getAll
}