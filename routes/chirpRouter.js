const express = require("express")
const router = express.Router()
const chirpController = require("../controllers/chirpController")

router.get("/", chirpController.getAllChirps)

router.get("/username/:username", chirpController.getChirpsByUsername)

router.get("/id/:id", chirpController.getChirpById)

router.post("/", chirpController.createChirp)

router.put("/:id", chirpController.updateChirp)

router.delete("/:id", chirpController.deleteChirp)

module.exports = router