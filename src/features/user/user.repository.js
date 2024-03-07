import { getDB } from "../../config/mongodb.js";

export default class UserRepository {
  async signUp(newUser) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      await collection.insertOne(newUser);
      return newUser;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  async signIn(email, password) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      return await collection.findOne({ email, password });
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  async findByEmail(email) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      return await collection.findOne({ email });
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }
}
