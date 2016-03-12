/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
    if (req.Employer) {
        res.render('homeEmployer', {
            title: 'Employer Dashboard'
        });
    }
    else if (req.Employee) {
        res.render('homeEmployee', {
            title: 'Employee Dashboard'
        });
    }
    else {
        res.render('home', {
            title: 'Employer Dashboard'
        });
    }
};