import express from "express";
import AuthController from "../../controller/AuthController.js";

const router = express.Router();

router.post("/token", new AuthController().generateToken);

export default router;