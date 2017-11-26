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

// Port
const port = process.env.PORT || 3000;

// Routes
const routes = require("./controllers/burgers_controller.js");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);