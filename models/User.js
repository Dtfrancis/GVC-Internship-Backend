const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
   

    username: String,
    password: String,
    role: String,
});
userSchema.plugin(passportLocalMongoose);
exports.User = mongoose.model('User', userSchema);

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);