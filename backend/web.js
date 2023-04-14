import express from "express";

import ProductRoute from "./router/ProductRoute.js";
import FarmerRoute from "./router/FarmerRoute.js";
import ShopkeeperRoute from "./router/ShopkeeperRoute.js";
const router = express.Router();

router.get("/getallsk/", ShopkeeperRoute.getAllDoc);

router.post("/getskbypin/", ShopkeeperRoute.getDocByPin);

router.post("/loginsk/", ShopkeeperRoute.getDocById);

router.post("/createsk/", ShopkeeperRoute.createDoc);

router.post("/getskbyid/", ShopkeeperRoute.getDoc);

router.put("/editskbyid/", ShopkeeperRoute.updateDoc);

router.delete("/deletesk/", ShopkeeperRoute.deleteDocById);

router.post("/getallproduct/", ProductRoute.getAllDoc);

router.get("/allproduct/", ProductRoute.getAll);

router.post("/getprodbyid/", ProductRoute.getDocById);

router.post("/createprod/", ProductRoute.createDoc);

router.post("/getprodbyid/", ProductRoute.getDoc);

router.put("/updateparticularprod/:id", ProductRoute.updateDocById);

router.put("/editprodbymail/", ProductRoute.updateDoc);

router.delete("/deleteprod/", ProductRoute.deleteDocById);

router.post("/createfarmer/", FarmerRoute.createDoc);
router.post("/farmerlogin/", FarmerRoute.getDocByNo);
router.post("/deletecart/", FarmerRoute.deletecart);
router.post("/updatecart/", FarmerRoute.updatecart);

export default router;
