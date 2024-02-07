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
import userRouter from "./routes/user.route.js"
//routes declaration
app.use('/api/user', userRouter);
// Register route

  



export { app };