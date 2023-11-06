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

exports.getUserReservations = (req, res) => {
    const {user_id} = req.params

    if(!user_id){
        return res.status(400).json({
            message: 'User ID is required in the URL parameters.'
        })
    }

    Reservation.find({ user_id: user_id})
    .then((data) => {
        if(data.length === 0){
            return res.status(404).json({
                message: 'No reservations found for the specified user'
            })
        }

        res.status(200).json(data)
    })
    .catch((error) => {
        console.error(error)
        res.status(500).json({
            message: 'Something went wrong when getting the user\'s reservations.'
        })
    })
}