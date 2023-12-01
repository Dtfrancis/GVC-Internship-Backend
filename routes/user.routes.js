const express = require('express');
const router = express.Router();
const session = require('express-session');
const checkRole = require('../middleware/checkRole');
const userService = require('../services/users.service');
//const {User} = require('../models/User');
const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const rbacMiddleware = require('../middleware/rbacMiddleware');
const tasksController = require('../controllers/tasksController');
const usersService = require('../services/users.service');
api = process.env.API_URL;

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get('/', async (req, res)=>{
   const user = await userService.getAllUsers();    
    if(!user){
         res.status(400).send('No Users')
    }
    res.send(user);
   
})

router.post('/', async(req, res)=>{
    //TODO: check if user already exists 
   //const user = await User.findById(req.body.user);
   let user = null;
   try
   {
    if( req.body.email && req.body.password && req.body.name){

        user = new User({
           email: req.body.email,
           passwordHash: bcrypt.hashSync(req.body.password, 10),
           name: req.body.name,
           age: req.body.age,
           address: req.body.address,
       })
   
       
       user = await user.save();
    }


    if(!user){
        return res.status(500).send('The user cannot be created');
    }
    res.send(user);
   }catch(err)
   {
    console.log('Error creating user: ' + err);
   }
    
    })
   

    router.post('/register', async (req, res) => {

        const { username, password, role } = req.body;
        User.register(new User({username, role}), password, (err) => {
          if (err){
              e = console.log("Something is wrong registering the User",err);
              return e;
          }else{
              passport.Authenticator('local');
              console.log("Success");
              
          }
      })
        //const userService = await usersService.registerUser(username, password, role);
        //return userService;
      });


      
      router.post('/login', passport.authenticate('local', {
        successRedirect: `/dashboard`,
        failureRedirect: '/login',
      }));

      
      
    module.exports = router;
