var mongoose = require('mongoose');
var Employee = require('Employee');
var Employer = require('Employer');
var Employee = require('Employee');

var messageSchema = new mongoose.Schema({
    postingTo: [Posting],
    postingFrom: [Posting],
    employee: [Employee],
    employer: [Employer]
}, { timestamps: true });

var Posting = mongoose.model('Posting', postingSchema);

module.exports = Posting;
