const AppError = require("../utils/appError");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async ({ name, email, password }) => {
    if (!email || !password) {
        throw new AppError("Please provide Email and Password", 400);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError("User Already Exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    return user;
};

const loginUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new AppError("Please Provide Email and Password", 400);
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new AppError("User does not Exist", 400);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new AppError("Invalid Password", 400);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
 
    return { user, token };
}

module.exports = { registerUser, loginUser }