const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.render('login', { layout: 'main' });
  } else {
    next();
  }
};

module.exports = withAuth;