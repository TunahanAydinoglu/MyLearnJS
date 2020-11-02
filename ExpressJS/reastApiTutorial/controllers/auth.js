const User = require("../models/User");
const CustomError = require('../helpers/errors/CustomError')

const register = async (req, res, next) => {
  //POST DATA
  const name = "Tunahan Aydinoglu";
  const email = "tuna@gmail.com";
  const password = "12367";

  //try catch
  try {
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
  } catch (err) {
    return next(err);
  }
};

const errorTest = (req, res, next) => {
  // throw new Error("some error");
  return next(new CustomError("Custom Error Message",400))
};

module.exports = {
  errorTest,
  register,
};
