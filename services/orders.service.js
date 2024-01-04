const {Order} = require('../models/Order');

class OrderService{
    constructor(){}

    async getAllOrders (){
        try{
            const order = await Order.find()
            return order;
            
        }catch(i){
            console.log('Error in function, cannot get orders')
        }
       
    }

    async findAOrder (){

    }

    async createOrder (){

    }

    async updateOrder(){

    }

    async deleteOrder(){
        
    }
    
}
module.exports = new OrderService();