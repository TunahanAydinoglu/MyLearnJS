const CustomError = require("../../helpers/errors/CustomError");
const jwt = require("jsonwebtoken");
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoutes = (req, res, next) => {
  //Token
//   const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    // 401 Unauthorize
    // 403 Forbidden
    return next(
      new CustomError("You are not authorize to access this route", 403)
    );
  }
  console.log(req.headers.authorization);
  const accessToken = getAccessTokenFromHeader(req);
  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this page", 401)
      );
    }
    req.user = {
      id: decoded.id,
      name: decoded.name,
    };
    console.log(decoded);

    next();
  });
};
module.exports = {
  getAccessToRoutes,
};
