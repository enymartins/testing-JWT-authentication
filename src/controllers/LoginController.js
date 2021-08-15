const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const index = async (req, res) => {
    const { email, password } = req.body
    try {
    const userExists = await User.findOne({ where: { email } })

    if(!userExists) {
        return res.status(400).json({ message: "Usuário não existe!" })
    }

    if(!(await bcrypt.compare(password, userExists.password))){
        return res.status(400).json({ message: "Senha inválida!" })
    }
    
        return res.status(200).json({ 
            user: {
                name: userExists.name, 
                email: userExists.email
            },
            token: JWT.sign(
                { id: userExists.id }, 
                process.env.SECRET,
                { expiresIn: "2h" }
                )
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    index
}