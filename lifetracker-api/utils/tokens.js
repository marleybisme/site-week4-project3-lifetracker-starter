const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require('../config')

const generateToken = (data) => jwt.sign(data, SECRET_KEY, {expiresIn: "1h"})

const createUserJwt = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
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