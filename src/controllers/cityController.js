import City from "../models/CityModel.js";
import { getAll, getOne, createOne, updateBySlug, deleteBySlug,getBySlug } from "./factoryController.js";

export const getCities = getAll(City);
export const getCity = getBySlug(City);
export const createCity = createOne(City);
export const updateCity = updateBySlug(City);
export const deleteCity = deleteBySlug(City);