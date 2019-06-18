// Dependencies
var express = require("express");
var htmlRoutes = require("./routes/html-routes")
var apiRoutes = require('./routes/api-routes')
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log('connected at port: ' + PORT)
});

