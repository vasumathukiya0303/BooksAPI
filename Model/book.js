const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    qty:{
        type:Number,
        required:true,
        minlength:1
    },
    authors:{
        type:Array
    },
    years:{
        birthyear:{
            type:Number
        },
        deathyear:{
            type:Number
        }
    }
    // name:String,
    // qty:Number
},{timestamps:true});

module.exports = mongoose.model("Book",schema);