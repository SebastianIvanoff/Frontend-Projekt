const Reservation = require("../Schemas/ReservationSchema");

exports.createReservation = (req, res) => {
  const { bookable, user, startDate, endDate, totalPrice, bookableDetails } = req.body;

  if (!bookable || !user || !startDate || !endDate || !totalPrice || !bookableDetails) {
    return res.status(400).json({
      message: "You need to fill in all fields!",
    });
  }

  Reservation.create({ bookable, user, startDate, endDate, totalPrice, bookableDetails })
  .then((data) => {
    const responseData = {
      message: "Reservation created successfully",
      reservation: data
    };
    res.status(201).json(responseData);
  })
  .catch(() =>
    res.status(500).json({
      message: "Something went wrong when creating your Reservation!",
    })
  );

};

exports.getReservations = (req, res) => {
  Reservation.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({
        message: "Something went wrong when getting the Reservations!",
      });
    });
};

exports.getUserReservations = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      message: "User ID is required in the URL parameters.",
    });
  }

  Reservation.find({ user: userId })
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({
          message: "No reservations found for the specified user id",
        });
      }

      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Something went wrong when getting the user's reservations.",
      });
    });
};
