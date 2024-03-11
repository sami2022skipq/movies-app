import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.post(
  "/signup",
  [
    // Basic critaria for creating a new user
    body("firstName", "First Name should be atleast three characters").isLength(
      { min: 3 }
    ),
    body("lastName", "Last Name should be atleast three characters").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email").isEmail(),
    body(
      "password",
      "Minimum password length has to be five characters "
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there is an error return bad req 400, and erros
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    
    // Check if user with given Email already registered
    const user = await User.findOne({ email });
    console.log("req.body  :", req.body);
    if (user) {
      return res.status(400).json({ error: `User with email '${user.email}' already exsist` })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({ status:true, message: "A new user has been registered" });
  }
);
// Api test
// router.get("/", (req, res) => res.status(200).send("All well"));
export { router as userRouter };
