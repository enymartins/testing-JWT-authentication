const Test = require('../models/Test');

const createTest = async (req, res) => {
    const { title } = req.body;

    const test = await Test.create({ title: title });

    return res.json(test);
}

module.exports = { 
    createTest
}