// Import Schema and Model
const {Schema, model} = require("../db/connection.js");

// The Boulder Schema
const Boulder = new Schema({
    url: String,
    name: {type: String, required: true},
    grade: {type: String, required: true},
    location: String,
    date: String,
    slab: Boolean,
    vertical: Boolean, 
    overhung: Boolean,
    jugs: Boolean,
    crimps: Boolean,
    slopers: Boolean,
    pinches: Boolean,
    pockets: Boolean,
    volumes: Boolean,
    cracks: Boolean,
    aretes: Boolean,
    edging: Boolean,
    smearing: Boolean,
    flagging: Boolean,
    stemming: Boolean,
    bathanging: Boolean,
    liebacking: Boolean,
    mantling: Boolean,
    dropkneeing: Boolean,
    sidepulling: Boolean,
    palming: Boolean,
    dynoing: Boolean,
    gastoning: Boolean,
    heelhooking: Boolean,
    toehooking: Boolean,
    lockingoff: Boolean,
});

// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    boulders: [Boulder]
}, {timestamps: true});

// The User Model
const User = model("User", UserSchema);

// Export the User Model
module.exports = User