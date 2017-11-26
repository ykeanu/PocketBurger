// ==============================================================================
// INITIALIZE PACKAGES
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Set handlebars
const exphbs = require("express-handlebars");

// Initialize express
const app = express();

// Heroku or default port
let port = process.env.PORT || 3000;

// Routes
const routes = require("./controllers/burger_controller.js");

// Server static content
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);