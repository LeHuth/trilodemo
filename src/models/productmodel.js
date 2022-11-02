const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    stock: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product