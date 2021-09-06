const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authRepository = require('../database/repositories/authRepository');
const User = require('../models/user');

module.exports = {
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;
            const encryptedPassword = encryptPassword(password);

            const user = await authRepository.authenticate(email, encryptedPassword);

            if (user !== null) {
                const token = jwt.sign(user, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                return res.status(200).json({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    type: user.type,
                    createdAt: user.createdAt,
                    token: token
                });
            }

            return res.status(401).send('Login inválido!');
        } catch (e) {
            return res.status(500).send(`Erro no processamento: ${e.message}`);
        }
    },

    async createUser(req, res) {
        try {
            const user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = encryptPassword(req.body.password);
            user.phone = req.body.phone;
            user.type = req.body.type;
            user.createdAt = req.body.createdAt;

            const inserted = await authRepository.createUser(user);

            if (inserted) 
                return res.status(201).json(inserted);
            else 
                return res.status(400).json(inserted);
        } catch (e) {
            return res.status(500).send(`Erro no processamento: ${e.message}`);
        }
    }
}

function encryptPassword(password) {
    return crypto
        .createHash('sha256')
        .update(password)
        .digest('hex');
}