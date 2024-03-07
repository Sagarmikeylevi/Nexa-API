import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";
dotenv.config();

export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signUp(req, res) {
    try {
      const { name, email, password, type } = req.body;
      const hasedPassword = await bcrypt.hash(password, 12);
      const user = new UserModel(name, email, hasedPassword, type);
      await this.userRepository.signUp(user);
      res.status(201).send(user);
    } catch (error) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  }

  async signIn(req, res, next) {
    try {
      // 1. Find user by email.
      const user = await this.userRepository.findByEmail(req.body.email);
      if (!user) {
        return res.status(400).send("Incorrect Credentials");
      } else {
        // 2. Compare password password with hashed password.
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          // 3. Create token.
          const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          // 4. Send token.
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (err) {
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
  }
}
