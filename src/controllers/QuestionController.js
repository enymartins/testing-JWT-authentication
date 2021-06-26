const Exam = require('../models/Exam');
const Question = require('../models/Question');

const getAll = async (req, res) => {
    const { exam_id } = req.params;

    const exam = await Exam.findByPk(exam_id, {
        include: { association: 'questions' }
    });

    return res.json(exam);
}

const createQuestion = async (req, res) => {
    const { exam_id } = req.params;
    const { caput } = req.body;

    const exam = await Exam.findByPk(exam_id);

    if(!exam) {
        return res.status(400).json({ error: 'Prova não encontrada' });
    }

    const question = await Question.create({ 
        caput,
        exam_id
     });

    return res.json(question);
}

module.exports = { 
    createQuestion,
    getAll
}