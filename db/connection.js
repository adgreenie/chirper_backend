const mongoose = require('mongoose')
let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/chirper";
  }

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = Promise

module.exports = mongoose
