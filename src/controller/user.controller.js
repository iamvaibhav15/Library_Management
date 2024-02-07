import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
      const { name, username, password, email, role, regNum } = req.body;
  
      // Check if any required field is blank
      if (!name || !username || !password || !email || !regNum) {
        return res.status(400).json({ error: 'All fields are mandatory' });
      }
  
      // Check if the username already exists
      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Check if the email already exists
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Create a new user using the User model
      const newUser = new User({ username, password, email, role, regNum, name });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Check if the user was created successfully
      if (!savedUser) {
        return res.status(500).json({ error: 'User creation failed' });
      }
  
      // Respond with the saved user details (you may choose to omit the password field for security reasons)
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export default registerUser;
  