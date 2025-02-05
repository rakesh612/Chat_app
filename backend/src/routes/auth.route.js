import express from "express"
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
//protectRoute is a middleware function that checks if the user is logged in or not
router.put("/update-profile",protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth)

export default router