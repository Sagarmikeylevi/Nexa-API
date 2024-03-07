import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DATABASE_URL;

const connectToMongoDB = () => {
  MongoClient.connect(url)
    .then((client) => console.log("MongoDB is connected"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectToMongoDB;
