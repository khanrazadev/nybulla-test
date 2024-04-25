import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please write username"],
      unique: [true, "username is already exists"],
    },
    email: {
      type: String,
      required: [true, "Please write email"],
      unique: [true, "email is already exists"],
    },
    phone: {
      type: String,
      required: [true, "Please write phone number"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
