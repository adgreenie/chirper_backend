const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ChirpSchema = new Schema({
    username: String,
    date: { type: String, default: new Date() },
    body: String,
    numLikes: { type: Number, default: 0 },
    comments: [
        {
            ref: "Comment",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
})

const Chirp = mongoose.model('Chirp', ChirpSchema)
module.exports = Chirp