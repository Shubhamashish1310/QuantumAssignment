import { Router } from "express";
import { register, login } from "../controllers/controller.js";
import { getAllUsers } from "../controllers/controller.js";
const router = Router();

router.get("/users", getAllUsers);

router.post("/register", register);
router.post("/login",    login);

export default router;
