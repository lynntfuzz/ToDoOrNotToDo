'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var toDoItemSchema = mongoose.Schema({
    // the index for ordering to do items in the to do list
    index: {
        type: Number,
        min: 0,
        max: 10
    },

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

    checkBoxRecords : [{type: mongoose.Schema.Types.ObjectId, ref: 'CheckBoxRecord'}]


});

// create the model for ToDoItems and expose it to our app
module.exports = mongoose.model('ToDoItem', toDoItemSchema);