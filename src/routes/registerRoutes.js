const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render(path.resolve(__dirname, '../views/pages/register'));
})

router.get('/home', (req, res) => {
    res.render(path.resolve(__dirname, '../views/pages/register'));
})

module.exports = router;