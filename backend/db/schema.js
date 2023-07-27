const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:Number
});

module.exports = mongoose.model('users',productSchema);