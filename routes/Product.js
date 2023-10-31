const express = require('express');
const router = express.Router();
const {Product} = require('../models/Product');
const { Category } = require('../models/Category');



router.get(`/`, async (req, res)=>{
    const productList = await Product.find().select('name');
    if(!productList){
        //return empty list       
        res.status(404).json({success: false})
    }
    res.send(productList);
})

router.get(`/:id`, async (req, res)=>{
    const product = await Product.findById(req.params.id).populate('category');
    if(!product){
        //return empty list       
        res.status(404).json({success: false})
    }
    res.send(product);
})

router.post(`/`, async(req, res)=>{
    
   const category = await Category.findById(req.body.category);
   if(!category) return res.status(400).send('Invalid category')
    let product = new Product({
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
})
module.exports = router;