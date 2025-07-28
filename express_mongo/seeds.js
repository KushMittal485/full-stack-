const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/grocerylist')
.then(res=>{console.log(res)})
.catch(e=>{console.log(e)});

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        cost: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        cost: 50,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        cost: 35,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        cost: 69,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        cost: 420,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
// Product.insertOne(
//     {
//         name:'grapes',
//         cost: 100,
//         category: 'fruit'
//     }
// )

