const {User} = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

class UserService {
    constructor(){}
    async getAllUsers(){
        try{
            const users = await User.find();
            return users;
        }catch(i){
            console.log('Error getting all Users ', i);
        }
    
    }

    async registerUser(newUserData){
        try{
/*
            const user = new DefaultUser({username: 'user'});
            await user.setPassword('password');
            await user.save();
            const { user } = await DefaultUser.authenticate()('user', 'password');

*/
            const newUser = new User({ username: newUserData.username });
            await newUser.setPassword(newUserData.password);
            await newUser.save()
            const {user} = await User.authenticate()(newUserData.username, newUserData.password )
        //     User.register(newUser, newUserData.password, async(err, user) => {
        //         if (err) {
        //             console.log('User registration error:', err);
        //             //reject(err);
        //         } else {
        //            // resolve(user);
        //             console.log('success', user);
        //         }
              
        //        passport.authenticate('local', { failureRedirect: '/login', failureMessage: true });
        //       return newUserData;
        //   });
        return user;
          }catch(i){
            console.log('User already exsits', i);
          }


    }

    async loginUser(req, res){
        req.logout();
        res.redirect('/login')
    }

    async getData  (a, b) {
            return a + b;
          
     }


    
    
}module.exports = new UserService();