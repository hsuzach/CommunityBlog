const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

//render user's posts
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard-home', {
      layout: 'loggedin',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

//render creating a new post form
router.get('/new', withAuth, (req, res) => {
  res.render('post-new', {
    layout: 'loggedin',
  });
});

//render editing or deleting post form
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('post-edit', {
        layout: 'loggedin',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});




module.exports = router;