var mongoose = require('mongoose');
var User = require('../models/User');
var Posting = require('../models/Posting')

var messageSchema = new mongoose.Schema({
    postingTo: [Posting],
    postingFrom: [Posting],
    sender: [User],
    receiver: [User]
}, { timestamps: true });

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;