const router = require('express').Router();

const { login, register } = require('../controllers/auth.controller');
const { isEmailInUse, isUserExists, isEmailFormatCorrect } = require('../middlewares/user.middleware');

router.post('/register', isEmailInUse, isEmailFormatCorrect, register);

router.post('/login', isUserExists, login);

module.exports = router;
