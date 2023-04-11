import express from "express";

import ProductRoute from "./router/ProductRoute.js";
import ShopkeeperRoute from "./router/ShopkeeperRoute.js";
const router = express.Router();

router.get("/getallsk/", ShopkeeperRoute.getAllDoc);

router.post("/loginsk/", ShopkeeperRoute.getDocById);

router.post("/createsk/", ShopkeeperRoute.createDoc);

router.post("/getskbyid/", ShopkeeperRoute.getDoc);

router.put("/editskbyid/", ShopkeeperRoute.updateDoc);

router.delete("/deletesk/", ShopkeeperRoute.deleteDocById);

router.post("/getallproduct/", ProductRoute.getAllDoc);

router.post("/loginprod/", ProductRoute.getDocById);

router.post("/createprod/", ProductRoute.createDoc);

router.post("/getprodbyid/", ProductRoute.getDoc);

router.put("/updateparticularprod/:id", ProductRoute.updateDocById);

router.put("/editprodbymail/", ProductRoute.updateDoc);

router.delete("/deleteprod/", ProductRoute.deleteDocById);

export default router;
