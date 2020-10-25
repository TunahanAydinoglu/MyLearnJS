const accessControl = (req, res, next) => {
  let access = true;
  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  next();
};

const defaultMiddleware = (req, res, next) => {
  console.log("Default middleware run");
  next();
};

module.exports = {
  accessControl,
  defaultMiddleware,
};
