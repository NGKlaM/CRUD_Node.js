import express from "express";
import routerProducts from "./productRoutes";
import routerAuth from "./auth";
import routerCategory from "./categoryRotes";

const router = express.Router();

router.use("/products", routerProducts);
router.use("/categories", routerCategory);
router.use("/auth", routerAuth);
export default router;
