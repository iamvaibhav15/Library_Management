import dotenv from "dotenv";
import connectToDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
import {app} from "./app.js";

connectToDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server Listening at port http://localhost:${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log(`MongoDB Connection Failed !! ${err}`);
})