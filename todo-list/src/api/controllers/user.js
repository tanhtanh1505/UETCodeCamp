import HttpException from "../exceptions/http-exception";
import User from "../models/user";
import bcrypt from "bcryptjs";

// CRUD
export const createUser = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    password: hashedPassword,
  });

  return res.status(200).json({ newUser });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ users });
};
