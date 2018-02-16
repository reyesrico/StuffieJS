//model/users.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var UsersSchema = new Schema({
    mail: { type: String, required: true, index: { unique: true } },
    pass: { type: String, required: true },
    name: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

//export our module to use in server.js
module.exports = mongoose.model('User', UsersSchema);