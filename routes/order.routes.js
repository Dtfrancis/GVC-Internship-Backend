const express = require('express');
const router = express.Router();
const OrderList = require('../services/orders.service');

// @desc Gets all orders
// @access Private
// @route GET orders/
router.get(`/`, async (req, res)=>{
    try{
        const orderList = await OrderList.getAllOrders;
        if(!orderList){
            //return empty list       
            res.status(404).json({success: false});
        }
        res.send(orderList);
    }catch(i){
        console.log('Error getting orders');
    }
    
    })
router.post('/', async (req,res)=>{
    try{

    }catch(i){
        console.log('Error creating order');
    }
    const orderList = await OrderList.getAllOrders;
 
})