const Product = require('../models/productmodel')

exports.add_product = async (req, res) => {
    console.log(req.body)
    let query = await Product.create(req.body)
    res.send(query)
}

exports.get_all_products = async (req, res) => {
    let query = await Product.find({})
    res.send(query)

}

