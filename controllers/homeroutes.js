const router = require('express').Router();

router.get('/', (req, res) => {
  
  res.render('home', { layout: 'main' });
 
});

router.get('/signup', (req, res) => {
  
  res.render('signup', { layout: 'main' });
 
});



module.exports = router;