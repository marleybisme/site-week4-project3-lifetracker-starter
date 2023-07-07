const { BadRequestError, NotFoundError } = require('../errors');
const { Nutrition } = require('../models');

class Nutrition {
  static async createNutrition(req, res, next) {
    try {
      const { name, category, quantity, calories, image_url } = req.body;

      // Check if all required fields are provided
      if (!name || !category || !quantity || !calories || !image_url) {
        throw new BadRequestError('Name, category, quantity, calories, and image URL are required.');
      }

      
      // Create the nutrition entry in the database
      const nutrition = await Nutrition.create({
        name,
        category,
        calories,
        image_url,
        user_id: userId,
      });

      res.status(201).json(nutrition);
    } catch (error) {
      next(error);
    }
  }

  static async fetchNutritionById(req, res, next) {
    try {
      const { id } = req.params;

      // Find the nutrition entry by ID
      const nutrition = await Nutrition.findByPk(id);

      // Check if the nutrition entry exists
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
      // Get the authenticated user's ID (assuming you have implemented authentication)
      const userId = req.user.id;

      // Find all nutrition entries owned by the user
      const nutritions = await Nutrition.findAll({
        where: { user_id: userId },
      });

      res.json(nutritions);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Nutrition;
