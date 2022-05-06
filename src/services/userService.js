const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });

  const token = jwt.sign({ data: { displayName, email } }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};

module.exports = {
  createUser,
};
