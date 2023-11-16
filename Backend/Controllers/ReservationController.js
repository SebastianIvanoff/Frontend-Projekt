const router = require("express").Router();
const auth = require('../Authentication/auth')

const ReservationModel = require("../Models/ReservationModel");

//Create
router.post("/", auth.verifyToken, ReservationModel.createReservation);
//Read
router.get("/", ReservationModel.getReservations);
router.get("/:user_id", ReservationModel.getUserReservations);

//Update

//Delete

module.exports = router;
