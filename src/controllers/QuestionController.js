const Test = require('../models/Test');
const Question = require('../models/Question');



const getAll = async (req, res) => {
    const { test_id } = req.params;

    const test = await Test.findByPk(test_id, {
        include: { association: 'questions' }
    });

    if(!test) {
        return res.status(400).json({ error: 'Prova não encontrada' });
    }
    const questions = await Question.findAll();

    return res.json(questions);
}

const createQuestion = async (req, res) => {
    const { test_id } = req.params;
    const { caput } = req.body;

    const test = await Test.findByPk(test_id);

    if(!test) {
        return res.status(400).json({ error: 'Prova não encontrada' });
    }

    const question = await Question.create({ 
        caput,
        test_id
     });

    return res.json(question);
}

module.exports = { 
    createQuestion,
    getAll
}