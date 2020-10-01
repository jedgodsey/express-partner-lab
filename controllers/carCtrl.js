const express = require('express');  //read up on Router();
const router = express.Router();
const cars = require('../models/cars');

router.get('/', (req, res) => {
    res.render('carIndex', {cars: cars})
})

router.get('/:index', (req, res) => {
    let car = req.params.index;
    res.render('show', {
        cars: cars,
        car: car
    })
})
router.get

module.exports = router;
