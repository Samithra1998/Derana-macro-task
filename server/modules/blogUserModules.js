import mongoose from "mongoose";

const blogUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("blogUserModel", blogUserSchema);
