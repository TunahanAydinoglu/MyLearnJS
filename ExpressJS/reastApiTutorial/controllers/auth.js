const User = require("../models/User");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");

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
const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name,
    },
  });
};

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateUserInput(email, password)) {
    return next(new CustomError("Pleace check your inputs", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check your credentials", 400));
  }
  sendJwtToClient(user, res);
});

const logout = asyncErrorWrapper(async (req, res, next) => {
  const { NODE_ENV } = process.env;

  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "Logout Successful",
    });
});

const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  // db update
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      profile_image: req.savedProfileImage,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    message: "Image Upload Successful",
    data: updatedUser,
  });
});

const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;

  const user = await User.findOne({ email: resetEmail });

  if (!user) {
    return next(new CustomError("There is no user with that email"), 400);
  }

  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();

  res.json({
    success: true,
    message: "Token send to your email address",
  });
});

module.exports = {
  register,
  getUser,
  login,
  logout,
  imageUpload,
  forgotPassword,
};
