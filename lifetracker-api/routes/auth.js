const express = require("express");
const User = require("../models/user");
const db = require("../db");
const router = express.Router();
const { createUserJwt } = require("../utils/tokens");
const bcrypt = require("bcrypt");
const { requireAuthenticatedUser } = require("../middleware/security");



router.get("/me", requireAuthenticatedUser , async (req, res, next) => {
  try {
    const email = res.locals.user.email
    const user = User.fetchUserByEmail(email)
    return res.status(200).json({ user });
  } catch (err) {
    res.send(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(200).json({ 
        message: "User registered successfully",
        token:token,
        user: user
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const getUserQuery = `
        SELECT * FROM users
        WHERE email = $1
       `;

    const result = await db.query(getUserQuery, [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createUserJwt(user);
    
    res.status(200).json({
      message: "Login Successful",
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
      },
    });
  } catch (err) {
    console.error("Error logging in: ", err);
    res.status(500).json({ message: "Error logging in" });
  }
});

router.post("/nutrition", async (req, res, next) => {
  console.log("nut bod", req.body)
  try{
    const nutrition = await User.createNutrition(req.body)
    return res.status(201).json({ nutrition })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
