const User = require("../models/User");
const passport = require("passport");

exports.findAll = function(req, res) {
  console.log("usersController.findAll");
};

// register a user
exports.signUpUser = function(req, res) {
  console.log("signUpUser");
  User.findOne({ username: req.body.username }, function(err, user) {
    // check to see if theres already a user with that email
    if (user) {
      res.send({ duplicateUser: true });
    } else {
      // if there is no user with that email
      // create the user
      console.log("new user", req.body);
      const newUser = new User();

      // set the user's local credentials
      newUser.first_name = req.body.first_name;
      newUser.last_name = req.body.last_name;
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = newUser.generateHash(req.body.password);
      console.log(newUser);
      // save the user
      newUser
        .save()
        .then(function() {
          res.send({ success: true });
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  });
};

exports.signOutUser = function(req, res) {
  req.logout();
  res.send({ LoggedIn: false });
};

//login functionality

exports.loginUser = (req, res, next) => {
  return passport.authenticate("local", (err, userData) => {
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      return res.status(400).json({
        success: false,
        message: "could not do it."
      });
    }
    if (err) {
      console.log(err);
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not do it."
      });
    }
    console.log(userData, "this is the userData in users_api.js");
    if (
      userData.message == "Invalid Password" ||
      userData.message == "User not Found"
    ) {
      return res.json({
        success: false,
        message: userData.message,
        user: userData
      });
    } else
      return res.json({
        success: true,
        message: "You have successfully logged in!",
        user: userData
      });
  })(req, res, next);
};
