const express = require('express')
const router = express.Router()
const cart_controller = require('../controller/cartcontroller')

router.get('/', cart_controller.get_all_carts)
router.post('/create', cart_controller.create_cart)
router.put('/remove/:productId', cart_controller.remove_product_from_cart)
router.put('/add/:productId', cart_controller.add_product_to_cart)

module.exports = router