const Comment = require("../models/Comment")

const getAllComments = (req, res) => {
    Comment.Comment.find({}).then(comments => {
        console.log(comments)
        res.json(comments)
    }).catch(err => {
        console.log(err)
        res.send("Error loading comments")
    })
}

module.exports = { getAllComments }