const express = require("express")
const mongoose = require("mongoose")
const app = express()

const PORT = process.env.PORT || 3000
const MONGO = process.env.MONGO || "mongodb://localhost:27017/betabot"

mongoose.connect(MONGO, () => console.log("connected to mongo"))

app.listen(PORT, () => console.log(`listening on ${PORT}`))