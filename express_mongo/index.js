const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/grocerylist');

const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/products',async (req, res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('index',{products, category});
    }else{
        const products = await Product.find({});
        res.render('index',{products, category:'All'});
    }
})

app.get('/products/new', (req, res)=>{
    res.render('new');
})

app.get('/products/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('edit', {product});
})

app.patch('/products/:id', async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body);
    res.redirect('/products');
})

app.get('/products/:id', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product', {product});
})

app.delete('/products/:id', async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.post('/products', async (req, res)=>{
    await Product.insertOne(req.body);
    res.redirect('/products')
})

app.listen(3000, ()=>{
    console.log('listening')
})
