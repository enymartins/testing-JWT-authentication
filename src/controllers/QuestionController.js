const Exam = require('../models/Exam');
const Question = require('../models/Question');

const getAll = async (req, res) => {
    const { exam_id } = req.params;
    try {
        const exam = await Exam.findByPk(exam_id, {
            include: {
                association: 'Questions'
            }
        });
        return res.status(200).json(exam);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createQuestion = async (req, res) => {
    const { exam_id } = req.params;
    const { caput } = req.body;

    const exam = await Exam.findByPk(exam_id);

    if (!exam) {
        return res.status(400).json({ error: 'Prova não encontrada' });
    }
    try {
        const question = await Question.create({
            caput,
            exam_id
        });
        return res.status(201).json([{ 
            "message":"Questão criada com sucesso!", 
            question }]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const update = async (req, res) => {
    const { id } = req.params;

    const { caput } = req.body;
    try {
        await Question.update({ caput },
            {
                where: { id }
            })
        res.status(200).send({ message: "Questão atualizada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    const question = await Question.findByPk(id)

    if (question == undefined) {
        return res.status(404).json({ message: 'Esta questão não existe em nosso banco de dados' })
    }

    try {
        await question.destroy()
        res.status(200).send({ message: "Questão deletada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createQuestion,
    getAll,
    update,
    remove
}