const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: 'Usuario creado' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
