const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    location:{
        type: String, 
        required: true  
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);