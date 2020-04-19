const Chirp = require("../models/Chirp").Chirp

const getAllChirps = (req, res) => {
    Chirp.find({}).then(chirps => {
        res.json(chirps)
    }).catch(err => {
        console.log(err)
        res.send("Error loading chirps")
    })
}

const getChirpsByUsername = (req, res) => {
    Chirp.find({ username: req.params.username }).then(chirp => {
        res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send(`Could not find chirps by "${req.params.username}"`)
    })
}

const getChirpById = (req, res) => {
    Chirp.find({ _id: req.params.id }).then(chirp => {
        res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send(`Chirp ID: "${req.params.id}" not found`)
    })
}

module.exports = {
    getAllChirps,
    getChirpsByUsername,
    getChirpById
}