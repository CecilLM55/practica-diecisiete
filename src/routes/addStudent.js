//se inyecta la dependencia express.
let express = require('express');
// instalacion del router que se asociara a todas las rutas.
let router = express.Router();

//se declara la ruta junto con el render que se manda
router.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

//se exporta el router hacia el servidor
module.exports = router;