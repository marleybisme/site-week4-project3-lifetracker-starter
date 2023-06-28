const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req, res, next) =>{
    try {
        // login info, attempt to authenticate
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) =>{
    try {
        // create a new user
    } catch (err) {
        next(err)
    }
})

module.exports = router;