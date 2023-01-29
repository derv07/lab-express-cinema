const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log(movies);
            res.render('movies', { movies })
        })
        .catch((error) => next(error))
})

router.get('/movie/:id', (req, res, next) => {
    Movie.find({_id: req.params.id})
    .then((movie) => {
        console.log(movie[0]);
        res.render('movie', { movie: movie[0] })
    })
})


module.exports = router;