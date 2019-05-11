'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = Schema({
    id: Number,
    name: String,
    stars: Number,
    price: String,
    image: String
})

module.exports = mongoose.model('Hotel', HotelSchema);