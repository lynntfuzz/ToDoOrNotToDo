'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var challengeSchema = mongoose.Schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a name for challenge.']
    },
    startdate: {
        type: Date,
        required: [true, 'Please enter an start date']
    },
    enddate: {
        type: Date,
        required: [true, 'Please enter an end date.']
    },
    isOpen: {
        type: Boolean,
        default: true,
        required: [true, 'Please specify whether this challenge is open to others.']
    },
    maxParticipants: {
        type: Number,
        min: [1, 'Too few characters'],
        max: [100],
        required: [true, 'Please enter a maximum number of participants.']
    },
    
    invitedMembers : [{ type: Schema.Types.ObjectId, ref: 'User' }],

    confirmedMembers : [{ type: Schema.Types.ObjectId, ref: 'User' }],

    admin:{ type: Schema.Types.ObjectId, ref: 'User' }
});



// create the model for Challenges and expose it to our app
module.exports = mongoose.model('Challenge', challengeSchema);