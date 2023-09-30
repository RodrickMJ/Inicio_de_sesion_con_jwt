import express, { Router } from "express";
import { authenticaMiddleware } from "../../../middlewares/authenticator";
import { bookCreateController } from "../dependencies";

export const bookRouter:Router = express.Router();

bookRouter.post("/",authenticaMiddleware,bookCreateController.run.bind(bookCreateController));