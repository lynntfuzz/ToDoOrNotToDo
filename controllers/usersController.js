const User = require('../models/User');
const passport = require('passport');

exports.findAll = function(req,res) {
    console.log("usersController.findAll");
}

// register a user
exports.signUpUser = function(req,res) {
    console.log("signUpUser");
    User.findOne({ 'username' :  req.body.username }, function(err, user) {
  
      // check to see if theres already a user with that email
      if (user) {
          res.send({ duplicateUser: true })
      } else {
  
          // if there is no user with that email
          // create the user
          console.log("new user", req.body);
          const newUser       = new User();
        
          // set the user's local credentials
          newUser.first_name = req.body.firstName;
          newUser.last_name = req.body.lastName;
          newUser.username    = req.body.userName;
          newUser.email       = req.body.emailAddress;
          newUser.password    = newUser.generateHash(req.body.password);
  console.log(newUser);
          // save the user
          newUser.save()
            .then(function() {
            res.send({ success: true });
          }).catch(function(err) {
            res.json(err);
          });
      }
  
    }); 
  };