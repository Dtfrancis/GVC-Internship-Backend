const {Product} = require('../models/Product');
//const { Category } = require('../models/Category');

class ProductService {

    constructor(){}
    async getAllProducts(){
        try{
            const productList = await Product.find();
            return productList;
        }catch(e){
            console.log("Error getting products: ", e)
        }
    }

   async findAProduct (id){
    try{
        const product = await Product.findById(id);
        return product;

    }catch (i){
        console.log("Error Finding Product by Id ", i)
    }    
   }

   async createProduct(){

   }

   



}


module.exports = new ProductService();