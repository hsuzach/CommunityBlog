const router = require('express').Router();
const Post = require('../../models/post.js');
const withAuth = require('../../utils/auth');

//post for new post with associated userId
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  
  try {
    const userId = req.session.userId;
    const newPost = await Post.create({ ...body, userId: userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update post route at postId
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post route at postId
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });


    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
