

jest.mock('../models/Product');
//jest.mock('mongoose');


const { Product } = require('../models/Product');
const ProductService = require ('../services/products.service')



describe ('ProductService Tests', ()=>{
  
    test('Should get all products', async ()=>{
      //arrange
      const mockProducts = { name: 'Mocked Product' };

       // Mock the 'find' method of the Product model to return the mockProducts array        
      Product.find.mockResolvedValue(mockProducts);

      //act    
       

    //const result = ProductService.getAllProducts();
    const result = await ProductService.getAllProducts();
    console.log(result);
    //assert
    expect(result).toBe(mockProducts);
  });

  test('Should find a product by id', async () => {
    
    //arrange
    const id = 1;
    const mockProduct = {id: '1', name: 'Mocked Product'};

    Product.findById.mockResolvedValue(mockProduct);

    //act

    const result = await ProductService.findAProduct(id);

    //assert

    expect(result).toEqual(mockProduct);
  }); 

  test('Should update a product by Id ', async () => {
    //arrange
    const id = 1;
    const mockedProduct = {id: '1', name: 'product 1'}
    Product.findByIdAndUpdate.mockResolvedValue(mockedProduct);

    //act
      const actual = await ProductService.updateProduct( id, mockedProduct);
      
      

    //assert
    expect(actual).toEqual(mockedProduct);
 
  });

  test('should create a product', async () =>{
    //arrange
    const product = {name:'milo', countInStock: '2', descript: 'edible'}
    Product.create.mockResolvedValue(product);

    //act
    const actual = await ProductService.createProduct(product);

    //assert
    expect(actual).toEqual(product);
  })
  });