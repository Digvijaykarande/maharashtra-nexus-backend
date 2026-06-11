import express from "express";
import { getHospitals, getHospital, createHospital, updateHospital, deleteHospital } from "../controllers/hospitalController.js";

const router = express.Router();

router.route("/").get(getHospitals).post(createHospital);
router.route("/:slug").get(getHospital).patch(updateHospital).delete(deleteHospital);

export default router;