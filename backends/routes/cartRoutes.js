const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const Cart = require("../models/Cart");

const router = express.Router();

router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { userId, restaurantId, dish } = req.body;

        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        cart.items.push({ restaurantId, dish });
        await cart.save();

        res.json({ msg: "Item added to cart successfully!", cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Get user's cart
router.get("/:userId", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).json({ msg: "Cart not found" });

        res.json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
