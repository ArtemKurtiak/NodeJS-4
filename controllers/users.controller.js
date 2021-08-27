const { User } = require('../db');

module.exports = {

    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find({});

            res
                .status(200)
                .json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const { user } = req;

            res
                .status(200)
                .json(user);
        } catch (e) {
            next(e);
        }
    }
};
