const path = require('path');
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const port = process.env.PORT || 3000;
//Debemos requerir las rutas creadas en "routes"
let publicFolder = path.resolve(__dirname, '../public');

//Inicializamos el servidor en el puerto indicado
app.listen(port, () => {
    console.log(`Initializing server on port ${port}`);
})

//Seteamos ejs como motor de vistas dinámicas
app.set('view engine', 'ejs');
app.use(express.static(publicFolder));

/*
    Todas las rutas que inicien con "/productos" recibirán
    una respuesta del archivo .js que se encuentra en el
    módulo que requerimos con la ruta de la sección que
    necesitemos.
*/

app.use('/', mainRoutes);