const router = require('express').Router();

const { getAllUsers, getUserById } = require('../controllers/users.controller');
const { isUserByIdExists } = require('../middlewares/user.middleware');

router.get('/', getAllUsers);

router.get('/:userId', isUserByIdExists, getUserById);

module.exports = router;
