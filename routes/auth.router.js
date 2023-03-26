const express = require("express");
const router = express.Router();
//kita panggil webtoken okeee
const jwt = require("jsonwebtoken");

const users = [
  { id: 1, nama: "Vania", email: "sk080501@gmail.com", password: "123" },
  { id: 2, nama: "Iqbal", email: "iqbal@gmail.com", password: "123" },
];

const KEY = "secretkey";
router.get("/login", (req, res) => {
  res.send("hello world");
  res.send(users);
  console.log(users);
});
// http://localhost:3000/auth/login
router.post("/login", (req, res) => {
  // const data = req.body; // ini cara pertama 1*
  const { email, password } = req.body; //ini cara ke-dua
  //   console.log("Data berhasil ditambahkan ", data);

  // check kondisi email/password incorrect atau tidak
  // data.email itudari input body Thunder ya, item.email itu dari data yang di dalem const users = ...
  const userData = users.find(
    // (item) => data.email === item.email && data.password === item.password // ini untuk cara pertama dri baris 12
    (item) => email === item.email && password === item.password // ini untuk cara kedua dri baris 13
  );

  //setelah panggil webtoken, kita bkin token jwt nya
  // const tokenn = jwt.sign({ email }, KEY); // cara 1 mudah
  const tokenn = jwt.sign(
    {
      id: userData.id,
      email: userData.email,
    },
    KEY,
    { expiresIn: "2m" }
  );

  if (userData) {
    return res.json({
      message: "success login",
      token: tokenn,
    });
  }

  res.statusCode = 401;
  return res.json({
    message: "email atau password salah",
  });
});

// http:localhost:3000/auth/register
router.post("/register", (req, res) => {
  res.json({
    message: "success register",
  });
});

module.exports = router;
