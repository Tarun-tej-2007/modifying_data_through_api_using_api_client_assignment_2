const mongoose = require('mongoose');
const Schema = mongoose.Schama;

const MenuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        required : true
    },
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;