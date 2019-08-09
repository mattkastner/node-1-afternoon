const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app = express()

app.listen(3005, (req, res) => {
    console.log(`Listening on port ${3005}`)
})

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)