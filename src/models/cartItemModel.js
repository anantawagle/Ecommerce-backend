const mongoose=require('mongoose');

const cartItemSchema=new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.Objectid,
        ref:"cart",
        required:true,
    }
})