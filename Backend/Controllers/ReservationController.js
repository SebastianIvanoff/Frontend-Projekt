const router = require("express").Router();
const auth = require("../Authentication/auth");

const ReservationModel = require("../Models/ReservationModel");

//Create
router.post("/", ReservationModel.createReservation);
//Read
router.get("/", ReservationModel.getReservations);
router.get("/:userId", ReservationModel.getUserReservations);

//Update

//Delete

module.exports = router;
