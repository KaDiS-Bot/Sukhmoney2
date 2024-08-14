
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', (req, res, next) => {
  console.log('POST /register route hit'); // Debugging line
  registerUser(req, res, next);
});

router.post('/login', (req, res, next) => {
  console.log('POST /login route hit'); // Debugging line
  loginUser(req, res, next);
});

module.exports = router;
