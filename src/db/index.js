const mongoose = require('mongoose')

const connectToDB = () => {
    return mongoose.connect('mongodb://localhost:27017')
}

module.exports = connectToDB