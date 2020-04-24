const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    password: String,
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dnj7porin/image/upload/v1587728631/default-user-icon_ugojoc.png'
    },
    likedChirps: [
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