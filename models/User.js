// Import Schema and Model
const {Schema, model} = require("../db/connection.js")

// The Boulder Schema
const Boulder = new Schema({
    name: String,
    grade: String,
    location: String,
})

// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    boulders: [Boulder]
}, {timestamps: true})

// The User Model
const User = model("User", UserSchema)

// Export the User Model
module.exports = User;
module.exports = Boulder