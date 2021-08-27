const CustomError = require('../errors/customError');
const { User } = require('../db');

module.exports = {

    register: async (req, res, next) => {
        try {
            // if body don't have role, user schema has default value for role
            const { email, password, role } = req.body;

            await User.create({
                email,
                password,
                role
            });

            res
                .status(201)
                .json({
                    message: 'Success'
                });
        } catch (e) {
            return next(e);
        }
    },

    login: (req, res, next) => {
        try {
            const { password } = req.body;
            const { user } = req;

            if (user.password !== password) {
                throw new CustomError('Incorrect credentials', 400);
            }

            res
                .status(200)
                .json({ message: 'Success' });
        } catch (e) {
            return next(e);
        }
    }

};
