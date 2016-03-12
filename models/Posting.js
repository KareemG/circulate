var mongoose = require('mongoose');
var Employee = require('Employee');
var Employer = require('Employer');

var postingSchema = new mongoose.Schema({
    employer: [Employer],
    employee: [Employee],
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
