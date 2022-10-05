const { random } = require("../utils");

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (random(4, 10) % 2 == 0) {
          return resolve([
            {
              name: "fran",
              lastName: "jimenez",
            },
          ]);
        } else {
          reject({
            msg: "error de conexion",
          });
        }
      }, random(10, 20) * 1000);
    });
  },
};
