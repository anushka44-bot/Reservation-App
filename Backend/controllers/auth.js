import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if password is provided
    if (!password) {
      return next(createError(400, "Password is required"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    await newUser.save();
    res.status(200).json("User created successfully");
  } catch (err) {
    next(err);
  }
};


export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(createError(400, "Username and password are required"));
    }

    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));

    if (!user.password) {
      return next(createError(500, "User password is missing"));
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password: pwd, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
