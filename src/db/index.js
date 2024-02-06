import mongoose from "mongoose";
import {db_Name}  from "../constants.js";

const connectToDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${db_Name}`);
        console.log(`MongoDB Connected Successfully !! DB HOST:${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection Failed",error);
        process.exit(1);
    }
}

export default connectToDB ;
