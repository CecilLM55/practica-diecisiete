let express = require('express');

let app = express();

let personsRoute = require('./routes/person');
//let addStudentRoute = require('./routes/addStudent');
//let studentRoute = require('./routes/student');


app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(personsRoute);
//app.use(addStudentRoute);
//app.use(studentRoute);

app.use('/assets', express.static(__dirname + '/../public'));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});