const Challenge = require('../models/Challenge');

exports.findAll = function(req,res) {
    console.log("challengesController.findAll");
    Challenge.find({})
    .populate('toDoItems')
    .then(function(dbChallenges) {
      // If Challenges are successfully found, send them back to the client
      res.json(dbChallenges);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};

exports.findOneByID = function(req,res) {
    console.log("challengesController.findOneById");
    Challenge.findOne({ _id: req.params._id })
        .populate('subjects')
        .then(function(dbChallenge) {
            // If Challenges are successfully found, send them back to the client
            res.json(dbChallenge);
        })
        .catch(function(err) {
            // If an error occurs, send the error back to the client
            res.json(err);
    })
};

exports.findOneByName = function(req,res) {
    console.log("challengesController.findOneByName");
    Challenge.findOne({ name: req.params.name })
        .populate('subjects')
        .then(function(dbChallenge) {
            // If Challenges are successfully found, send them back to the client
            res.json(dbChallenge);
        })
        .catch(function(err) {
            // If an error occurs, send the error back to the client
            res.json(err);
    })
};

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
};

exports.updateChallenge = function(req,res) {
    console.log("challengesController.updateChallenge");
    Challenge.findByIdAndUpdate(rep.params._id, req.body)
    .then(function(dbChallenge) {
        console.log(dbChallenge);
        res.send({ success: true });
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};
  
  