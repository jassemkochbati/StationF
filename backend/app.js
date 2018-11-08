const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Routes configuration
const reservationRoutes = require('./routes/reservations');
const roomRoutes = require('./routes/rooms');

//Database Connection
mongoose.connect("mongodb://root:root00@ds253203.mlab.com:53203/jassem").then(() => {
    console.log('Connected to the database !');
}).catch(() => {
    console.log('Error while connecting to the database ! Check your connection');
});

//Configuration of the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configuration of the CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/api/rooms', roomRoutes);
app.use('/api/reservations', reservationRoutes);

module.exports = app;