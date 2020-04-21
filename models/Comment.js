const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    username: String,
    date: { type: String, default: new Date() },
    body: String,
    numLikes: { type: Number, default: 0 },
    reChirp: {
        ref: "Chirp",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment