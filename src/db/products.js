//model/products.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var ProductsSchema = new Schema({
    id: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    tags: { type: String, required: true }
});

//export our module to use in server.js
module.exports = mongoose.model('Product', ProductsSchema);