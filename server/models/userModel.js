/**
 * User Model
 */

const mongoose = require("mongoose");

const userSchemaObj = {
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
}

const userSchema = new mongoose.Schema(userSchemaObj, {timestamps: true});

const User = mongoose.model(
    "User",
    userSchema
);

const createUser = async (userData) => {
    return await User.create(userData);
}

const getAllUser = async () => {
    return await User.find();
}

const getUserByEmail = async(email) => {
    return await User.findOne({ email });
}

module.exports = {
    createUser,
    getAllUser,
    getUserByEmail,
};