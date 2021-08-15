const User = require('../models/User');
const bcrypt = require('bcrypt');

const getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    passwordWithHash = await bcrypt.hash(password, 8)

    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
        return res.status(409).send("Usuário já cadastrado. Por favor, faça login!");
    }
    try {
        const user = await User.create({ 
            name, 
            email, 
            password: passwordWithHash 
        });
        return res.status(201).json([{
            "message": "Usuário criado com sucesso!",
            user
        }]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    const { name, email, password } = req.body;
    try {
        await User.update({ name, email, password },
            {
                where: { id }
            })
        res.status(200).send({ message: "Usuário atualizado com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const removeUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (user == undefined) {
        return res.status(404).json({ message: 'Usuário não encontrado!' })
    }

    try {
        await user.destroy()
        res.status(200).send({ message: "Usuário deletado com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createUser,
    getAll,
    updateUser,
    removeUser
}