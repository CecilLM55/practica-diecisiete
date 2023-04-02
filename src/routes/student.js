//se inyecta la dependencia express.
let express = require('express');
// instalacion del router que se asociara a todas las rutas.
let router = express.Router();

//ruta para visualizar el formulario de student.ejs
router.get('/student', (req, res)=> {
    res.render('student');
});

module.exports = router;