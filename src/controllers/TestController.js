const Test = require('../models/Test');


const getAll = async (req, res) => {
    const tests = await Test.findAll();

    return res.json(tests);
}

const createTest = async (req, res) => {
    const { title } = req.body;

    const test = await Test.create({ title: title });

    return res.json(test);
}

module.exports = { 
    createTest,
    getAll
}