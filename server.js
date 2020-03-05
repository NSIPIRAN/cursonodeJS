const express = require('express')
var app= express();
app.use('/', function(req, res){
    res.send('hola, este es un servidor serio');
})
app.listen(3000);
console.log('la aplicacion escucha en http://localhost:3000');