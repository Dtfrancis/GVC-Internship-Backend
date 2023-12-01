const {User} = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

class UserService {
    constructor(){}
    async getAllUsers(){
        try{
            const user = await User.find();
            return user;
        }catch(i){
            console.log('Error getting all Users ', i);
        }
    
    }
    async registerUser (username, password, role){
        new User({username, role}), password, (err) => {
            if (err){
                e = console.log("Something is wrong registering the User",err);
                return e;
            }else{
                passport.Authenticator('local');
                s = console.log("Success");
                return s;
            }
        }
        
    }
    
}module.exports = new UserService();