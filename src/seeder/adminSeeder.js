import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "../models/UserModel.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );

    const existingAdmin =
      await User.findOne({
        email: "admin@mhnexus.com",
      });

    if (existingAdmin) {
      console.log(
        "Super Admin already exists"
      );

      process.exit();
    }

    await User.create({
      name: "Digvijay",
      email: "karandedigvijay2@gmail.com",
      password: "8010503097",
      role: "superadmin",
    });

    console.log(
      "Super Admin Created"
    );

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();