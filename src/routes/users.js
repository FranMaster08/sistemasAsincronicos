const { Router } = require("express");
const { user } = require("../controller");
const routes = Router();

routes.get("/", user.getAll);

module.exports = routes;
