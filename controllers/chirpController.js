const Chirp = require("../models/Chirp")

const getAllChirps = (req, res) => {
    Chirp.Chirp.find({}).then(chirps => {
        console.log(chirps)
        res.json(chirps)
    }).catch(err => {
        console.log(err)
        res.send("Error loading chirps")
    })
}

module.exports = { getAllChirps }