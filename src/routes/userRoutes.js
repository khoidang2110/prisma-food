import express from "express";
 import { createLike, createOrder, createRate, getLikeListByRes, getLikeListByUser, getRateListByRes, getRateListByUser, getUser } from "../controllers/userControllers.js";
import foodRoutes from "./foodRoutes.js";
import { getFood } from "../controllers/foodControllers.js";

const userRoutes = express.Router();

// userRoutes.post("/res-like",resLike);
userRoutes.get("/get-like-by-user/:user_id",getLikeListByUser);
userRoutes.get("/get-rate-by-user/:user_id",getRateListByUser);

userRoutes.get("/get-like-by-res/:res_id",getLikeListByRes); // testing
userRoutes.get("/get-rate-by-res/:res_id",getRateListByRes);
userRoutes.post("/create-order",createOrder);
userRoutes.post("/create-rate",createRate);
userRoutes.post("/create-like",createLike)

foodRoutes.get("/get-food",getFood)
userRoutes.get('/get-user',getUser)
export default userRoutes;