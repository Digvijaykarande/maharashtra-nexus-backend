import express from "express";
import { getTowns, getTown, createTown, updateTown, deleteTown } from "../controllers/townController.js";

const router = express.Router();

router.route("/").get(getTowns).post(createTown);
router.route("/:slug").get(getTown).patch(updateTown).delete(deleteTown);

export default router;