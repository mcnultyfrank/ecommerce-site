import express from 'express'
import dotenv from 'dotenv';
import products from './data/products.js'
const app = express();
dotenv.config()

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

const port = process.env.PORT;
const you = 'si fella'

app.listen(port, console.log(`hi ${you}, server running in ${process.env.NODE_ENV} mode on port ${port}`));


