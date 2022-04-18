const router = require('express').Router();

router.get('/', (req, res) => {
  
  res.render('posts', { layout: 'main' });
 
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login', { layout: 'main' });
});

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup', { layout: 'main' });
 
});



module.exports = router;