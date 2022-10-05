const db = require("../database/userDb");
module.exports = {
  getAll: async () => {
    try {
      const data = await db.findAll();
      return data;
    } catch (e) {
      console.info("Ocurrio un error en el modulo users");
      throw e;
    }
  },
  getOne: (id) => {},
  create: (entity) => {},
  update: (id, entity) => {},
  delete: (id) => {},
};
