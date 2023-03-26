const express = require("express");
const router = express.Router();

const moviesRoute = require("./movies.router");
const usersRoute = require("./users.router");
const authRoute = require("./auth.router");

router.use("/movies", moviesRoute);
router.use("/users", usersRoute);
router.use("/auth", authRoute);

module.exports = router;
