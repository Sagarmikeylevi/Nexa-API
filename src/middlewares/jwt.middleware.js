import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log(token);
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = payload.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
};

export default jwtAuth;
