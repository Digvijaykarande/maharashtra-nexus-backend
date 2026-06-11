import express from "express";

import {
  getDistricts,
  getDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
  getDistrictTalukas,
} from "../controllers/disrictController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getDistricts)
  .post(protect, createDistrict);

router.get(
  "/:slug/talukas",
  getDistrictTalukas
);

router
  .route("/:slug")
  .get(getDistrict)
  .put(protect, updateDistrict)
  .delete(protect, deleteDistrict);

export default router;