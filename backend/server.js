import express from 'express'
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import products from './data/products.js'
const app = express();
dotenv.config() 

connectDB();

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

app.listen(port, console.log(`hi, server running in ${process.env.NODE_ENV} mode on port ${port}`));


