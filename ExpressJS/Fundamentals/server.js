const e = require("express");
const express = require("express");
const { accessControl, defaultMiddleware } = require("./middleware");

const users = [
  { id: 1, name: "Tuna Aydinoglu", city: "Antalya" },
  { id: 2, name: "Ali Biner", city: "Isparta" },
  { id: 3, name: "Furkan Titiz", city: "Samsun" },
];

const app = express();

const PORT = 3200;
// app.use(accessControl); //uygulama kapsaminda
app.use(express.json());

//Get Request
app.get("/users", [accessControl, defaultMiddleware], (req, res, next) => {
  res.json({
    succes: true,
    data: users,
  });
});
app.get("/products", (req, res, next) => {
  res.json("Products");
});

app.post("/users", (req, res, next) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.json({
    success: true,
    data: users,
  });
});

// users/1
app.put("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    data: users,
  });
});
app.delete("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  res.json({
    success: true,
    data: users,
  });
});

app.listen(PORT, () => {
  console.log("Server Started:" + PORT);
});
