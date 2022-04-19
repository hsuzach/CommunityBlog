const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
  
  //if user is loggedin, display the loggedin layout to show logout button
  if (req.session.loggedIn) {
    try {
      const postData = await Post.findAll({
        include: [User],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('posts-home', { posts, layout: "loggedin" });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
  
  //if user is not logged in, displays signup and login buttons
    try {
      const postData = await Post.findAll({
        include: [User],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('posts-home', { posts, layout: "main" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
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