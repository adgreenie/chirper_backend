const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

const userRouter = require("./routes/userRouter")
app.use('/users', userRouter)

const chirpRouter = require("./routes/chirpRouter")
app.use('/chirps', chirpRouter)

const commentRouter = require("./routes/commentRouter")
app.use('/comments', commentRouter)

app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})