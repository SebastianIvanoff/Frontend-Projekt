const router = require("express").Router();

const ReservationModel = require("../Models/ReservationModel");

//Create
router.post('/', ReservationModel.createReservation)
//Read
router.get('/', ReservationModel.getReservations)
router.get('/:user_id', ReservationModel.getUserReservations)

//Update

//Delete

module.exports = router;
