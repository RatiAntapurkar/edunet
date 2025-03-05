const express = require("express");
const Restaurant = require("../models/Restaurant");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/add", authMiddleware, adminMiddleware, async (req, res) => {
    const { name, location, dishes } = req.body;
    try {
        const newRestaurant = new Restaurant({ name, location, dishes });
        await newRestaurant.save();
        res.json({ msg: "Restaurant added successfully!", restaurant: newRestaurant });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ msg: "Restaurant not found" });

        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
