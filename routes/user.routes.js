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



router.get('/', async (req, res)=>{
   const users = await userService.getAllUsers();    
    if(!users){
         res.status(400).send('No Users')
    }
    res.send(users);
   
})


   

    router.post('/register', async (req, res) => {
      try{
        const user  = await userService.registerUser(req.body);
       
           res.status(200).json({user});
               
        
        
      }catch(i){
        console.log('Error calling register method', i);
      }
      
      
  });
  


      
      router.post('/login', passport.authenticate('local', {
        
        successRedirect: `/dashboard`,
        failureRedirect: '/login',
      }), (req, res) => {
        req.logOut();
        res.redirect('/login');
      });


      router.get('/logout', async (req, res)=>{
        try{
          const user = await userService.loginUser(req, res);

        }catch(i){
          console.log('Error calling login method', i)
        }
       
      })
      
      
    module.exports = router;
