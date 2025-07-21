const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log('started');
}).catch(e=>{

    console.log('error');
});

const movieSchema = new mongoose.Schema({
    title:String,
    Rating:String,
    year:Number,
    score:Number
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({title:"Amadeus", score:9.8, year:1990, Rating:'R'});

amadeus.save();
Movie.updateMany({title:'Amadeus'}, {year:1984, Rating:'PG-13'})
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])