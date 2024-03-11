import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
const router = express.Router();

router.post("/signUp", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.findOne(email);
  if (user) {
    return res.json({ message: "User alread Existed" });
  }
  const hashPassword = bcrypt.hash(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    hashPassword,
  });   
  await newUser.save()
  return res.json({message:"A new user has been registered"})
});
export { router as userRouter };
