import express from "express";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { body, validationResult } from "express-validator";
const router = express.Router();
const JWt_secret = "mySecretSAMI"
//#1   SignUp Route
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
    try {
      // Check if user with given Email already registered
      const user = await User.findOne({ email });
      console.log("req.body  :", req.body);
      if (user) {
        return res
          .status(400)
          .json({ error: `User with email '${user.email}' already exsist` });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });
      await newUser.save();
      //Enabling JWT auth token
    
      const authToken = Jwt.sign({ userId: email }, JWt_secret);
 
      return res.status(201).json({ success:true, status: true, authToken, message: "A new user has been registered" });
    } catch (error) {
      console.log("here is the error ", error.message);
      res.status(500).send("Internal Server error ");
    }
  }
);
// #2 Login Route
router.post(
  "/login",
  [
    // Basic critaria for creating a new user

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
    const { email, password } = req.body;

    // Check if user with given Email Exsists
    const user = await User.findOne({ email });
    console.log("req.body  :", req.body);
    if (!user) {
      return res.status(400).json({ error: `Invalid Email or Password` });
    }
    let passwordCompare = bcrypt.compareSync(password, user.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ status: false, error: `Invalid Email or Password` });
    }
    const authToken = Jwt.sign({ userId: email }, JWt_secret);
    return res
      .status(200)
      .json({ status: true, authToken, success:true, message: "Logged In Successfully" });
  }
);

export { router as userRouter };
