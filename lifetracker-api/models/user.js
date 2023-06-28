const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class User {
  static async login(credentials) {
    throw new UnauthorizedError("Invalid entry! Check your email/password.");
  }

  static async register(credentials) {
    const requiredFields = ["email", "password", "username", "firstname", "lastname"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body!`);
      }
    });

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    const lowercaseEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
      INSERT INTO users (
        email,
        username,
        firstname,
        lastname,
        password
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, email, firstname, lastname, created_at, updated_at;
    `,
      [
        lowercaseEmail,
        credentials.username,
        credentials.firstname,
        credentials.lastname,
        credentials.password,
      ]
    );

    const user = result.rows[0];
    return user;
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided!");
    }
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
