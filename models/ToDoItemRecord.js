'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our toDoItemRecord model. This data model represets a record 
//for a particular user, on a particular day, for a particular to do item.
// For example user x completed to do item y on date z
var toDoItemRecordSchema = mongoose.Schema({

    toDoItem: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ToDoItem', 
        required: [true, 'Please set id of to do item'] },

    user: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Please set user'] 
    },

    date: {
        type: Date,
        required: [true, 'Please enter date']
    },

    completed: {
        type: Boolean,
        required: [true, 'Please true or false']
    }
    
});

// create the model for ToDoItems and expose it to our app
module.exports = mongoose.model('ToDoItemRecord', toDoItemRecordSchema);