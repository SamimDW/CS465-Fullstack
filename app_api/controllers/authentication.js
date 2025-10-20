const mongoose = require("mongoose");
const User = require("../models/user");
const passport = require("passport");

// POST /api/register - Register a new user
// Regardless of the outcome, response must include HTML status code
// and a JSON object (not just a string)

const register = async (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = new User({
    email: req.body.email, // Set email from request body
    name: req.body.name, // Set name from request body
    password: "", // Placeholder, will be set below
  });

  user.setPassword(req.body.password); // Set password using method from user model
  const q = await user.save(); // Save the new user to the database

  if (!q) {
    return res.status(400).json(err);
  } else {
    const token = user.generateJWT(); // Generate JWT for the new user
    return res.status(200).json(token);
  }
};

const login = (req, res) => {
  // Validate message to ensure that email and password are present.
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Delegate authentication to passport module
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // Error in Authentication Process
      return res.status(404).json(err);
    }

    if (user) {
      // Auth succeeded - generate JWT and return to caller
      const token = user.generateJWT();
      res.status(200).json({ token });
    } else {
      // Auth failed return error
      res.status(401).json(info);
    }
  }) (req, res);
};

// Export methods that drive endpoints
module.exports = {
  register,
  login,
};
