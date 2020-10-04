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
    cars.splice(req.params.car, 1);
    res.redirect('/cars');
})

router.get('/:car/edit', (req, res) => {
    let carIndex = req.params.car
    res.render('edit', {
        car: cars[carIndex],
        carIndex: carIndex
    });
})

router.put('/:car', (req, res) => {
    console.log('working maybe?')
})

module.exports = router;
