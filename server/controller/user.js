import userModels from "../modules/blogUserModules.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModels.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist!" });

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword)
      return res.status(404).json({ message: "Incorrect password!" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'secret', { expiresIn: "1h" });
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const userSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    age,
    password,
    confirmPassword,
  } = req.body;

  try {
    const existingUser = await userModels.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist" });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password does not match!" });

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await userModels.create({
      email: email,
      password: hashPassword,
      dateOfBirth: dateOfBirth,
      age: age,
      name: `${firstName} ${lastName}`,
    });
    const token =  jwt.sign(
      { email: result.email, id: result._id },
      'secret',
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
