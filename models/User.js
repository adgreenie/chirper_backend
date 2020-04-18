const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    image: String,
    chirps: [Chirp],
    likes: [Chirp],
    followers: [
        {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    following: [
        {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const User = mongoose.model('User', UserSchema)
module.exports = User