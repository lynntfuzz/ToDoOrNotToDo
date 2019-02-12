const ToDoItem = require('../models/ToDoItem');

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
    ToDoItem.create(req.body)
    .then(function(dbToDoItem) {
        console.log(dbToDoItem);
        res.send({ success: true });
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};

exports.updatedbToDoItem = function(req,res) {
    console.log("toDoItemsController.updatedbToDoItem");
    dbToDoItem.findByIdAndUpdate(rep.params._id, req.body)
    .then(function(dbdbToDoItem) {
        console.log(dbdbToDoItem);
        res.send({ success: true });
    })
    .catch(function(err) {
        console.log(err.message);
    });  
};
  
  
