'use strict'
var Hotel = require('../models/hotel');


function getHotel(req, res){
    var hotelId = req.params.id;

    res.status(200).send({data: hotelId});
}

function saveHotel(req, res){
    var hotel = new Hotel()

    var params = req.body;
    hotel.id = params.id;
    hotel.name = params.name;
    hotel.stars = params.stars;
    hotel.price = params.price;
    hotel.image = params.image;

    hotel.save((err, hotelStored) => {
        if(err){
            res.status(500).send({message: "Error al guardar"});
        }else{
            res.status(500).send({hotel: hotelStored});
        }
    });
}

function getHoteles(req, res){
    Hotel.find({}).sort('-name').exec((err, hoteles) => {
        if(err){
            res.status(500).send({message: 'Error al devolver los hoteles'});
        }else{
            if(!hoteles){
                res.status(404).send({message: 'No hay hoteles'});
            }
    
            res.status(200).send({hoteles});
        }

    });
}



function updateHotel(req, res){
}

function deleteHotel(req, res){
}

module.exports = {
    getHoteles,
    getHotel,
    deleteHotel,
    updateHotel,
    saveHotel
}