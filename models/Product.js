const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    
    image: {
        type: String,
        default: ''
    },
    

    price:{
        type: Number,
        default: 0
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    countInStock:{
        type: String,
        required: true,
        min:0,
        max: 255       
    },

    rating: {
        type: Number,
        min:0,
        default: 0,
    },

    numReviews: {
        type: Number,
        min:0,
        default: 0,
    },

    isFeatured:{
        type: Boolean,
        default: false,
    },
    

})

exports.Product = mongoose.model('Product', productSchema);