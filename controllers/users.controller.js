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

    createUser: async (req, res, next) => {
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

    getUserById: (req, res, next) => {
        try {
            const { user } = req;

            res
                .status(200)
                .json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await User.findByIdAndDelete(userId);

            res
                .status(200)
                .json({ message: 'Deleted' });
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const { ...userData } = req.body;

            await User.findByIdAndUpdate(userId, userData);

            res
                .status(200)
                .json({ message: 'Updated' });
        } catch (e) {
            next(e);
        }
    }
};
