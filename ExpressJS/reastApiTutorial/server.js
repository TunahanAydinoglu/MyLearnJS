const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

//Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

//MongoDb Connection
connectDatabase();

//localhost:5000//api/questions

const app = express();

const PORT = process.env.PORT;

// app.get("/api/questions", (req, res) => {
//   res.send("Questiions Home Page");
// });
// app.get("/api/questions/delete", (req, res) => {
//   res.send("Questiions Delete Page");
// });
// app.get("/api/auth", (req, res) => {
//   res.send("Questiions Auth Page");
// });
// app.get("/api/auth/register", (req, res) => {
//   res.send("Questiions Auth Register Page");
// });

// Routers Middleware
app.use("/api", routers);
//ErrorHandler
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App started on:${PORT} : ${process.env.NODE_ENV}`);
});
