const mongoose = require('mongoose')
const {Schema} = mongoose

const ReservationsSchema = new Schema({
    bookable: { type: mongoose.Schema.Types.ObjectId, ref: 'Bookable', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    totalPrice: {type: Number, required: true}
})

module.exports = mongoose.model("Reservation", ReservationsSchema);