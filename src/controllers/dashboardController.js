import Village from "../models/villageModel.js";
import Division from "../models/divisionModel.js";
import District from "../models/districtModel.js";
import Taluka from "../models/talukaModel.js";
import City from "../models/cityModel.js";
import Town from "../models/townModel.js";
import Hospital from "../models/hospitalModel.js";
import School from "../models/schoolModel.js";
import College from "../models/collegeModel.js";

export const getDashboardStats = async (
  req,
  res
) => {
  try {
    const [
      villages,
      divisions,
      districts,
      talukas,
      cities,
      towns,
      hospitals,
      schools,
      colleges,
    ] = await Promise.all([
      Village.countDocuments(),
      Division.countDocuments(),
      District.countDocuments(),
      Taluka.countDocuments(),
      City.countDocuments(),
      Town.countDocuments(),
      Hospital.countDocuments(),
      School.countDocuments(),
      College.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: {
        villages,
        divisions,
        districts,
        talukas,
        cities,
        towns,
        hospitals,
        schools,
        colleges,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};