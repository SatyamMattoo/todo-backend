import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { setCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error .js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User already Exists", 400));

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    setCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email:req.body.email }).select("+password");

    if (!user) return next(new ErrorHandler("Register first", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new ErrorHandler("Invalid Password", 400));

    setCookie(user, res, `Logged In Successfully as ${user.name}`, 201);
  } catch (error) {
    next(error);
  }
};

export const getMyDetails = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
      message: "Logged Out",
    });
};
