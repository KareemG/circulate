/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  if (req.user) {
    if (req.user.isEmployee == 1) {
      res.render('employeeDashboard', {
        title: 'Employee Dashboard',        
      });
    }
    else {
      res.render('employerDashboard', {
        title: 'Employer Dashboard',
      });
    }
  }
  else {
    res.render('home', {
      title: 'Home'
    });
  }
};
