import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },  // unique: true means email should be unique
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
}, {
    timestamps: true
});  // timestamps: true will automatically create createdAt and updatedAt fields


const User = mongoose.model("User", userSchema);

export default User;