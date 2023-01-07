const path = require('path');
const express = require('express');
const app = express();

let publicFolder = path.resolve(__dirname, './public');

app.use(express.static(publicFolder));

app.listen(5500, () => {
    console.log('Initializing server');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})