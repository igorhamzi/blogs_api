const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });

  const token = jwt.sign({ data: user.dataValues.displayName, email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};

const getUsers = async () => {
  const findUsers = await User.findAll();
  
  return findUsers;
  };

module.exports = {
  createUser,
  getUsers,
};
