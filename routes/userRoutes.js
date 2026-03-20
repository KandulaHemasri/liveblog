import express from "express";
import User from "../models/User.js";

const router = express.Router();

/**
 * @route   POST /api/users
 * Create a new user
 */
router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validation
    if (!username || !email) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({
      username,
      email
    });

    res.status(201).json({
      msg: "User created successfully",
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/**
 * @route   GET /api/users
 *  Get all users
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/**
 * @route   GET /api/users/:id
 * Get single user by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/**
 * @route   DELETE /api/users/:id
 * Delete a user
 */
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;