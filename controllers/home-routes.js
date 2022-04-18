const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('posts', { layout: 'loggedin' });
    return;
  }

  res.render('posts', { layout: 'main' });
 
});

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup', { layout: 'main' });
 
});
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login', { layout: 'main' });
 
});




module.exports = router;