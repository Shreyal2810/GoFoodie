import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// Get user cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ user: req.params.userId }).populate("items.menuItem");
  res.json(cart);
});

// Add to cart
router.post("/:userId", async (req, res) => {
  try {
    const { menuItem, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.params.userId });

    if (!cart) {
      cart = await Cart.create({ user: req.params.userId, items: [{ menuItem, quantity }] });
    } else {
      cart.items.push({ menuItem, quantity });
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
