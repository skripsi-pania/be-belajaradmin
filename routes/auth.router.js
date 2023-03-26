const express = require("express");
const router = express.Router();
//kita panggil webtoken okeee

const users = [
  {
    message: "success get data",
    data: [
      {
        _id: "6387735c2b0ac0b6e184846f",
        username: "febe11",
        email: "febe11@gmail.com",
        password:
          "$2a$08$xyjqQr5mPrJ0boat0IX69.DZKZgXtrC9L7zr/bCoiWvSZj7Z3x7Qi",
        roles: ["63876e9ff672199d9a7a61e6"],
        posts: [],
        __v: 1,
      },
      {
        _id: "63899588a9e80d4a347f2f6d",
        username: "vania",
        email: "vania@gmail.com",
        password:
          "$2a$08$55R7GEXuSKgbiKV11bKhI.B5LQrsGFp7cY2MI82DsMcjmPHmN485q",
        roles: ["63876e9ff672199d9a7a61e5"],
        __v: 1,
      },
      {
        _id: "638999eca9e80d4a347f2fa4",
        username: "ilham",
        email: "ilham@gmail.com",
        password:
          "$2a$08$3x3pqm8.LTiwzljv1jErouLfpxyvnPmQgvsLfStALMjW3uvEVdjRi",
        roles: ["63876e9ff672199d9a7a61e5"],
        __v: 1,
      },
    ],
  },
];

router.get("/admin", (req, res) => {
  res.send("hello world");
  res.send(users);
  console.log(users);
});

module.exports = router;
