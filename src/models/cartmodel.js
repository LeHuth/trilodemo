const mongoose = require('mongoose')
const {Schema} = mongoose

const cartSchema = new Schema({
    status: Boolean,
    products: [
        {
            productId: String,
            amount: Number,
        }
    ],
},
    {timestamps: true})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart