const User = require("../Schemas/userSchema");
const bcryptsjs = require("bcryptjs");
const auth = require("../Authentication/auth");

exports.registerUser = async (req, res) => {
  const { userName, password, confirmPassword } = req.body;

  if (!userName || !password || !confirmPassword) {
    return res.status(400).json({
      message: "You need to enter all the fields",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  const salt = bcryptsjs.genSaltSync(10);

  bcryptsjs.hash(password, salt, (err, hash) => {
    if (err) {
      return res.status(500).json({
        message: "Failed when encrypting the password",
      });
    }

    User.create({
      passwordHash: hash,
      userName,
    }).then((user) => {
      res.status(201).json({
        token: auth.generateToken(user),
      });
    });
  });
};

exports.loginUser = (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      message: "You need to enter all the fields",
    });
  }

  User.findOne({ userName }).then((user) => {
    if (!user) {
      return res.status(401).json({
        message: "Incorrect credentials",
      });
    }

    bcryptsjs.compare(password, user.passwordHash, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong when decrypting the password",
        });
      }

      if (!result) {
        return res.status(401).json({
          message: "Incorrect credentials",
        });
      }

      // Include the userId in the response
      res.status(200).json({ token: auth.generateToken(user), userId: user._id });
    });
  });
};
