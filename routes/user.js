const express = require('express');
const router = express.Router();
const {User} = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');


router.get('/',  async (req, res)=>{
    const user = await User.find();
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




    router.post('/login', async(req, res)=>{
        let user = null;
        try
        {
            user = await User.findOne({email: req.body.email})
           
           if(!user){
               return res.status(500).send('The user cannot be found');
           }
           
           if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
         
               const token = jwt.sign(
                   {
                       //roles: user.roles,
                       userId: user.id,
                   },
                   process.env.secret,
                   {
                       expiresIn: '1h' 
                   }
               )
               return res.status(200).json({user: user.email, token: token });
           }else{
               return res.status(401).send('Password is incorrect');
           }

        }catch (err)
        {
            console.log('Error signing in: ', err);
            return res.status(500).send('Error signing in user: '+ err);
        }
    })
    module.exports = router;
