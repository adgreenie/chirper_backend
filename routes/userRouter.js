const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.getAllUsers)

router.get("/:username", userController.getUserByUsername)

router.post("/", userController.createUser)

router.put("/:username", userController.updateUser)

router.delete("/:username", userController.deleteUser)

module.exports = router