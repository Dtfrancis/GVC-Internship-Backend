const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');




const productRouter = require('./routes/Product');
const orderRouter = require('./routes/order');
const catRouter = require('./routes/categories');
const userRouter = require('./routes/user');


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
//app.use(authJwt); 
app.use(errorhandler);


app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, catRouter);
app.use(`${api}/users`, userRouter);







app.listen(3000, ()=>{
    console.log('server is live');
})