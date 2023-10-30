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
            message: 'Something went wrong when getting the Listings!'
        })
    })
}

exports.getOneBookable =(req, res) =>{
    Bookable.findById(req.params.id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wron when getting this listing!'
        })
    })
}

exports.updateBookable = (req, res) => {
    Bookable.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => {
        if(!data) {
            res.status(404).json({
                message: 'Could not find that product!'
            })
            return
        }
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when updating the product!'
        })
    })
}

exports.deleteBookable =(req, res) => {
    Bookable.findByIdAndDelete(req.params.id)
    .then(data => {
        if(!data) {
            res.status(404).json({
                message: 'could not find that product!'
            })
            return

        }
        res.status(200).json({id: data._id})
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when deleting the product'
        })
    })
}