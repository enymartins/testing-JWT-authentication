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

const update = async (req, res) => {
    const { id } = req.params;

    const { title } = req.body;
    try{
        await Exam.update({ title }, 
            { 
                where: { id }
            })
         res.status(200).send({ message: "Prova atualizada com sucesso!"})
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    const exam = await Exam.findByPk(id)
    
    if (exam == undefined) {
        return res.status(404).json({message: 'Essa prova não existe em nosso banco de dados'})
    }    

   try{
       await exam.destroy()
        res.status(200).send({ message: "Prova deletada com sucesso!"})
   } catch(err) {
       res.status(500).json({ message: err.message})
   }
}

module.exports = { 
    createExam,
    getAll,
    update,
    remove
}