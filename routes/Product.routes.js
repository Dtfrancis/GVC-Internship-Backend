const productService = require ('../services/products.service')
const express = require('express');
const router = express.Router();

const {Product} = require('../models/Product');
const { Category } = require('../models/Category');




router.get(`/`, async (req, res)=>{
const productList = await productService.getAllProducts();
    if(!productList){
        //return empty list       
        res.status(404).json({success: false})
    }
    res.send(productList);
})

router.get(`/:id`, async (req, res)=>{
    //assigns the constant id to pass to the product service
    const id = req.params.id;
    //create the constant product that calls the service functions
    const product = await productService.findAProduct(id)
    if(!product){
        //return empty list       
        res.status(404).json({success: false})
    }
    res.send(product);
})

router.post(`/`, async(req, res)=>{
    let category = null;
    try{

        const category = await Category.findById(req.body.category);
        if(!category) return res.status(400).send('Invalid category')
          product = new Product({
             name: req.body.name,
             description: req.body.description,
             image: req.body.image,
             brand: req.body.brand,
             price: req.body.price,
             category: req.body.category,
             countInStock: req.body.countInStock,
             rating: req.body.rating,
             numReviews: req.body.numReviews,
             isFeatured: req.body.isFeatured,
         })
     
         product = await product.save();
     
         if (!product)
         return res.status(500).send('The product cannot be created');
         res.send(product);
    }catch(err)
    {
        console.log('Error creating product: ', err);
    }
})
module.exports = router;