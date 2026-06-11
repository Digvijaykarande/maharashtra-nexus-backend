import express from "express";
import { getSchools, getSchool, createSchool, updateSchool, deleteSchool } from "../controllers/SchoolController.js";

const router = express.Router();

router.route("/").get(getSchools).post(createSchool);
router.route("/:slug").get(getSchool).patch(updateSchool).delete(deleteSchool);

export default router;