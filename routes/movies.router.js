const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const movies = [{ id: 1, nama: "harry potter" }];

router.get("/", (req, res) => {
  res.json({
    data: movies,
    message: "moviess",
  });
});

router.get("/subscribe", (req, res) => {
  try {
    const auth = req.headers.authorization;
    const tokenn = auth.split(" ")[1];

    console.log(auth);
    console.log(" ");
    console.log(tokenn);

    const isTokenValid = jwt.verify(tokenn, "secretkey");
    console.log(isTokenValid);

    res.json({
      data: movies,
      message: "subs moviess",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
