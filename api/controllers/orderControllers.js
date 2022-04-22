const _ = require('lodash');
const { Order, validate } = require('../models/order');

module.exports.createOrder = async (req, res) => {
   

    const order = new Order(req.body);
    const result = await order.save();
    return res.status(201).send({
        message: "order created successfully!",
        result
    })
}

module.exports.getAllOrders = async (req, res) => {



    const order = await Order.find();
     
    
    return res.status(200).send(order);

}