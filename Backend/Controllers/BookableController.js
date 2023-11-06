const router = require("express").Router();

const BookableModel = require("../Models/BookableModel");

//Create
router.post("/", BookableModel.createNewBookable);
//Read
router.get("/", BookableModel.getBookables);

router.get("/:id", BookableModel.getOneBookable);
//Update
router.put("/:id", BookableModel.updateBookable);
//Delete
router.delete("/:id", BookableModel.deleteBookable);

module.exports = router;
