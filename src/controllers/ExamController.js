const Exam = require('../models/Exam');
const Question = require('../models/Question');
const getAll = async (req, res) => {
    try {
        const exams = await Exam.findAll({
            include: { association: 'Questions' }
        });

        const entireExams = []

        for (exam of exams) {
            for (question of exam.Questions) {
                const questions = await Question.findByPk(question.id, {
                    include: { association: 'Alternatives' }
                });

                entireExams.push(
                    {
                        id: exam.id,
                        title: exam.title,
                        questions: {
                            id: question.id,
                            caput: question.caput,
                            alternatives: questions.Alternatives
                        }
                    }
                )
            }
        };

        return res.status(200).json(entireExams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createExam = async (req, res) => {
    const { title } = req.body;
    try {
        const exam = await Exam.create({ title });
        return res.status(201).json([{ 
            "message":"Prova criada com sucesso!", 
            exam }]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const update = async (req, res) => {
    const { id } = req.params;

    const { title } = req.body;
    try {
        await Exam.update({ title },
            {
                where: { id }
            })
        res.status(200).send({ message: "Prova atualizada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    const exam = await Exam.findByPk(id)

    if (exam == undefined) {
        return res.status(404).json({ message: 'Essa prova não existe em nosso banco de dados' })
    }

    try {
        await exam.destroy()
        res.status(200).send({ message: "Prova deletada com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createExam,
    getAll,
    update,
    remove
}