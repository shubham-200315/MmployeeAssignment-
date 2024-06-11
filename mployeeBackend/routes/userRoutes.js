import express from "express"
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/userController.js"
import { protect, admin } from "../middleware/authMiddleware.js"
const router = express.Router()

router.route("/").get(protect, admin, getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
export default router
