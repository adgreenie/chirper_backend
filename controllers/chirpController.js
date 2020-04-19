const Chirp = require("../models/Chirp").Chirp

const getAllChirps = (req, res) => {
    Chirp.find({}).then(chirps => {
        console.log(chirps)
        res.json(chirps)
    }).catch(err => {
        console.log(err)
        res.send("Error loading chirps")
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
    getChirpById
}