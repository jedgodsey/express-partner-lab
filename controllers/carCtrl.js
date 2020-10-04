const express = require('express');  //read up on Router();
const router = express.Router();
const cars = require('../models/cars');

// all routes follow /cars

// index of cars
router.get('/', (req, res) => {
    res.render('carIndex', {cars: cars})
})

// show selected car
router.get('/:car', (req, res) => {
    let car = req.params.car
    res.render('show', {
        cars: cars,
        car: car
    })
})

// delete car
router.delete('/:car', (req, res) => {
    cars.splice(req.params.car, 1);
    res.redirect('/cars');
})

// edit car
router.get('/:car/edit', (req, res) => {
    let carIndex = req.params.car
    res.render('edit', {
        car: cars[carIndex],
        carIndex: carIndex
    });
})

router.put('/:car', (req, res) => {
    let car = req.params.car;
    console.log('fruit style ' + JSON.stringify(req.body));
    let newCar = {
        make: cars[car].make,
        model: cars[car].model,
        doors: cars[car].doors,
        AWD: cars[car].AWD
    }
    cars.splice(car, 1, newCar);
    res.redirect(`${car}`);
})

// router.put('/:car', (req, res) => {
//     let car = req.params.car;
//     console.log(req.body.name)
//     const newCar = {
//       make: req.body.make,
//       model: req.body.model,
//       doors: req.body.doors,
//       AWD: req.body.AWD === 'on'
//     }
//     cars.splice(car, 1, newCar);
//     res.redirect(`/cars/${car}`)
//   })



module.exports = router;
