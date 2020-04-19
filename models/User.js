const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    image: String,
    chirps: [
        {
            ref: "Chirp",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    comments: [
        {
            ref: "Comment",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    likes: [
        {
            ref: "Chirp",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    followers: [String],
    following: [String]
})

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema)
module.exports = User