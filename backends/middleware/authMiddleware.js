const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ msg: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ msg: "Invalid token." });
    }
};

const adminMiddleware = (req, res, next) => {
    if (!req.user.isAdmin) return res.status(403).json({ msg: "Access denied. Admins only." });
    next();
};

module.exports = { authMiddleware, adminMiddleware };
