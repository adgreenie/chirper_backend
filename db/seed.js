const User = require('../models/User')
const Chirp = require('../models/Chirp')
const Comment = require('../models/Comment')
const seedData = require('./seedData.js')

async function seedDB() {
    try {
        await User.deleteMany({})
        await Chirp.deleteMany({})
        await Comment.deleteMany({})

        seedData.forEach(data => {
            User.create({
                username: data.username,
                password: data.password
            })
            seedChirps(data.chirpsData, data.username)
        })
    }
    catch (err) {
        console.log('seed failed', err)
    }
}

async function seedChirps(chirpsData, username) {
    return Promise.all(chirpsData.map(async chirpData => {
        try {
            let chirp = await Chirp.create({
                username: username,
                body: chirpData.body,
            })

            let commentArr = await seedComments(chirpData.commentsData, chirp)

            chirp.comments.push(...commentArr)
            chirp.save()
            return chirp
        }
        catch (err) {
            console.log('Chirp seed failed', err)
        }
    }))
}

async function seedComments(commentsData, chirp) {
    return Promise.all(commentsData.map(commentData => {
        return Comment.create({
            username: commentData.username,
            body: commentData.body,
            reChirp: chirp
        })
    }))
}

seedDB()