const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {

        throw new UnauthorizedError("Invalid entry! Check your email/password.")
    }
    static async register(credentials) {

    }
}

module.exports = User