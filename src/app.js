import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));

// used to get the data from form when submitted in the json format with limit of 16kb
app.use(express.json({
    limit:'16kb'
}));

// used to get the data from url using url decoder which decode the url in its original form
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

// used to save some of the files and folder in our server in Public Folder
// used for public Assets
app.use(express.static("./public"))

// used to perform operation on cookie in user's browser from server (CRUD Operations) (read and update only by server)
app.use(cookieParser());
// app.use('/balle',(req,res)=>{
//     res.send("<h1>balle balle pencho</h1>");
// })


//routes import
//routes declaration
// Register route
import {User} from "./models/user.model.js"

app.post('/register', async (req, res) => {
    try {
      const { username, password, email, role } = req.body;
  
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
      const newUser = new User({ username, password, email, role });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Respond with the saved user details (you may choose to omit the password field for security reasons)
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  



export { app };