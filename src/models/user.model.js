import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'librarian', 'user'], default: 'user' },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^ui\d{2}[a-z]{2}\d{2}@iiitsurat\.ac\.in$/, "Wrong Email Format"],
    lowercase: true,
  },
  // Add more user-related properties as needed
});

export const User = mongoose.model('User', userSchema);