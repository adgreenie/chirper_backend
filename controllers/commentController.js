const Comment = require("../models/Comment")
const Chirp = require("../models/Chirp")

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

const createComment = (req, res) => {
    Comment.create(req.body).then(comment => {
        res.json(comment)
    }).catch(err => {
        console.log(err)
        res.send(`Error creating comment`)
    })
}

const updateComment = (req, res) => {
    Comment.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(comment => {
            res.json(comment)
    }).catch(err => {
        console.log(err)
        res.send(`Could not update comment with ID: "${req.params.id}"`)
    })
}

const deleteComment = (req, res) => {
    Comment.findOneAndDelete({ _id: req.params.id }).then(comment => {
        res.send(`${comment.username}'s comment "${comment.body}" has been deleted`)
    }).catch(err => {
        console.log(err)
        res.send(`Could not delete comment with ID: "${req.params.id}"`)
    })
}

module.exports = {
    getAllComments,
    getCommentsByUsername,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
}