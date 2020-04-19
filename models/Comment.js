const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    date: { type: Date, default: Date.now },
    body: String,
    numLikes: { type: Number, default: 0 },
    chirpId: {
        ref: "Chirp",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = { Comment , CommentSchema }