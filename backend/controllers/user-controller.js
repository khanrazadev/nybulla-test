import asyncHandler from "express-async-handler";
import { User } from "../models/user-models.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, phone } = req.body;

  if (!username || !email || !phone) {
    res.status(400);
    throw new Error("Please write all the fields");
  }

  const newUser = await User.create({
    username,
    email,
    phone,
  });

  res.status(200).json(newUser);
});
