const loginService = require('../services/loginService');

const authLogin = async (req, res) => {
  try {
    const { email } = req.body;

    const login = await loginService.authLogin(email);
    if (login.message) {
      return res.status(400).json({ message: login.message });
    }
    return res.status(200).json(login);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  authLogin,
};
