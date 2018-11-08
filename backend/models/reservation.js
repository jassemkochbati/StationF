const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    idRoom: String,
    beginDate: String,
    endDate: String
});

module.exports = mongoose.model('Reservation', reservationSchema);