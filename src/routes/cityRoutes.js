import express from "express";
import { getCities, getCity, createCity, updateCity, deleteCity } from "../controllers/CityController.js";

const router = express.Router();

router.route("/").get(getCities).post(createCity);
router.route("/:slug").get(getCity).patch(updateCity).delete(deleteCity);

export default router;