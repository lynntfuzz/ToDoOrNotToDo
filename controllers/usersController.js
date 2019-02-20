const User = require("../models/User");
const passport = require("passport");

exports.findAll = function(req, res) {
  console.log("usersController.findAll");
  User.find({})
  .then(function(users) {
    // If Users are successfully found, send them back to the client
    res.json(users);
  })
  .catch(function(err) {
    // If an error occurs, send the error back to the client
    res.json(err);
  });
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
  console.log("this is the login API");
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
    console.log(userData, "this is the userData in login.js");
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
