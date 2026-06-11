import Village from "../models/VillageModel.js";

import {
  getAll,
  getBySlug,
  createOne,
  updateBySlug,
  deleteBySlug
} from "./factoryController.js";

export const getVillages = getAll(Village);

export const getVillage = getBySlug(Village);

export const createVillage = createOne(Village);

export const updateVillage = updateBySlug(Village);

export const deleteVillage = deleteBySlug(Village);