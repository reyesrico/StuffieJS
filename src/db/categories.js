//model/categories.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var CategoriesSchema = new Schema({
    id: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true },
    description: { type: String, required: true }
});

//export our module to use in server.js
module.exports = mongoose.model('Category', CategoriesSchema);