const User = require("../models/User")

const getAllUsers = (req, res) => {
    User.find({}).then(users => {
        res.json(users)
    }).catch(err => {
        console.log(err)
        res.send("Error loading users")
    })
}

const getUserById = (req, res) => {
    User.find({ _id: req.params.id }).then(user => {
        res.json(user)
    }).catch(err => {
        console.log(err)
        res.send(`User ID: "${req.params.id}" not found`)
    })
}

module.exports = {
    getAllUsers,
    getUserById
}