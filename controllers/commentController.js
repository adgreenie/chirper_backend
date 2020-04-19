const Comment = require("../models/Comment").Comment

const getAllComments = (req, res) => {
    Comment.find({}).then(comments => {
        console.log(comments)
        res.json(comments)
    }).catch(err => {
        console.log(err)
        res.send("Error loading comments")
    })
}

const getCommentById = (req, res) => {
    Comment.find({ _id: req.params.id }).then(comment => {
        res.json(comment)
    }).catch(err => {
        console.log(err)
        res.send(`Comment ID: "${req.params.id}" not found`)
    })
}

module.exports = {
    getAllComments,
    getCommentById
}