const express = require('express');

//Importing the Reservation model
const Reservation = require('../models/reservation');

const router = express.Router();

//Insert the new reservation in the database
router.post('/create', (req, res, next) => {
    const reservation = new Reservation({
        idRoom: req.body.idRoom,
        beginDate: req.body.beginDate,
        endDate: req.body.endDate
    });
    reservation.save().then(newReservation => {
        res.status(201).json({
            message: 'Room Reserved Successfully',
            reservationId: newReservation._id
        });
    });
});

//Get the reservations in the database
router.get('/list', (req, res, next) => {
    Reservation.find().then(reservations => {
        res.status(200).json({
            message: 'Reservation fetched Successfully',
            reservations: reservations
        });
    });
});

module.exports = router;