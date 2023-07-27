const mongoose = require('mongoose');

const productSchema= mongoose.Schema({
    name:String,
    category:String,
    brand:String,
    price:String,
    Userid:String
});
module.exports=mongoose.model('products',productSchema);