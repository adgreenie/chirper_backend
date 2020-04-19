const Comment = require("../models/Comment").Comment

const getAllComments = (req, res) => {
    Comment.find({}).then(comments => {
        res.json(comments)
    }).catch(err => {
        console.log(err)
        res.send("Error loading comments")
    })
}

const getCommentsByUsername = (req, res) => {
    Comment.find({ username: req.params.username }).then(comments => {
        res.json(comments)
    }).catch(err => {
        console.log(err)
        res.send(`Could not find comments by "${req.params.username}"`)
    })
}

const getCommentById = (req, res) => {
    Comment.find({ _id: req.params.id }).then(comment => {
        res.json(comment)
    }).catch(err => {
        console.log(err)
        res.send(`Comment with ID: "${req.params.id}" not found`)
    })
}

module.exports = {
    getAllComments,
    getCommentsByUsername,
    getCommentById
}