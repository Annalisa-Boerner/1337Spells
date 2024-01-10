const express = require("express");
const app = express();
const PORT = 8080;

const client = require("./db/client");

//connect to client
client.connect();

//init morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init cookie parser
const cookieParser = require("cookie-parser");
const { COOKIE_SECRET } = require("./secrets");
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

//
// Static Content
// app.use("/", express.static("./src/static"));
