const Challenge = require('../models/Challenge');

exports.findAll = function(req,res) {
    console.log("challengesController.findAll");
    Challenge.find({})
    .then(function(dbChallenge) {
      // If Challenges are successfully found, send them back to the client
      res.json(dbChallenge);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

}

exports.createChallenge = function(req,res) {
    console.log("challengesController.createChallenge");

    Challenge.create(req.body)
    .then(function(dbChallenge) {
        console.log(dbChallenge);
        res.send({ success: true });
    })
    .catch(function(err) {
        console.log(err.message);
    });
    
}
  
  
