var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Posting = require('../models/Posting');
var User = require('../models/User');
var Message = require('../models/Message');

exports.getMessages = function(req, res, next) {
    Message.find(function(err, messages) {
        if (err) {
            return next(err);
        }
        res.render('messages', {
            title: 'Messages',
            messages: JSON.stringify(messages)
        });
    });
};

exports.getMessage = function(req, res, next) {
    var messageId = req.messageId;
    Message.findOne({ id: messageId }, function (err, message) {
        if(err) {
            return next(err);
        }
        return JSON.stringify(message);
    });
};

exports.postMessage = function(req, res) {
    var message = new Message({
       // todo 
    });
    
    message.save(function(err) {
        if(err) {
            return next(err);
        }
        req.flash('success', { msg: 'Message created. '});
        res.redirect('/');
    });
};

exports.postDeleteMessage = function(req, res, next) {
    Message.remove({ _id : req.message.id }, function(err) {
        if(err) {
            return next(err);
        }
        req.flash('info', { msg: 'Your message has been deleted.' });
        res.redirect('/');     
    });
};
