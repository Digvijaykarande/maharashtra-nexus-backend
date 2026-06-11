import express from "express";

import {
  getTalukas,
  getTaluka,
  createTaluka,
  updateTaluka,
  deleteTaluka,
  getTalukaVillages,
  getTalukaCities,
  getTalukaTowns,
} from "../controllers/talukaController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getTalukas)
  .post(protect, createTaluka);

router.get(
  "/:slug/villages",
  getTalukaVillages
);

router.get(
  "/:slug/cities",
  getTalukaCities
);

router.get(
  "/:slug/towns",
  getTalukaTowns
);

router
  .route("/:slug")
  .get(getTaluka)
  .put(protect, updateTaluka)
  .delete(protect, deleteTaluka);

export default router;