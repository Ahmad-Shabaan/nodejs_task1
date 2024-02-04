const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const dataRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use("/admin", dataRoutes.routes);
app.use(homeRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error 404" , path:""});
});
app.listen(3000);
