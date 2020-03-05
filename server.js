const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response')

const router = express.Router();
var app= express();


app.use( bodyParser.json());
app.use( bodyParser.urlencoded({extended: false}));
app.use(router);
app.use('/app',express.static('public'));

router.get('/message', function(req,res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro valor personalizado"
    })
    response.success(req, res,'Lista de mensajes');
})

router.post('/message', function(req,res){
   
    if(req.query.error=="ok"){
        response.error(req,res,"error de creacion",401)
    }
    else{
        response.success(req, res,'Creado correctamente',201);
    }
})

router.delete('/message', function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.status(201).send(
        {error:'', body:'creado correctamente'});
    
})
app.listen(3000);
console.log('la aplicacion escucha en http://localhost:3000');