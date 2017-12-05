var mongoose = require('mongoose');
var schema = mongoose.Schema();

var productModel = new Schema({
    type:{
        type: String
    }
})

module.exports = mongoose.model('Product',productModel);