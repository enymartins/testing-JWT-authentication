const JWT = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = 
        req.body.token || req.query.token || req.headers["x-access-token"];

        if(!token) {
            return res.status(403).send("Um token é necessário para realizar a autenticação!");
        }

        try {
            const decoded = JWT.verify(token, config.SECRET);
            if (!decoded) {
                return res.status(401).json({
                message: "O token está expirado!"
                    })
               } else {
            req.user = decoded;
               }
        } catch (err) {
            return res.status(401).send("Token Inválido!");
        }
        return next();
}

    module.exports = verifyToken;