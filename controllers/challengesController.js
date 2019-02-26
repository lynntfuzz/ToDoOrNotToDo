const Challenge = require('../models/Challenge');
const ToDoItem = require('../models/ToDoItem');
const CheckBoxRecord = require('../models/CheckBoxRecord');

exports.findAll = function(req,res) {
    console.log("challengesController.findAll");
    Challenge.find({})
    .populate({
        path: 'toDoItems',
        model: 'ToDoItem',
        populate: {
        path: 'checkBoxRecords',
        model: 'CheckBoxRecord'
        }
    })
    .populate('teamMembers')  
    .then(function(dbChallenges) {  
        res.json(dbChallenges)
    })
    .catch(function(err) {
        // If an error occurs, send the error back to the client
        res.json(err);
    })
     
}


exports.findOneByID = function(req,res) {
    console.log("challengesController.findOneById");
    console.log(req.params.id);
    Challenge.findOne({ _id: req.params.id })
    .populate({
        path: 'toDoItems',
        model: 'ToDoItem',
        populate: {
        path: 'checkBoxRecords',
        model: 'CheckBoxRecord'
        }
    })
    .populate('teamMembers')  
    .then(function(dbChallenges) {  
        res.json(dbChallenges)
    })
    .catch(function(err) {
        console.log(err);
        // If an error occurs, send the error back to the client
        res.json(err);
    })
};

exports.findAllByUserID =  function(req,res) {
    console.log("challengesController.findOneById");
    console.log(req.params.id);
    Challenge.find({ teamMembers:  req.params.userid })
    .populate({
        path: 'toDoItems',
        model: 'ToDoItem',
        populate: {
        path: 'checkBoxRecords',
        model: 'CheckBoxRecord'
        }
    })
    .populate('teamMembers')  
    .then(function(dbChallenges) {  
        res.json(dbChallenges)
    })
    .catch(function(err) {
        console.log(err);
        // If an error occurs, send the error back to the client
        res.json(err);
    })
};

exports.findOneByName = function(req,res) {
    console.log("challengesController.findOneByName");
    Challenge.findOne({ name: req.params.name })
    .populate({
        path: 'toDoItems',
        model: 'ToDoItem',
        populate: {
        path: 'checkBoxRecords',
        model: 'CheckBoxRecord'
        }
    })
    .populate('teamMembers')  
    .then(function(dbChallenges) {  
        res.json(dbChallenges)
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
        res.json(dbChallenge);
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};

exports.updateChallenge = function(req,res) {
    console.log("challengesController.updateChallenge");
    Challenge.findByIdAndUpdate(req.params._id, req.body)
    .then(function(dbChallenge) {
        console.log(dbChallenge);
        res.json(dbChallenge);
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};
  
  
