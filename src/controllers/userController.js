import User from "../models/UserModel.js";
import { getAll, getOne, createOne, updateBySlug, deleteBySlug } from "./factoryController.js";

export const getUsers = getAll(User);
export const getUser = getOne(User);
export const createUser = createOne(User);
export const updateUser = updateBySlug(User);
export const deleteUser = deleteBySlug(User);
export const getMe = async (req, res) => {
  try {
    // Queries the collection using Digvijay's unique email context
    const currentUser = await User.findOne({ email: "karandedigvijay2@gmail.com" });

    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: "Active superadmin user session not found in database."
      });
    }

    res.status(200).json({
      success: true,
      data: currentUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};