const { User } = require('../db');
const CustomError = require('../errors/customError');

module.exports = {
    isEmailInUse: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });

            if (user) {
                throw new CustomError('Email already in use', 409);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserExists: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                next(new CustomError('User not found', 404));
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserByIdExists: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await User.findById(userId);

            if (!user) {
                next(new CustomError('User not found', 404));
            }

            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    }
};
