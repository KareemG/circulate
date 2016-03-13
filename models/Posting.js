var mongoose = require('mongoose');
var User = require('../models/User');

var postingSchema = new mongoose.Schema({
    employer: [User],
    employee: [User],
    bio: String,
    duration: String,
    expiryDate: String,
    jobDuties: String,
    idealSwitches: String,
    tags: [String]
}, { timestamps: true });

var Posting = mongoose.model('Posting', postingSchema);
module.exports = Posting;
