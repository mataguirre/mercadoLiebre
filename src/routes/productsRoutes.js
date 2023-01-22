const express = require('express');
const router = express.Router();
const path = require('path');

/* 
    En el primer parámetro defino una ruta dinámica con ":"
    delante del identificador, luego extraigo el valor del mismo
    en una variable y mando a al usaurio a la vista de la ruta
    del identificador especificado.
*/

router.get('/:productID', (req, res) => {
    let productos_id = req.params.productID;
    res.render(path.resolve(__dirname, '../views/pages/products'));
})

// router.get('/:productID/comentarios/:comentariosID?', (req, res) => {
//     let productos_id = req.params.productID;
//     let comentarios_id = req.params.comentariosID;
//     if(comentarios_id == undefined){
//         res.send('Producto n° ' + productos_id); 
//     } else {
//         res.send('Producto n° ' + productos_id + ', comentario n° ' + comentarios_id);
//     } 
// })

module.exports = router;