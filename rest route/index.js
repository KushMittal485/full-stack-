const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodoverride = require('method-override');

app.use(methodoverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/comments', (req,res)=>{
    res.render('comments', {comments});
})

app.get('/comments/new', (req, res)=>{
    res.render('new');
})

app.post('/comments', (req,res)=>{
    const {username, newcomment:comment} = req.body;
    comments.push({username, comment, id:uuid()});
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const c = comments.find(c=>c.id===id);
    res.render('comment', {c});
})

app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c=>c.id!==id);
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req,res)=>{
    const {id} = req.params;
    const c = comments.find(c=>c.id===id);
    
    res.render('edit', {c});
})

app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const c = comments.find(c=>c.id===id);
    const newcomment = req.body.edit;
    c.comment = newcomment;
    res.redirect('/comments')
})

app.listen(3000, ()=>{
    console.log('we are listening');
})