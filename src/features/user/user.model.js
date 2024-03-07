import { getDB } from "../../config/mongodb.js";

export default class UserModel {
  constructor(name, email, password, type) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  static getAll() {
    return users;
  }
}

const users = [
  {
    id: 1,
    name: "Seller User",
    email: "seller@nexa.com",
    password: "Password1",
    type: "seller",
  },
  {
    id: 2,
    name: "Customer User",
    email: "customer@gmail.com",
    password: "Password1",
    type: "customer",
  },
];
