import Division from "../models/DivisionModel.js"

import {
  getAll,
  getBySlug,
  createOne,
  updateBySlug,
  deleteBySlug
} from "./factoryController.js";
import District from "../models/DistrictModel.js";

export const getDivisions =
  getAll(Division);

export const getDivision =
  getBySlug(Division);

export const createDivision =
  createOne(Division);

export const updateDivision =
  updateBySlug(Division);

export const deleteDivision =
  deleteBySlug(Division);

export const getDivisionDistricts =
  async (req, res) => {
    try {
      console.log(
        "Division slug:",
        req.params.slug
      );

      const districts =
        await District.find({
          division: req.params.slug,
        });

      console.log(
        "Districts found:",
        districts.length
      );

      res.status(200).json({
        success: true,
        count: districts.length,
        data: districts,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };