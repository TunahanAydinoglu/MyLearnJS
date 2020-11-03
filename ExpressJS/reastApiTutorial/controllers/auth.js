const User = require("../models/User");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
  //POST DATA
  const name = "Tunahan Aydinoglu";
  const email = "tuna@gmail.com";
  const password = "12367";

  //async await
  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

const errorTest = (req, res, next) => {
  // throw new Error("some error");
  return next(new CustomError("Custom Error Message", 400));
};

module.exports = {
  errorTest,
  register,
};
