const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

let publicFolder = path.resolve(__dirname, './public');

app.use(express.static(publicFolder));

app.listen(port, () => {
    console.log(`Initializing server on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pages/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pages/login.html'));
})