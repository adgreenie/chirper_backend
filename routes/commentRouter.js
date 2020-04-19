const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")

router.get("/", commentController.getAllComments)

router.get("/username/:username", commentController.getCommentsByUsername)

router.get("/id/:id", commentController.getCommentById)

module.exports = router