const router = require('express').Router();

const {
    getAllUsers, getUserById, deleteUser, updateUser, createUser
} = require('../controllers/users.controller');
const {
    isUserByIdExists, isEmailFormatCorrect, isEmailInUse, isFullDataInUserRequest
} = require('../middlewares/user.middleware');

router.get('/', getAllUsers);

router.post('/', isFullDataInUserRequest, isEmailFormatCorrect, isEmailInUse, createUser);

router.get('/:userId', isUserByIdExists, getUserById);

router.delete('/:userId', isUserByIdExists, deleteUser);

router.patch('/:userId', isUserByIdExists, isEmailFormatCorrect, updateUser);

module.exports = router;
