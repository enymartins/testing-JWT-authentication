const Alternative = require('../models/Alternative');
const Question = require('../models/Question');

const getAll = async (req, res) => {
    const { question_id } = req.params;
    try {
        const question = await Question.findByPk(question_id, {
            include: { association: 'Alternatives' }
        });
        return res.json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

const createAlternative = async (req, res) => {
    const { question_id } = req.params;
    const { content, isCorrect } = req.body;

    const question = await Question.findByPk(question_id);

    if (!question) {
        return res.status(400).json({ error: 'Questão não encontrada' });
    }
    try {
        const alternative = await Alternative.create({ question_id, content, isCorrect });
        return res.status(201).json([{ 
            "message":"Alternativa criada com sucesso!", 
            alternative }]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const update = async (req, res) => {
    const { id } = req.params;

    const { content, isCorrect } = req.body;
    try {
        await Alternative.update({ content, isCorrect },
            {
                where: { id }
            })
        res.status(200).send({ message: "Alternativa atualizada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    const alternative = await Alternative.findByPk(id)

    if (alternative == undefined) {
        return res.status(404).json({ message: 'Essa alternativa não consta em nosso banco de dados' })
    }

    try {
        await alternative.destroy()
        res.status(200).send({ message: "Alternativa deletada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createAlternative,
    getAll,
    update,
    remove
}