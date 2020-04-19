const User = require("../models/User")

const getAllUsers = (req, res) => {
    User.find({}).then(users => {
        console.log(users)
        res.json(users)
    }).catch(err => {
        console.log(err)
        res.send("Error loading users")
    })
}

module.exports = { getAllUsers }