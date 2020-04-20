const User = require("../models/User")

const getAllUsers = (req, res) => {
    User.find({}).then(users => {
        res.json(users)
    }).catch(err => {
        console.log(err)
        res.send("Error loading users")
    })
}

const getUserByUsername = (req, res) => {
    User.find({ username: req.params.username }).then(user => {
        res.json(user)
    }).catch(err => {
        console.log(err)
        res.send(`Username: "${req.params.username}" not found`)
    })
}

const createUser = (req, res) => {
    User.create(req.body).then(user => {
        res.json(user)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating user`)
    })
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({ username: req.params.username }, req.body)
        .then(user => {
            res.json(user)
    }).catch(err => {
        console.log(err)
        res.send(`Could not update user with username: "${req.params.id}"`)
    })
}

const deleteUser = (req, res) => {
    User.findOneAndDelete({ username: req.params.username }).then(user => {
        res.send(`The user "${req.params.username}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete user with username: "${req.params.username}"`)
    })
}

module.exports = {
    getAllUsers,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
}