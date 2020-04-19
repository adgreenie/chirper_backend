const User = require('../models/User')
const Chirp = require('../models/Chirp').Chirp
const Comment = require('../models/Comment').Comment
const seedData = require('./seedData.js')

async function seedDB() {
    try {
        await User.deleteMany({})
        await Chirp.deleteMany({})
        await Comment.deleteMany({})
        seedData.forEach(async data => {
            try {
                let user = await User.create({
                    username: data.username,
                    password: data.password
                })
                user.chirps.push(
                    ...data.chirpsContent.map(async chirpContent => {
                        try {
                            let chirp = await Chirp.create({
                                userId: user,
                                body: chirpContent.body,
                            })
                            chirp.comments.push(
                                ...chirpContent.commentBodyArr.map(commentBody => {
                                    return Comment.create({
                                        userId: user,
                                        body: commentBody
                                    })
                                })
                            )
                            chirp.save()
                            return chirp
                        }
                        catch (err) {
                            console.log('chirp seed failed', err)
                        }
                    })
                )
                user.save()
            }
            catch (err) {
                console.log('user seed failed', err)
            }
        })
    }
    catch (err) {
        console.log('seed failed', err)
    }
}

seedDB()
