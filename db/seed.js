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
                let chirpArr = await Promise.all(data.chirpsData.map(async chirpData => {
                    try {
                        let chirp = await Chirp.create({
                            username: data.username,
                            body: chirpData.body,
                        })
                        let commentArr = await Promise.all(chirpData.commentsData.map(commentData => {
                            return Comment.create({
                                username: commentData.username,
                                body: commentData.body
                            })
                        }))
                        chirp.comments.push(...commentArr)
                        chirp.save()
                        return chirp
                    }
                    catch (err) {
                        console.log('Chirp seed failed', err)
                    }
                }))
                user.chirps.push(...chirpArr)
                user.save()
            }
            catch (err) {
                console.log('User seed failed', err)
            }
        })

        addCommentsToUsers()
    }
    catch (err) {
        console.log('seed failed', err)
    }
}

async function addCommentsToUsers() {
    const allComments = await Comment.find({})

    console.log('allComments', allComments)

    allComments.forEach(async comment => {
        let author = await User.find({ username: comment.username })
        author.comments.push(comment)
        author.save()
    })
}

seedDB()
