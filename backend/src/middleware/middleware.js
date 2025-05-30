import jwt from "jsonwebtoken";
import userRepo from "../repositories/repository.js";

const { JWT_SECRET } = process.env;

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token supplied" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userRepo.findByEmail(decoded?.email || "", { withPassword: false });
    if (!user) return res.status(401).json({ message: "Invalid token" });

    req.user = user;                   // attach user to request for downstream handlers
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
