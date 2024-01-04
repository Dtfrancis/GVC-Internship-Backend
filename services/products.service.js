const {Product} = require('../models/Product');
//const { Category } = require('../models/Category');

class ProductService {

    constructor(){}
    async getAllProducts(){
        try{
            const productList = await Product.find();
            console.log(productList);
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


   
   // @desc creates a productt
   // @access Private
   // @route POST products/

   
   async createProduct(productDTO){
    //TODO: validate productDTO Values
    /*name: newProduct.name,
        description: productDTO.description,
        image: productDTO.image,
        brand: productDTO.brand,
        price: productDTO.price,
        category: productDTO.category,
        countInStock: productDTO.countInStock,
        rating: productDTO.rating,
        numReviews: productDTO.numReviews,
        isFeatured: productDTO.isFeatured,
    */ 
    let newProduct = {}; 
    if (productDTO.descript){
        newProduct.descript = productDTO.descript;
    }

    if (productDTO.name){
        newProduct.name = productDTO.name;    

    } 
    
    if (productDTO.countInStock){
        newProduct.countInStock = productDTO.countInStock;
    }

   
    const product = await Product.create(newProduct);
   
    return product;
   } 
 

   async updateProduct(id, body ){
    try{
        const product = await Product.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true});
        return product;
    }catch(i){
        console.log("Error with function to update product ", i);
    }

   }

   async deleteProduct(id){
    try{
        const product = await Product.findByIdAndDelete(id);
        return product;
    }catch(i){
        console.log("Error with function to delete product ", i);
    }
}
 
   



}


module.exports = new ProductService();