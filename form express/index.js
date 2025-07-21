const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/taco', (req,res)=>{
    res.send("we getting get request yall");
})

app.post('/taco', (req,res)=>{
    const {typeoftacos, quantity} = req.body;
    console.log({typeoftacos})
    res.send(`we getting post request yall ${typeoftacos}`);
})

app.listen(3000, ()=>{
    console.log('port 3000');
})