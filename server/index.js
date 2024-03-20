const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// const COOKIE_SECRET = process.env.COOKIE_SECRET || require('./secrets');

const { client } = require("./db/client");

client.connect();
//init morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init cookie parser
const cookieParser = require("cookie-parser");
<<<<<<< HEAD
const { COOKIE_SECRET } = require("./secrets");
=======

const COOKIE_SECRET = process.env.COOKIE_SECRET;
// const { COOKIE_SECRET } = require("./secrets");
>>>>>>> main
app.use(cookieParser(COOKIE_SECRET));

// init cors
const cors = require("cors");
app.use(cors());

//* is a wildcard, so it returns this at any endpoint
app.get("*", express.static("../client/dist"));

// Router: /api
app.use("/api", require("./api"));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//node index.js
