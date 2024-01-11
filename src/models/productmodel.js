const mongoose=require('mongoose');

const productSChema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
    },
    quantity:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    ratings:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ratings',
    },
    reviews:{
        types:mongoose.Schema.types.ObjectId,
        ref:'reviews',
    },
    category:{
        type:mongoose.Schema.types.ObjectId,
        ref:'categories',
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },


});

const Product=mongoose.model('products',productSchema);

module.exports=Product;
