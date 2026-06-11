import express from "express";
import { getColleges, getCollege, createCollege, updateCollege, deleteCollege } from "../controllers/CollegeController.js";

const router = express.Router();

router.route("/").get(getColleges).post(createCollege);
router.route("/:slug").get(getCollege).patch(updateCollege).delete(deleteCollege);

export default router;