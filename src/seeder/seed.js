import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Division from "../models/divisionModel.js";
import District from "../models/districtModel.js";
import Taluka from "../models/talukaModel.js";
import Village from "../models/villageModel.js";
import City from "../models/cityModel.js";
import Town from "../models/townModel.js";
import School from "../models/schoolModel.js";
import Hospital from "../models/hospitalModel.js";
import College from "../models/collegeModel.js";

import { divisions } from "../data/divisions.js";
import { districts } from "../data/districts.js";
import { talukas } from "../data/talukas.js";
import { villages } from "../data/villages.js";
import { cities } from "../data/cities.js";
import { towns } from "../data/towns.js";
import { schools } from "../data/schools.js";
import { hospitals } from "../data/hospitals.js";
import { colleges } from "../data/colleges.js";

dotenv.config();

const importData = async () => {
  try {
    await Division.deleteMany();
    await District.deleteMany();
    await Taluka.deleteMany();
    await Village.deleteMany();
    await City.deleteMany();
    await Town.deleteMany();
    await School.deleteMany();
    await Hospital.deleteMany();
    await College.deleteMany();

    await Division.insertMany(divisions);
    await District.insertMany(districts);
    await Taluka.insertMany(talukas);
    await Village.insertMany(villages);
    await City.insertMany(cities);
    await Town.insertMany(towns);
    await School.insertMany(schools);
    await Hospital.insertMany(hospitals);
    await College.insertMany(colleges);

    console.log("✅ Data Imported Successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Seeder Error:", error);
    process.exit(1);
  }
};

const runSeeder = async () => {
  await connectDB();
  await importData();
};

runSeeder();