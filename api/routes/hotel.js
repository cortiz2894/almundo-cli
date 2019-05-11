'use strict'

var express = require('express');
var HotelController = require('../controllers/hotel');
var api = express.Router();

api.get('/hoteles/', HotelController.getHoteles);
api.post('/hoteles-save/', HotelController.saveHotel);
api.get('/hotel/:id', HotelController.getHotel);

module.exports = api;