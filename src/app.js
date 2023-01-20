const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
//Debemos requerir las rutas creadas en "routes"
const productsRoutes = require('./routes/productsRoutes');
const mainRoutes = require('./routes/mainRoutes');
let publicFolder = path.resolve(__dirname, '../public');

app.use(express.static(publicFolder));

/*
    Todas las rutas que inicien con "/productos" recibirán
    una respuesta del archivo .js que se encuentra en el
    módulo que requerimos con la ruta de la sección que
    necesitemos.
*/

app.use('/productos', productsRoutes);
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Initializing server on port ${port}`);
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pages/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pages/login.html'));
})