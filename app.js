const path = require('path');
const express = require('express');
const app = express();

let indexPath = path.resolve(__dirname, './views/index.html');
let staticPath = path.resolve(__dirname, './public');

app.use(express.static(staticPath));

app.listen(3000, () => {
    console.log('Server running...');
})

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.get('/home', (req, res) => {
    res.sendFile(indexPath);
})
