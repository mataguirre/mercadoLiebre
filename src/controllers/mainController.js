const express = require('express');
const path = require('path');

const mainController = {
    index: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/index'));
    },
    login: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/pages/login'));
    },
    register: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/pages/register'));
    },
    products: (req, res) => {
        return res.render(path.resolve(__dirname, '../views/pages/products'));
    }
}

module.exports = mainController;