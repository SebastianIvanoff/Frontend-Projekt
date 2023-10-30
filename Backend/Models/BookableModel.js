const Bookable = require('../Schemas/BookableSchema')


exports.createNewBookable = (req, res) => {
    const {Name, Address, Img, Description, Price} = req.body

  
    if(!Name || !Address || !Description || !Price){

        res.status(400).json({
            message: 'You need to fill in all fields!'
        })
    }

    Bookable.create({Name, Address, Img, Description, Price})
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({
        message: 'Something went wrong when creating your product!'
    }))


}

exports.getBookables = (req, res) =>{
    Bookable.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when getting the bookable!'
        })
    })
}