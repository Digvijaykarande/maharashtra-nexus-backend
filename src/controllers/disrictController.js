import District from "../models/DistrictModel.js";
import Taluka from "../models/TalukaModel.js";

import {
  getAll,
  createOne,
  updateBySlug,
  deleteBySlug,
  getBySlug,
} from "./factoryController.js";

export const getDistricts =
  getAll(District);

export const getDistrict =
  getBySlug(District);

export const createDistrict =
  createOne(District);

export const updateDistrict =
  updateBySlug(District);

export const deleteDistrict =
  deleteBySlug(District);

/*
GET
/api/v1/districts/pune/talukas
*/
export const getDistrictTalukas =
  async (req, res) => {
    try {
      const district =
        await District.findOne({
          slug: req.params.slug,
        });

      if (!district) {
        return res.status(404).json({
          success: false,
          message: "District not found",
        });
      }

      const talukas =
        await Taluka.find({
          district: district.slug,
        });

      res.status(200).json({
        success: true,
        count: talukas.length,
        data: talukas,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };