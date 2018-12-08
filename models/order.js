var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    rating: {type: Number, default: 3},
    paymentId: {type: String, required: true},
    isDispatched: {type: Boolean, default: false},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('Order', schema);