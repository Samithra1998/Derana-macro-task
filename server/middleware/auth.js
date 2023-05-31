import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let data;

    if (token && isCustomAuth) {
      data = jwt.verify(token, "secret");
      req.userId = data?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

