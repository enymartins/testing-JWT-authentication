const Alternative = require('../models/Alternative');
const Question = require('../models/Question');

const getAll = async (req, res) => {
    const { question_id } = req.params;

    const question = await Question.findByPk(question_id, {
        include: { association: 'alternatives' }
    });

    return res.json(question);
}

const createAlternative = async (req, res) => {
    const { question_id } = req.params;
    const { content, isCorrect } = req.body;

    const question = await Question.findByPk(question_id);

    if(!question) {
        return res.status(400).json({ error: 'Questão não encontrada' });
    }

    const alternative = await Alternative.create({ question_id, content, isCorrect });

    return res.json(alternative);
}

module.exports = { 
    createAlternative,
    getAll
}