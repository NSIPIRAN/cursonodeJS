const express= require('express');
const response = require('../../network/response');
const controller= require('./controller');
const router = express.Router();


router.get('/', function(req,res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro valor personalizado"
    });
    response.success(req, res,'Lista de mensajes');
});

router.post('/', function(req,res){
    controller.addMessage(req.body.user,req.body.message)
        .then(()=>{
            response.success(req, res,'Creado correctamente',201);
        })
        .catch(e=>{
            response.error(req,res,"informacion invalida",400, 'error de prueba para log')
        })
    
});

router.delete('/', function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.status(201).send(
        {error:'', body:'creado correctamente'});
    
});

module.exports=router;

