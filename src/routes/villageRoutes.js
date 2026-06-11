import express from "express";
import { getVillages, getVillage, createVillage, updateVillage, deleteVillage } from "../controllers/VillageController.js";

const router = express.Router();

router.route("/").get(getVillages).post(createVillage);
router.route("/:slug").get(getVillage).put(updateVillage).delete(deleteVillage);

export default router;