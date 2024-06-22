const express = require("express");
const router = express.Router();

const Menu = require("../models/Menu");

router.post("/", async (req, res) => {
    try {
        const newMenuData = req.body;
        const newMenu = new Menu(newMenuData);

        const savedMenu = await newMenu.save();
        console.log("Saved menu to database");
        res.status(200).json(savedMenu);
    } catch (error) {
        console.error("Error saving menu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        console.error("Error fetching menus:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
