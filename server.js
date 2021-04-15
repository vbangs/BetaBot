require("dotenv").config();

const express = require("express");
const mongoose = require("./db/connection");
const {log} = require("mercedlogger");

// IMPORT MIDDLEWARE
const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");



// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT || "3000";
const SECRET = process.env.SECRET || "secret";
// const MONGO = process.env.MONGO || "mongodb://localhost:27017/betabot"
const HomeRouter = require("./routes/index.js");

// Sessions Middleware
const session = require("express-session");
const connect = require("connect-mongodb-session")(session);

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// SET VIEW ENGINE
app.set("view engine", "ejs");

// SET UP MIDDLEWARE

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: false}));

// SESSION MIDDLEWARE REGISTRATION
app.use(
    session({
      secret: SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
      saveUninitialized: true, // create session regardless of changes
      resave: true, //save regardless of changes
      store: new connect({
        uri: process.env.MONGO,
        databaseName: "sessions",
        collection: "sessions",
      }),
    })
  );

// HomeRouter
app.use("/", HomeRouter);


// mongoose.connect(MONGO, () => console.log("connected to mongo"))

app.listen(PORT, () => console.log(`listening on ${PORT}`))

