const Chirp = require("../models/Chirp")
const Comment = require("../models/Comment")

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
        res.send(`Error loading chirps by "${req.params.username}"`)
    })
}

const getChirpById = (req, res) => {
    Chirp.findOne({ _id: req.params.id }).then(chirp => {
        res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send(`Error loading chirp with ID: "${req.params.id}"`)
    })
}

const createChirp = (req, res) => {
    Chirp.create(req.body).then(chirp => {
        res.json(chirp)
    }).catch(err => {
        console.log(err)
        res.send("Error creating chirp")
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

const deleteChirp = async (req, res) => {
    const chirp = await Chirp.findOne({ _id: req.params.id })

    await Comment.deleteMany({ _id: { $in: chirp.comments }})

    chirp.delete().then(chirp => {
        res.send(`${chirp.username}'s chirp "${chirp.body}" has been deleted`)
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