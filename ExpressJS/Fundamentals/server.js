const express = require("express");
const { accessControl,defaultMiddleware } = require("./middleware");

const users = [
  { id: 1, name: "Tuna Aydinoglu", city: "Antalya" },
  { id: 2, name: "Ali Biner", city: "Isparta" },
  { id: 3, name: "Furkan Titiz", city: "Samsun" },
];

const app = express();

const PORT = 3200;
// app.use(accessControl); //uygulama kapsaminda

//Get Request
app.get("/users",[accessControl,defaultMiddleware], (req, res, next) => {
  res.json(users);
});
app.get("/products", (req, res, next) => {
  res.json("Products");
});

app.listen(PORT, () => {
  console.log("Server Started:" + PORT);
});
