const express = require('express');  //read up on Router();
const router = express.Router();
const cars = require('../models/cars');

// all routes follow /cars
router.get('/', (req, res) => {
    res.render('carIndex', {cars: cars})
})

router.get('/:car', (req, res) => {
    let car = req.params.car
    res.render('show', {
        cars: cars,
        car: car
    })
})

router.delete('/:car', (req, res) => {
    console.log('hitting the path')
    cars.splice(req.params.car, 1);
    res.redirect('/cars');
})

module.exports = router;
