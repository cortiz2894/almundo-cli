'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/almundo', (err, res) => {
    if(err){
        throw err;
    }else{
        app.listen(port, function(){
            console.log("conexion a MongoDB correcta");
            console.log(`API REST almundo funcionando en http://localhost:${port}`);
        });
    }

})

