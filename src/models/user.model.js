import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase:true
        },
        name: { 
            type: String, 
            required: true, 
        },
        role: { 
            type: String, 
            enum: ["admin", "librarian", "user"], 
            default: "user" 
        },
        regNum: { 
            type: String, 
            required: true,
            match:[/^ui\d{2}[a-z]{2}\d{2}$/],
            lowercase:true,
            unique:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^ui\d{2}[a-z]{2}\d{2}@iiitsurat\.ac\.in$/, "Wrong Email Format"],
            lowercase: true,
        },
        password: { 
            type: String, 
            required: true 
        },
});

export const User = mongoose.model("User", userSchema);
