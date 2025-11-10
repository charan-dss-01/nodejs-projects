import { getUser } from "../services/auth.js";

export function isLoggined(req, res, next) {
    const userUid = req.cookies?.uid; // ✅ correct key
    console.log("Cookie UID:", userUid);

    if (!userUid) {
        return res.status(400).json({
            msg: "Please login to access this page"
        });
    }

    const user = getUser(userUid);
    console.log("User:", user);

    if (!user) {
        return res.status(400).json({
            msg: "Please login to access this page"
        });
    }

    req.user = user;
    next();
}
