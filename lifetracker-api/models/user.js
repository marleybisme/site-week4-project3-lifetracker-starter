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
            firstname: user.firstname,
            lastname: user.lastname,
            created_at: user.created_at
        }
    }
    static async makeNutritionEntry(user, nutritionEntry) {
      return {
        user_id: user.id,
        id: nutritionEntry.id,
        foodname: nutritionEntry.foodname,
        category: nutritionEntry.category,
        quantity: nutritionEntry.quantity,
        calories: nutritionEntry.calories,
        image_url: nutritionEntry.image_url,
        created_at: nutritionEntry.created_at
      }
    }
     
    static async fetchNutritionById(req, res, next) {
      try {
        const { id } = req.params;
        const nutrition = await User.findByPk(id);
  
        if (!nutrition) {
          throw new NotFoundError('Nutrition not found.');
        }
  
        res.json(nutrition);
      } catch (error) {
        next(error);
      }
    }
  
    static async listNutritionForUser(req, res, next) {
      try {
        const userId = req.user.id;
        const nutritions = await Nutrition.findAll({
          where: { user_id: userId },
        });

        res.json(nutritions);
      } catch (error) {
        next(error);
      }
    }

  
    static async createNutrition(nutritionEntry) {
      console.log("Nutrition Entry: ", nutritionEntry)
      const credentials = nutritionEntry.credentials
      const nutrition = nutritionEntry.nutritionEntry
  
      const result = await db.query(
        `
        INSERT INTO nutrition (
          user_id,
          foodname,
          category,
          quantity,
          calories,
          image_url
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, foodname, category, quantity, calories, user_id, image_url, created_at;
      `,
        [
          credentials.id,
          nutrition.foodname,
          nutrition.category,
          nutrition.quantity,
          nutrition.calories,
          nutrition.image_url
        ]);
        const entry = result.rows[0];
        console.log("Entry:" , entry)
        return User.makeNutritionEntry(credentials, entry);
    }

    // EXERCISE

    static async makeExerciseEntry(user, exerciseEntry) {
      return {
        user_id: user.id,
        id: exerciseEntry.id,
        exname: exerciseEntry.exname,
        category: exerciseEntry.category,
        duration: exerciseEntry.duration,
        intensity: exerciseEntry.intensity,
        created_at: exerciseEntry.created_at
      }
    }
     
    static async fetchExerciseById(req, res, next) {
      try {
        const { id } = req.params;
        const exercise = await User.findByPk(id);
  
        if (!exercise) {
          throw new NotFoundError('Exercise not found.');
        }
  
        res.json(exercise);
      } catch (error) {
        next(error);
      }
    }
  
    static async listExerciseForUser(req, res, next) {
      try {
        const userId = req.user.id;
        const exercises = await Exercise.findAll({
          where: { user_id: userId },
        });

        res.json(exercises);
      } catch (error) {
        next(error);
      }
    }

  
    static async createExercise(exerciseEntry) {
      console.log("Exercise Entry: ", exerciseEntry)
      const credentials = exerciseEntry.credentials
      const exercise = exerciseEntry.exerciseEntry
  
      const result = await db.query(
        `
        INSERT INTO exercise (
          user_id,
          exname,
          category,
          duration,
          intensity
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING  user_id, id, exname, category, duration, intensity, created_at;
      `,
        [
          credentials.id,
          exercise.exname,
          exercise.category,
          exercise.duration,
          exercise.intensity,
        ]);
        const entry = result.rows[0];
        console.log("Entry:" , entry)
        return User.makeExerciseEntry(credentials, entry);
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
    
    const requiredFields = ["email", "password", "username", "firstname", "lastname"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body!`);
      }
    });
    
    if (credentials.email.indexOf("@") <= 0) {
        throw new BadRequestError("Invalid email.")
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
        firstname,
        lastname,
        password
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, username, email, firstname AS "firstname", password, lastname as "lastname", created_at;
    `,
      [
        lowercaseEmail,
        credentials.username,
        credentials.firstname,
        credentials.lastname,
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
    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    const user = result.rows[0];
    return user;
  }

}

module.exports = User;
