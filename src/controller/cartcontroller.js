const Cart = require('../models/cartmodel')
const {response} = require("express");

//63625033b40b210401e1dccc
exports.create_cart = async (req, res) => {
    let query = Cart.create({_id: req.body.userId, ...req.body})
    res.send(query)
}

exports.add_product_to_cart = async (req, res) => {
    console.log(req.params.productId)
    Cart.findById(req.body.userId,(err, cart) => {
        if(cart){
            console.log(cart)
            let index = cart.products.findIndex(p => p.productId == req.params.productId)
            if(index > -1){
                cart.products[index].amount = cart.products[index].amount + req.body.amount
                cart.save()
                res.send('updated amount')
            } else {
                cart.products.push({productId: req.params.productId, amount: req.body.amount})
                cart.save()
                res.send('added p to cart')
            }
        } else {
            res.send('cart not found')
        }
    })


}

exports.remove_product_from_cart = async (req, res) => {
    Cart.findById(req.body.userId,(err, cart) => {
        if(cart){
            console.log(cart)
            let index = cart.products.findIndex(p => p.productId == req.params.productId)
            if(index > -1){
                cart.products.splice(index, 1)
                cart.save()
                res.send('removed p from cart')
            } else {
                res.send('p not in cart')
            }
        } else {
            res.send('cart not found')
        }
    })
}

exports.get_all_carts = async (req, res) => {
    let query = await Cart.find({})
    res.send(query)
}