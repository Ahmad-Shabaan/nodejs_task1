const express = require("express");
const users = require("./admin");
const routes = express.Router();
routes.get("/", (req, res, next) => {
  res.render("home", { pageTitle: "Home Page", path: "/", users: users.users });
});
module.exports = routes;
