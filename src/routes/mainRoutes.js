const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.use('/', mainController.index);
router.use('/home', mainController.index);
router.use('/login', mainController.login);
router.use('/register', mainController.register);

module.exports = router;