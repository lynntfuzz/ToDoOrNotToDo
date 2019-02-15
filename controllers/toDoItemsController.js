const ToDoItem = require('../models/ToDoItem');
const Challenge = require('../models/Challenge');

exports.findAll = function(req,res) {
    console.log("toDoItemController.findAll");
    ToDoItem.find({})
    .then(function(dbToDoItem) {
      // If ToDoItems are successfully found, send them back to the client
      res.json(dbToDoItem);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};

exports.createToDoItem = function(req,res) {
    console.log("toDoItemsController.createToDoItem");
    // ToDoItem.create(req.body)
    // .then(function(dbToDoItem) {
    //     console.log(dbToDoItem);
    //     res.json(dbToDoItem);
    //     //res.send({ success: true });
    // })
    // .catch(function(err) {
    //     console.log(err.message);
    // });  
    console.log("toDoItemsController.createToDoItem()");
    ToDoItem.create(req.body)
    .then(function(dbToDoItem) {
        console.log("saved to do item ==============> ");
        console.log(dbToDoItem);
        console.log("<========================");
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return Challenge.findOneAndUpdate({_id: dbToDoItem.challenge._id}, { $push: { toDoItems: dbToDoItem._id } }, { new: true });
    })
    .then(function(challenge) {
      // If the User was updated successfully, send it back to the client
      console.log(challenge);
      res.json(challenge);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      console.log(err);
      res.json(err);
    });
};

exports.updateToDoItem = function(req,res) {
    console.log("toDoItemsController.updatedbToDoItem");
    dbToDoItem.findByIdAndUpdate(rep.params._id, req.body)
    .then(function(dbdbToDoItem) {
        console.log(dbdbToDoItem);
        //res.json(dbToDoItem);
        res.send({ success: true });
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};
  
  
