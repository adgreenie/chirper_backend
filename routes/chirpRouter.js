const express = require("express")
const router = express.Router()
const chirpController = require("../controllers/chirpController")

router.get("/", chirpController.getAllChirps)

module.exports = router