const express = require('express')


const App = express()
App.use(express.json())
const productRouter = require('./routes/productroutes')
const userRouter = require('./routes/userroutes')
const cartRouter = require('./routes/cartroutes')

const connectToDB = require('./db/index')
App.use('/product', productRouter)
App.use('/user', userRouter)
App.use('/cart', cartRouter)

connectToDB().then(()=> {
    App.listen(3000,() => {
        console.log('hello world')
    })
}).catch(e => {
    console.log(e)
})

