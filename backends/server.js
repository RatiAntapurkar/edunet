require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/restaurants", restaurantRoutes);

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("MONGO_URI is missing from environment variables!");
    process.exit(1);
}

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
