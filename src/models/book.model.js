import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  serialNum: { type: String, required: true, unique: true },
  subject: { type: String },
  // Add more book-related properties as needed
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
