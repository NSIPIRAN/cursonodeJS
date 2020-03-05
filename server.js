const express = require('express')
const router = express.Router();
var app= express();

app.use(router);

router.get('/message', function(req,res){
    res.send('Lista de mensajes');
})

router.post('/message', function(req,res){
    res.send('mensajes enviado');
})
router.delete('/message', function(req,res){
    res.send('mensaje eliminado');
})
/*app.use('/', function(req, res){
    res.send('hola, este es un servidor serio');
})*/
app.listen(3000);
console.log('la aplicacion escucha en http://localhost:3000');