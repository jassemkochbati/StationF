const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: String,
    description: String,
    capacity: Number,
    equipements: {
        name: String
    },
    createdAt: String,
    updateAt: String
});

module.exports = mongoose.model('Room', roomSchema);
