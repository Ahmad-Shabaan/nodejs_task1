const express = require("express");
const routes = express.Router();

const users = [];
routes.get("/users", (req, res, next) => {
  res.render("user", { pageTitle: "dashboard", path: "/admin/users" });
});

routes.post("/users", (req, res, next) => {
  users.push({name:req.body.name});
  res.redirect("/");
});
exports.routes = routes;
exports.users = users;
