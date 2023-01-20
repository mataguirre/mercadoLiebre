const express = require('express');
const router = express.Router();

/* 
    En el primer parámetro defino una ruta dinámica con ":"
    delante del identificador, luego extraigo el valor del mismo
    en una variable y mando a al usaurio a la vista de la ruta
    del identificador especificado.
*/

router.get('/:productID', (req, res) => {
    let productos_id = req.params.productID;
    res.send('Detalle de producto n° ' + productos_id);
})

router.get('/:productID/comentarios/:comentariosID?', (req, res) => {
    let productos_id = req.params.productID;
    let comentarios_id = req.params.comentariosID;
    res.send('Producto n° ' + productos_id + ' comentario n° ' + comentarios_id);
})

module.exports = router;