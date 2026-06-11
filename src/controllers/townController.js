import Town from "../models/TownModel.js";
import { getAll, getOne, createOne, updateBySlug, deleteBySlug, getBySlug } from "./factoryController.js";

export const getTowns = getAll(Town);
export const getTown = getBySlug(Town);
export const createTown = createOne(Town);
export const updateTown = updateBySlug(Town);
export const deleteTown = deleteBySlug(Town);
