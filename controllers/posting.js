var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Posting = require('../models/Posting');
var userController = require('../controllers/user');
/**
 * GET /postings
 * Postings page.
 */
exports.getPostings = function(req, res, next) {
    Posting.find(function(err, list) {
        if (err) return next(err);
        req.postings = list;
        res.render('employerDashboard', {
            title: 'Employer Dashboard',
   	    postings: list
        });
    });
};

exports.getPosting = function(req, res, next) {
    var postingId = req.query.id;
    Posting.findOne({ _id: postingId }, function(err, posting) {
        if (err) {
            return next(err);
        }
        res.render('posting', {
            title: 'Posting',
            posting: posting,
            id: postingId
        });
    });
};

exports.getNewPosting = function(req, res, next) {
    res.render('newPosting', {
        title: 'New Posting'
    });
}

exports.postPosting = function(req, res) {
    var posting = new Posting({
        employer: req.user.profile.name,
        employee: userController.getUser(req.body.employee),
        bio: req.body.bio,
        duration: req.body.duration,
        expiryDate: req.body.expiryDate,
        jobDuties: req.body.jobDuties,
        idealSwitches: req.body.idealSwitches,
        tags: req.body.tags
    });

    posting.save(function(err) {
   	
        if (err) {
            return next(err);
        }
        req.flash('success', { msg: 'Posting created. ' });
        res.redirect('/');
    });
};

exports.postUpdatePosting = function(req, res, next) {
    Posting.findById(req.posting.id, function(err, posting) {
        if (err) {
            return next(err);
        }
        posting.bio = req.body.bio || '';
        posting.duration = req.body.duration || '';
        posting.expiryDate = req.body.expiryDate || Date.now;
        posting.jobDuties = req.body.jobDuties || '';
        posting.idealSwitches = req.body.idealSwitches || '';
        posting.tags = req.body.tags || '';

        posting.save(function(err) {
            if (err) {
                return next(err);
            }
            req.flash('success', { msg: 'Posting updated.' });
            res.redirect('/');
        });
    });
};

/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeletePosting = function(req, res, next) {
    Posting.remove({ _id: req.posting.id }, function(err) {
        if (err) {
            return next(err);
        }
        req.flash('info', { msg: 'Your posting has been deleted.' });
        res.redirect('/');
    });
};
