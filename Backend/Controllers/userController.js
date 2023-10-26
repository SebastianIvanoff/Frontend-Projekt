const router = require("express").Router();
const userModel = require("../Models/userModel");
const auth = require("../Authentication/auth");

router.post("/register", userModel.registerUser); //POST - Register a new user & recieve a token- /api/users/register
router.post("/login", userModel.loginUser);

module.exports = router;
/*example of a user register or login
{
    "userName": "sebbe123",
    "password": "123"
}
 */
