'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var toDoItemSchema = mongoose.Schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a title for to do item.']
    },
    description: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a description for to do item.']
    },
    // each to do item belongs to a challenge
    challenge : { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },

});

// create the model for ToDoItems and expose it to our app
module.exports = mongoose.model('ToDoItem', toDoItemSchema);