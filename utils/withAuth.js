const withAuth =  (req, res, next) => {
    // if the user is not logged in, route them back to login route
    if (!req.session.logged.in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;