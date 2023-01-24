const { Router } = require("express");
const mainController = require('../controllers/mainController');

const router = Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/products', mainController.products);

module.exports = router;