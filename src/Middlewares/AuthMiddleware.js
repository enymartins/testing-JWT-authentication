const JWT = require('jsonwebtoken');
const config = require('../config/auth');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({
            code: 130,
            message: "Token de autenticação inválido!"
        })
    }
    //separar bearer do token em si
    const [, token] = auth.split(' ');

    try {
        const decoded = await promisify(JWT.verify)(token, config.secret);

        if (!decoded) {
            return res.status(401).json({
                message: "O token está expirado!"
            })
        } else {
            req.user_id = decoded.user_id;
            next()
        }
    } catch {
        return res.status(401).json({
            message: "Token inválido!"
        })
    }
}