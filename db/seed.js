const User = require('../models/User')
const Chirp = require('../models/Chirp').Chirp
const Comment = require('../models/Comment').Comment

async function seedDB() {
    await User.deleteMany({})
    await Chirp.deleteMany({})
    await Comment.deleteMany({})
    let user = await User.create({
        username: 'adam',
        password: 'password'
    })
    let chirp = await Chirp.create({
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    })
    let comment = await Comment.create({
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })
    chirp.comments.push(comment)
    chirp.save()
    user.chirps.push(chirp)
    user.save()
}

seedDB()
