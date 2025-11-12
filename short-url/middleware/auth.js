import { getUser } from "../services/auth.js";

export function isLoggined(req, res, next) {
 const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    if (!authHeader) {
        return res.status(401).json({ msg: "Missing authorization header" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ msg: "Invalid authorization format" });
    }

    const token = parts[1].trim();
    if (!token) {
        return res.status(401).json({ msg: "Missing token" });
    }

    const user = getUser(token);
    if (!user) {
        return res.status(401).json({ msg: "Please login to access this page" });
    }

    req.user = user;
    next();
}
