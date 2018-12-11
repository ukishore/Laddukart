var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    ingredients: {type: String, required: true},
    howTo: {type: String, required: true},
    rating: {type: Number, default: 3},
    rateCount: {type: Number, default: 0}
});

module.exports = mongoose.model('Product', schema);