

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  // console.log('Register User Function Called'); // Debugging line
  const { username, email, password } = req.body;
  try {
    // console.log('Request Body:', req.body); // Debugging line

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error); // Debugging line
    res.status(500).json({ message: 'Server Error' });
  }
};

// const loginUser = async (req, res) => {
//   console.log('Login User Function Called'); // Debugging line
//   const { email, password } = req.body;
//   try {
//     console.log('Request Body:', req.body); // Debugging line

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ token });
//   } catch (error) {
//     console.error('Error during login:', error); // Debugging line
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

const loginUser = async (req, res) => {
  // console.log('Login User Function Called');
  const { email, password } = req.body;

  try {
    // console.log('Request Body:', req.body);

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found', status: 'error' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials', status: 'error' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, status: 'ok' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', status: 'error' });
  }
};

module.exports = { registerUser, loginUser };
