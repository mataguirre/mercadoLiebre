const express = require('express');
const router = express.Router();
const productsRoutes = require('../routes/productsRoutes');
const mainRoutes = require('../routes/mainRoutes');
const loginRoutes = require('../routes/loginRoutes');
const registerRoutes = require('../routes/registerRoutes');

const mainController = {
    index: (req, res) => {
        return res.use('/', mainRoutes);
    },
    login: (req, res) => {
        return res.use('/login', loginRoutes);
    },
    register: (req, res) => {
        return res.use('/register', registerRoutes);
    },
    products: (req, res) => {
        return res.use('/products', productsRoutes);
    }
}

module.exports = mainController;