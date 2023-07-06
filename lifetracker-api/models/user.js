const db = require("../db");
const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { dbBcrypt } = require("../config")


class User {
    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            created_at: user.created_at
        }
    }
  static async login(credentials) {
    const requiredFields = ["email", "password"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body!`);
      }
    })
    const user = await User.fetchUserByEmail(credentials.email)
    if (user) {
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (isValid) {
            return User.makePublicUser(user)
        }
    }
    throw new UnauthorizedError("Invalid email/password combo")

}

  static async register(credentials) {
    const requiredFields = ["email", "password", "username", "firstName", "lastName"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body!`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
        throw new BadRequestError("Invalid email.  ")
    }

    const existingEmail = await User.fetchUserByEmail(credentials.email);
    if (existingEmail) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }
    

    const hashedPassword = await bcrypt.hash(credentials.password, 13);

    const lowercaseEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
      INSERT INTO users (
        email,
        username,
        firstName,
        lastName,
        password
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, username, email, firstName, password, lastName, created_at;
    `,
      [
        lowercaseEmail,
        credentials.username,
        credentials.firstName,
        credentials.lastName,
        hashedPassword
      ]
    );

    const user = result.rows[0];
    return User.makePublicUser(user);
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new RequestError("No email provided!");
    }
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
