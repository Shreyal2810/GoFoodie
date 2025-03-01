import express from "express";
import MenuItem from "../models/MenuItem.js"; // Ensure this model exists

const router = express.Router();

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu items", error });
  }
});

export default router;
