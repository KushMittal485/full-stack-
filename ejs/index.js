const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/cats', (req, res)=>{
    const cats = ['a', 'b', 'c','d']
    res.render('cats', {cats});
})

app.get('/r/:sub', (req, res)=>{
    const {sub} = req.params;
    subdata = data[sub];
    res.render('subreddit', {subdata})
})
app.get('/rand', (req, res)=>{
    const num =Math.floor( Math.random()*10)+1;
    res.render('rand', {num})
})

app.listen(3000, ()=>{
    console.log('listening on 3000');
})