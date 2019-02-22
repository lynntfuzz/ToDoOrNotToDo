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
    //.populate('toDoItems')     
    .then(function(dbChallenges) {
        // dbChallenges.forEach(challenge => {
        //     challenge.toDoItems.forEach(toDoItem => {

        //         CheckBoxRecord.populate(toDoItem,{
        //             path:'toDoItem.checkBoxRecords'
        //         },function(err,challenge){
        //            //mains[0].subs[0].members - is not empty
        //         });

        //     })
       
        res.json(dbChallenges)
    })
    //    res.json(dbChallenges)
        
    }


exports.findOneByID = function(req,res) {
    console.log("challengesController.findOneById");
    console.log(req.params.id);
    Challenge.findOne({ _id: req.params.id })
        .populate('toDoItems')
        .populate('teamMembers')
        .populate("toDoItems.checkBoxItems")
        .then(function(dbChallenge) {
            // If Challenges are successfully found, send them back to the client
            console.log("found :");
            console.log(dbChallenge); 
            res.json(dbChallenge);
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
        .populate('subjects')
        .populate('teamMembers')
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
  
  
