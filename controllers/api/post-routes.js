const router = require('express').Router();
const Post = require('../../models/post.js');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  
  

  try {
    const userId = req.session.userId;
    console.log(userId);
    const newPost = await Post.create({ ...body, userId: userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
