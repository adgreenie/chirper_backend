const User = require('../models/User')
const Chirp = require('../models/Chirp').Chirp
const Comment = require('../models/Comment').Comment
const seedData = require('./seedData.js')

async function seedDB() {
    try {
        await User.deleteMany({})
        await Chirp.deleteMany({})
        await Comment.deleteMany({})

        await asyncForEach(seedData, async (data) => {
            try {
                let user = await User.create({
                    username: data.username,
                    password: data.password
                })
                
                let chirpArr = await seedChirps(data.chirpsData, data.username)

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

// asyncForEach function was derived from this article:
// https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
async function asyncForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        await callback(arr[i], i , arr)
    }
}

async function seedChirps(chirpsData, username) {
    return Promise.all(chirpsData.map(async chirpData => {
        try {
            let chirp = await Chirp.create({
                username: username,
                body: chirpData.body,
            })

            let commentArr = await seedComments(chirpData.commentsData)

            chirp.comments.push(...commentArr)
            chirp.save()
            return chirp
        }
        catch (err) {
            console.log('Chirp seed failed', err)
        }
    }))
}

async function seedComments(commentsData) {
    return Promise.all(commentsData.map(commentData => {
        return Comment.create({
            username: commentData.username,
            body: commentData.body
        })
    }))
}

async function addCommentsToUsers() {
    const allComments = await Comment.find({})

    console.log('allComments', allComments)

    allComments.forEach(async comment => {
        let author = await User.findOne({ username: comment.username })
        console.log('author', author)
        if (author) {
            author.comments.push(comment)
            author.save()
        } else {
            console.log('comment author not found')
        }
    })
}

seedDB()