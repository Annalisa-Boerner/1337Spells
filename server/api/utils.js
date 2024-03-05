const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");

const authRequired = (req, res, next) => {
     const token = req.signedCookies.token;
     console.log("cookie token: ", token);
     try {
          jwt.verify(token, JWT_SECRET);
     } catch (error) {
          res.status(401).send({
               message: "cannot log in",
               loggedIn: false,
          });
          return;
     }
     next();
};

module.exports = authRequired;
