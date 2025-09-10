const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401);
        throw new Error("Authorization header missing or malformed");
    }

    const token = authHeader.split(" ")[1]?.trim();

    if (!token) {
        res.status(401);
        throw new Error("Token is missing");
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded.user; // attach user info to request
        next();
    } catch (err) {
        res.status(401);
        throw new Error("Token is invalid or expired");
    }
});

module.exports = validateToken;

