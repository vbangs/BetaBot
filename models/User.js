// Import Schema and Model
const {Schema, model} = require("../db/connection.js");

// The Boulder Schema
const BoulderSchema = new Schema({
    url: String,
    name: {type: String, required: true},
    grade: {type: String, required: true},
    location: String,
    username: String,
}, {timestamps: true});

// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {timestamps: true});

// The User Model
const User = model("User", UserSchema);
const Boulder = model("Boulder", BoulderSchema);

// Export the User Model
module.exports = {User, Boulder}