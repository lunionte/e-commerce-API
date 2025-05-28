import express from "express";
import { UserControllers } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UserControllers.getAll);
userRoutes.get("/users/:id", UserControllers.getById);
userRoutes.post("/users", UserControllers.save);
userRoutes.put("/users/:id", UserControllers.uptade);
userRoutes.delete("/users/:id", UserControllers.delete);
