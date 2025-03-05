const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
        {
            dishId: mongoose.Schema.Types.ObjectId,
            name: String,
            price: Number,
            quantity: Number,
        }
    ]
});

module.exports = mongoose.model("Cart", CartSchema);
