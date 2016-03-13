var mongoose = require('mongoose');
var User = require('../models/User');

var postingSchema = new mongoose.Schema({
    employer: [User],
    employee: [User],
    attributes: {
        bio: { type: String, default: '' },
        duration: { type: String, default: '' },
        expiryDate: { type: Date, default: Date.now },
        jobDuties: { type: String, default: '' },
        idealSwitches: { type: String, default: '' },
        tags: [String]
    }
}, { timestamps: true });

var Posting = mongoose.model('Posting', postingSchema);
module.exports = Posting;