const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var app= express();


app.use( bodyParser.json());
app.use( bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req,res){
    
    console.log(req.headers)
    //mandar header como respuesta, ver en insomnia en header
    //en custom-header
    res.header({
        "custom-header":"Nuestro valor personalizado"
    })
    res.send('Lista de mensajes');
})

router.post('/message', function(req,res){
    res.send('mensajes enviado');
})
router.delete('/message', function(req,res){
    console.log(req.body);
    console.log(req.query);
    /*res.send(); //respuesta vacia
    res.status(201).send(); //respuesta plana 
    //respuesta estructurada*/
    res.status(201).send(
        {error:'', body:'creado correctamente'});
    
})
/*app.use('/', function(req, res){
    res.send('hola, este es un servidor serio');
})*/
app.listen(3000);
console.log('la aplicacion escucha en http://localhost:3000');