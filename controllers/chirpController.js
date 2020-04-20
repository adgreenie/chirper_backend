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
    Chirp.find({ username: req.params.username }).then(chirps => {
        res.json(chirps)
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
        res.send(`Chirp with ID: "${req.params.id}" not found`)
    })
}

const createChirp = (req, res) => {
    Chirp.create(req.body).then(chirp => {
        res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating chirp`)
    })
}

const updateChirp = (req, res) => {
    Chirp.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(chirp => {
            res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send(`Could not update chirp with ID: "${req.params.id}"`)
    })
}

const deleteChirp = (req, res) => {
    Chirp.findOneAndDelete({ _id: req.params.id }).then(chirp => {
        res.send(`The chirp "${chirp.body}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete chirp with ID: "${req.params.id}"`)
    })
}

module.exports = {
    getAllChirps,
    getChirpsByUsername,
    getChirpById,
    createChirp,
    updateChirp,
    deleteChirp
}