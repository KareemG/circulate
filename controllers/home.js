/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    if (req.user) {
        if (req.user.isEmployee == 1) {
            res.render('employeeDashboard', {
            });
        }
        else {
            res.render('employerDashboard', {
            });
        }
    }
    else {
        res.render('home', {
            title: 'Home'
        });
    }
};

exports.getHome = function(req, res) {
    res.render('home', {
        title: 'Home'
    });
};