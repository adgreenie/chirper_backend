const User = require("../models/User")
const Chirp = require("../models/Chirp")
const Comment = require("../models/Comment")

const getAllUsers = (req, res) => {
    User.find({}).then(users => {
        res.json(users)
    }).catch(err => {
        console.log(err)
        res.send("Error loading users")
    })
}

const getUserByUsername = (req, res) => {
    User.findOne({ username: req.params.username }).then(user => {
        res.json(user) 
    }).catch(err => {
        console.log(err)
        res.send(`Could not retrieve user "${req.params.username}"`)
    })
}

const validateUser = async (req, res) => {
    User.findOne({ username: req.body.username, password: req.body.password }).then(user => {
        user ? res.json(true) : res.json(false)
    }).catch(err => {
        console.log(err)
        res.send("Error validating user", req)
    })
}

const createUser = (req, res) => {
    User.create(req.body).then(user => {
        res.json(user)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating user "${req.params.username}"...this username may already be claimed`)
    })
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({ username: req.params.username }, req.body)
        .then(user => {
            res.json(user)
    }).catch(err => {
        console.log(err)
        res.send("Could not update user...are you trying to change username to one that's already claimed?")
    })
}

// deletes all Chirps by the User, Comments on those Chirps, and Comments by the User
const deleteUser = async (req, res) => {
    const user = await User.findOne({ username: req.params.username })

    const chirps = await Chirp.find({ username: user.username })
    
    await asyncForEach(chirps, async (chirp) => {
        await Comment.deleteMany({ _id: { $in: chirp.comments }})
        chirp.delete()
    })

    await Comment.deleteMany({ username: user.username })

    user.delete().then(user => {
        res.send(`The user "${user.username}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete user with username: "${req.params.username}"`)
    })
}

// asyncForEach function was derived from this article:
// https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
async function asyncForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        await callback(arr[i], i , arr)
    }
}

module.exports = {
    getAllUsers,
    getUserByUsername,
    validateUser,
    createUser,
    updateUser,
    deleteUser
}