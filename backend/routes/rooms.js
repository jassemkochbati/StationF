const express = require("express");
//Importing the Room model
const Room = require("../models/room");

const router = express.Router();

//Getting all the rooms from the database
router.get("", (req, res, next) => {
  Room.find().then(documents => {
    res.status(200).json({
      message: "Rooms fetched Succcessfully !",
      rooms: documents
    });
  });
});
//Getting a room by Id
router.get("/:id", (req, res, next) => {
  Room.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: "Room Not Found !"
      });
    }
  });
});

module.exports = router;
