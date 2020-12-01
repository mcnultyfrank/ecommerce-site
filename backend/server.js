const express = require('express');
const app = express()
const products = require('./data/products');

app.get('/', (req, res) => {
    res.send('API is running...')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:_id', (req, res) => {
    const product = products.find((item) => item._id === req.params._id);
    res.json(product)
})
app.listen(8080, console.log('server running on 8080'));


