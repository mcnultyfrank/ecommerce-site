import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name:{
        type: String,
        reqiored: true,
    },
    rating:{
        type: Number,
        reqiored: true,
    },    
    comment:{
        type: String,
        reqiored: true,
    },
})

const ProductSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    countInStock:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },    
    isAdmin:{
        type: boolean,
        required: true,
        default: false
    },
},
    {
        timestamps: true,
    })

    const Product = mongoose.model('Product', ProductSchema)

    export default Product