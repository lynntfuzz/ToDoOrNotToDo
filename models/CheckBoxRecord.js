'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our toDoItemRecord model. This data model represets a record 
//for a particular user, on a particular day, for a particular to do item.
// For example user x completed to do item y on date z
var checkBoxRecordSchema = mongoose.Schema({

    challengeId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Challenge'
    },

    toDoItem: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ToDoItem',  
    },

    user: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'Please set user'] 
    },

    date: { type: mongoose.Schema.Types.Date},

    completed: {type: mongoose.Schema.Types.Boolean, date: mongoose.Schema.Types.Date} 
    
});

// create the model for ToDoItems and expose it to our app
module.exports = mongoose.model('CheckBoxRecord', checkBoxRecordSchema);