import express from "express";
import PlainListController from "../../controller/PlainListController.js";

const router = express.Router();

router.post("/plain-list", new PlainListController().fetchPlainList);

export default router;