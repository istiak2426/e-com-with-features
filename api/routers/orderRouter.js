const router = require('express').Router();
const {createOrder, getAllOrders} = require("../controllers/orderControllers");
const authorize = require('../middlewares/authorize');

router.route('/')
    .get( getAllOrders)
    .post(authorize, createOrder)

   
    

module.exports = router;