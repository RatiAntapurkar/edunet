const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    dishes: [
        {
            name: String,
            price: Number,
            description: String,
        }
    ]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
