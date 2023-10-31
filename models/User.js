const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
   
    
    email: String,
    passwordHash: String,
    name: String,
    age: Number,
    address: String
})
exports.User = mongoose.model('User', userSchema);