import express from "express";

import {
  getDivisions,
  getDivision,
  createDivision,
  updateDivision,
  deleteDivision,
  getDivisionDistricts,
} from "../controllers/divisionController.js";

const router = express.Router();

router
  .route("/")
  .get(getDivisions)
  .post(createDivision);

router.get(
  "/:slug/districts",
  getDivisionDistricts
);

router
  .route("/:slug")
  .get(getDivision)
  .put(updateDivision)
  .delete(deleteDivision);

export default router;