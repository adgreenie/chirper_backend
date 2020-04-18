const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ChirpSchema = new Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    date: { type: Date, default: Date.now },
    body: String,
    numLikes: Number,
    comments: [Comment]
})

const Chirp = mongoose.model('Chirp', ChirpSchema)
module.exports = Chirp