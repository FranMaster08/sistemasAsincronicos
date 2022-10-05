const { user } = require("../model");

module.exports = {
  getAll: async (req, res) => {
    try {
      res.json({ data: await user.getAll() });
    } catch (error) {
      res.status(500);
      res.json({ error: error });
    }
  },
  getOne: (req, res) => {},
  create: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
