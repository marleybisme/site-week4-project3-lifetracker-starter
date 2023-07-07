const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require('../config')

const generateToken = (data) => jwt.sign(data, SECRET_KEY, {expiresIn: "1h"})

const createUserJwt = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }
    return generateToken(payload)
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    } catch(err) {
        return {}
    }
}

module.exports = {
    generateToken,
    createUserJwt,
    validateToken
}