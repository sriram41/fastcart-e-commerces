// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify', protect, (req, res) => {
  res.json({ valid: true, user: req.user });
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser } = require('../controllers/authController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// router.get('/verify', protect, (req, res) => {
//     res.json({ valid: true, user: req.user });
//   });

// module.exports = router;