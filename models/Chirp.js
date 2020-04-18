const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const Comment = require('./Comment').CommentSchema

const ChirpSchema = new Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    date: { type: Date, default: Date.now },
    body: String,
    numLikes: { type: Number, default: 0 },
    comments: [Comment]
})

const Chirp = mongoose.model('Chirp', ChirpSchema)
module.exports = { Chirp , ChirpSchema }