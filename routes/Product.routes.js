const productService = require ('../services/products.service')
const express = require('express');
const router = express.Router();

const {Product} = require('../models/Product');
const { Category } = require('../models/Category');



// @desc Gets all product
// @access Public
// @route GET products/
router.get(`/`, async (req, res)=>{
const productList = await productService.getAllProducts();
    if(!productList){
        //return empty list       
        res.status(404).json({success: false})
    }
    res.send(productList);
})

// @desc Gets a product by id
// @access Public
// @route GET products/
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
// @desc creates a product
// @access Private
// @route POST products/
router.post(`/`, async(req, res)=>{
    //let category = null;
    try{
        //const category = await Category.findById(req.body.category);
        const product = productService.createProduct(req.body);
     
         if (!product){
            return res.status(500).send('The product cannot be created');
         }
         res.status(200).json({success: true});
         console.log(product ,'is saved') ;
    }catch(err)
    {
        res.status(400).json({success: false});
        console.log('Error creating product: ', err);
    }
})

// @desc updates a product
// @access Private
// @route PUT products/
router.put(`/update/:id`, async (req, res) =>{
    try{
        //const id = req.params.id; 
        const product = await productService.updateProduct(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!product){
            res.status(400).json("product could not be updated");
        }
        res.status(200).json({message:"product updated", data: product});
        return product;

    }catch(i){
        console.log("Error updating the product", i);
    }

    
})

// @desc delete a product
// @access Private
// @route DELETE products/
router.delete(`/delete/:id`, async (req, res)=>{
    try{
        const product = await productService.deleteProduct(req.params.id);
        if(product != null){
            res.status(400).json("product could not be deleted");
        }
        res.status(200).json("product deleted");
        return product;

    }catch(i){
        console.log('Product cannot be deleted');
    }
})
module.exports = router;