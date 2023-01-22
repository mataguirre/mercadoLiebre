const { Router } = require("express");
const mainController = require('../controllers/mainController');

const router = Router();

router.use('/', mainController.index);
router.use('/home', mainController.index);
router.use('/login', mainController.login);
router.use('/register', mainController.register);
router.use('/products', mainController.products);

module.exports = router;