const Menu = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.addMenuItem = async (req, res) => {
  try {
    const { name, price, category, imageUrl } = req.body;
    const newItem = new Menu({ name, price, category, imageUrl });
    await newItem.save();
    res.status(201).json({ message: "Menu item added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
