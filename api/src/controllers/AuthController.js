const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const User = require("../models/user");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { [Op.and]: [{ email: email }, { password: password }] }
      });

      if (!user) {
        return res
          .status(404)
          .json({ message: "Email or password not valid." })
          .end();
      }

      const token = jwt.sign({ user }, "my_secret_word", {
        algorithm: "HS256",
        expiresIn: 30000
      });

      return res.json({ token: token, expires: 30000 });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  register: async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
