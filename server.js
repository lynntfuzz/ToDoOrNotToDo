const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
var morgan  = require('morgan');

// Define middleware here
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   console.log("here");
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habits");


app.listen(PORT, () => {
  console.log(`🌎 ==> API-Lynn server now on port ${PORT}!`);
});
