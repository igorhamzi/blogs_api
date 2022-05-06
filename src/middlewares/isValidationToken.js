const jwt = require('jsonwebtoken');
require('dotenv').config();

const validationToken = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  validationToken,
};
