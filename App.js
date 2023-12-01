const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




const productRouter = require('./routes/Product.routes');
const orderRouter = require('./routes/order.routes');
const catRouter = require('./routes/categories.routes');
const userRouter = require('./routes/user.routes');
const dashboardRouter = require('./routes/user.routes');


//TODO: Create models for api's
const Product = require('./models/Product');
const Order = require('./models/Order');
const Category = require('./models/Category');

const User = require('./models/User');

const authJwt = require('./helpers/jwt');
const errorhandler = require('./helpers/errorhandler');

require('dotenv/config');


api = process.env.API_URL;

mongoose.connect(process.env.CONNECTION_STRING )
.then((res)=> {
    console.log('Database is live')
})
.catch((err)=>{
    console.log(err);
});


app.use(cors());
app.options('*', cors())

//middleware code
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(session({
    secret: process.env.API_URL, // Change this to a strong secret
    resave: false,
    saveUninitialized: false
  })); 

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//app.use(authJwt); 
app.use(errorhandler);


app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, catRouter);
app.use(`${api}/users`, userRouter);
app.use(`/dashboard`, dashboardRouter);









app.listen(3000, ()=>{
    console.log('server is live');
})