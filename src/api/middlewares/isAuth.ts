import jwt, { expressjwt } from "express-jwt";
import config from "../../config";

const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

 

const isAuth = expressjwt({
  secret: config.jwtSecret,
  requestProperty: "token",
  algorithms: ["HS256"],
  getToken: getTokenFromHeader,

});

export default isAuth;
