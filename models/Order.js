const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    id: {
        type:String,
        required: true
        },
    name: String,
    description: String,
    image: String
})
exports.Order = mongoose.model('Order', orderSchema);