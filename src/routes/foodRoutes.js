import express from "express";
import { getFood } from "../controllers/foodControllers.js";

const foodRoutes = express.Router();

foodRoutes.get("/get-food",getFood);

export default foodRoutes;