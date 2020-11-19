const User = require("../../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../../helpers/errors/CustomError");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new CustomError("There is no such user with that id", 400));
  }
  req.myCheckData = user;
  next();
});

module.exports = { checkUserExist };
