const User = require("../models/User");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const sendJwtToClient = require("../helpers/authorization/sendJwtToClient");

const register = asyncErrorWrapper(async (req, res, next) => {
  // //POST DATA
  // const name = "Tunahan Aydinoglu";
  // const email = "tuna@gmail.com";
  // const password = "12367";

  console.log(req.body);
  const data = req.body;
  const { name, email, password, role } = data;

  //async await
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendJwtToClient(user, res);
  
});

const errorTest = (req, res, next) => {
  // throw new Error("some error");
  return next(new CustomError("Custom Error Message", 400));
};

module.exports = {
  errorTest,
  register,
};
