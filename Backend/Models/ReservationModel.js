const Reservation = require('../Schemas/ReservationSchema')


exports.createReservation = (req, res) => {
    const { bookable_id, user_id, startDate, endDate, totalPrice} = req.body

    if( !bookable_id || !user_id || !startDate || !endDate || !totalPrice )

    res.status(400).json({
        message: 'You need to fill in all fields!'
    })

    Reservation.create({ bookable_id, user_id, startDate, endDate, totalPrice })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({
        message: 'Something went wrong when creating your Reservation!'
    }))
}

exports.getReservations = (req, res) => {
    Reservation.find()
     .then((data) => {
        res.status(200).json(data)
     })
     .catch(() => {
        res.status(500).json({
            message: "Something went wrong when getting the Reservations!",
        })
     })
}