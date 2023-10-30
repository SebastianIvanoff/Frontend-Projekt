const router =require('express').Router()

const BookableModel = require('../Models/BookableModel')

//Create
router.post('/', BookableModel.createNewBookable)
//Read
router.get('/', BookableModel.getBookables)

//Update

//Delete

module.exports = router;