const express = require("express");
const path = require("path");
const cors = require('cors'); //cors for atlas
const mongoose = require('mongoose'); //mongoose for atlas
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const passport = require("./config/passport")
const routes = require("./routes");

// Define middleware here
app.use(cors()); //mongodbAtlas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Atlas connection
const uri = process.env.ATLAS_URI || "mongodb://localhost/ztrakdev.db";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use("/api", routes)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
