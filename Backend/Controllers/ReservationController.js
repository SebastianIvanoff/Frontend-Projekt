const router = require("express").Router();

const ReservationModel = require("../Models/ReservationModel");

//Create
router.post('/', ReservationModel.createReservation)
//Read
router.get('/', ReservationModel.getReservations)
//Update

//Delete

module.exports = router;
