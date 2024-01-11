const mongoose=require('mongoose');
const {Schema}=mongoose;

const orderSchema=new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    orderItems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    orderDate:{
        type:Date,
        required:true,
    },
    deliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'addresses'
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:string,
            default:"PENDING",
        },
        
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    TotalDiscountedPrice:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    orderStatus:{
        type:String,
        default:"PENDING",
    },
    totalItem:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:date,
        default:Date.now,
    },
});