const express = require('express')
const router = express.Router()
const product_controller = require('../controller/productcontroller')

router.get('/', product_controller.get_all_products)

router.post('/add',product_controller.add_product)

module.exports = router