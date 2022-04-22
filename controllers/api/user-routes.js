const router = require('express').Router();
const { User } = require('../../models/');

//create a new user with credentials
//logs in user after signing up
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
      
    });

  } catch (err) {
    res.status(500).json(err);
  }


});

//user signs in with valid credentials and session becomes loggedIn
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user, message: 'You are now logged in!' });
    });
    console.log("You are now logged in!")

  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }

});

//destroys session
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    console.log("You are now logged out!")
  } else {
    res.status(404).end();
  }
});




module.exports = router;
