import express from "express";
import { 
  getUsers, 
  getUser, 
  createUser, 
  updateUser, 
  deleteUser,
  getMe // <-- We will create this controller method next
} from "../controllers/userController.js";

const router = express.Router();

// Base routes
router.route("/")
  .get(getUsers)
  .post(createUser);

// 1. CRITICAL: Static route must be placed BEFORE the dynamic /:id parameter!
router.route("/me")
  .get(getMe); 

// Dynamic routes
router.route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export default router;