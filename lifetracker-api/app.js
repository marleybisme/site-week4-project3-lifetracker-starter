const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { NotFoundError } = require("./utils/errors")
const config = require("./config")
// const authRoutes = require("./routes/auth")
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

// routes
// app.use("/auth", authRoutes)

// health check
app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})

// handles 404 errors
app.use(function (req, res, next) {
    return next(new NotFoundError())
  })

module.exports = app;